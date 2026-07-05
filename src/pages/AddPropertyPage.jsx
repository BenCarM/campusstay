import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { auth, db, storage } from '../firebase/config';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

const amenityOptions = ['Wi-Fi', 'Parking', 'Furnished', 'Study Room', 'Gym', 'Laundry', 'Security', 'Kitchen'];

export default function AddPropertyPage() {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      amenities: [],
    },
  });

  const onSubmit = async (data) => {
    setSubmitError('');
    setSuccessMessage('');

    if (!auth.currentUser?.uid) {
      setSubmitError('You need to be signed in as a landlord to add a property.');
      return;
    }

    try {
      setIsUploading(true);

      let imageUrl = '';
      if (data.image && data.image[0]) {
        const imageFile = data.image[0];
        const storageRef = ref(storage, `properties/${Date.now()}-${imageFile.name}`);
        await uploadBytes(storageRef, imageFile);
        imageUrl = await getDownloadURL(storageRef);
      }

      await addDoc(collection(db, 'properties'), {
        title: data.title,
        description: data.description,
        propertyType: data.propertyType,
        monthlyRent: Number(data.monthlyRent),
        deposit: Number(data.deposit),
        county: data.county,
        town: data.town,
        estate: data.estate,
        university: data.university,
        distanceFromUniversity: Number(data.distanceFromUniversity),
        bedrooms: Number(data.bedrooms),
        bathrooms: Number(data.bathrooms),
        availableRooms: Number(data.availableRooms),
        amenities: data.amenities || [],
        imageUrl,
        landlordId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        status: 'available',
      });

      setSuccessMessage('Property added successfully. Redirecting to your dashboard...');
      window.setTimeout(() => navigate('/landlord'), 1200);
    } catch (error) {
      console.error('Failed to add property', error);
      setSubmitError('Unable to save the property right now. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Layout title="Add property">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-300">Landlord portal</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">List a new property</h2>
          <p className="mt-2 text-sm text-slate-400">Fill in the details below to publish a property for students.</p>
        </div>

        {successMessage ? (
          <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
            {successMessage}
          </div>
        ) : null}

        {submitError ? (
          <div className="mb-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
            {submitError}
          </div>
        ) : null}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Property name</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500"
                  placeholder="e.g. Blue Ridge Apartments"
                  {...register('title', { required: 'Property name is required' })}
                />
                {errors.title ? <p className="mt-2 text-sm text-red-400">{errors.title.message}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Description</label>
                <textarea
                  rows="4"
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500"
                  placeholder="Describe the home, nearby facilities, and what makes it special"
                  {...register('description', { required: 'Description is required' })}
                />
                {errors.description ? <p className="mt-2 text-sm text-red-400">{errors.description.message}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Property type</label>
                <select
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                  {...register('propertyType', { required: 'Property type is required' })}
                >
                  <option value="">Select type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Bedsitter">Bedsitter</option>
                  <option value="Single Room">Single Room</option>
                  <option value="Hostel">Hostel</option>
                  <option value="Maisonette">Maisonette</option>
                </select>
                {errors.propertyType ? <p className="mt-2 text-sm text-red-400">{errors.propertyType.message}</p> : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Monthly rent</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                    {...register('monthlyRent', { required: 'Monthly rent is required', min: 1 })}
                  />
                  {errors.monthlyRent ? <p className="mt-2 text-sm text-red-400">{errors.monthlyRent.message}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Deposit</label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                    {...register('deposit', { required: 'Deposit is required', min: 0 })}
                  />
                  {errors.deposit ? <p className="mt-2 text-sm text-red-400">{errors.deposit.message}</p> : null}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">County</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                    {...register('county', { required: 'County is required' })}
                  />
                  {errors.county ? <p className="mt-2 text-sm text-red-400">{errors.county.message}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Town</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                    {...register('town', { required: 'Town is required' })}
                  />
                  {errors.town ? <p className="mt-2 text-sm text-red-400">{errors.town.message}</p> : null}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Estate</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                  {...register('estate', { required: 'Estate is required' })}
                />
                {errors.estate ? <p className="mt-2 text-sm text-red-400">{errors.estate.message}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">University</label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                  {...register('university', { required: 'University is required' })}
                />
                {errors.university ? <p className="mt-2 text-sm text-red-400">{errors.university.message}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Distance from university (km)</label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                  {...register('distanceFromUniversity', { required: 'Distance is required', min: 0 })}
                />
                {errors.distanceFromUniversity ? <p className="mt-2 text-sm text-red-400">{errors.distanceFromUniversity.message}</p> : null}
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Bedrooms</label>
                <input
                  type="number"
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                  {...register('bedrooms', { required: 'Bedrooms are required', min: 1 })}
                />
                {errors.bedrooms ? <p className="mt-2 text-sm text-red-400">{errors.bedrooms.message}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Bathrooms</label>
                <input
                  type="number"
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                  {...register('bathrooms', { required: 'Bathrooms are required', min: 1 })}
                />
                {errors.bathrooms ? <p className="mt-2 text-sm text-red-400">{errors.bathrooms.message}</p> : null}
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Available rooms</label>
                <input
                  type="number"
                  className="w-full rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3 text-sm text-white outline-none"
                  {...register('availableRooms', { required: 'Available rooms are required', min: 1 })}
                />
                {errors.availableRooms ? <p className="mt-2 text-sm text-red-400">{errors.availableRooms.message}</p> : null}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Property image</label>
              <input
                type="file"
                accept="image/*"
                className="w-full rounded-2xl border border-dashed border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-slate-300 file:mr-4 file:rounded-full file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white"
                {...register('image')}
              />
            </div>
          </section>

          <section>
            <label className="mb-3 block text-sm font-medium text-slate-200">Amenities</label>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {amenityOptions.map((amenity) => (
                <label key={amenity} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 px-4 py-3 text-sm text-slate-300">
                  <input type="checkbox" value={amenity} className="h-4 w-4 rounded border-white/10 bg-slate-900 text-blue-500" {...register('amenities')} />
                  <span>{amenity}</span>
                </label>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
            <button
              type="submit"
              disabled={isSubmitting || isUploading}
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting || isUploading ? 'Saving property...' : 'Publish property'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/landlord')}
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
