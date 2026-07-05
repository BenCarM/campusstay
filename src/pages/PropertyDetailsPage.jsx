import { Link, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { properties } from '../services/demoData';
import { FiMapPin, FiShield, FiStar, FiWifi, FiZap } from 'react-icons/fi';

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const property = properties.find((item) => item.id === id) || properties[0];

  return (
    <Layout title={property.title}>
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {property.images.map((image) => (
              <img key={image} src={image} alt={property.title} className="h-44 w-full rounded-2xl object-cover" />
            ))}
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-white">Description</h2>
          <p className="mt-3 text-slate-300">{property.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
            {property.amenities.map((item) => <span key={item} className="rounded-full border border-white/10 bg-slate-800 px-3 py-2">{item}</span>)}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Starting from</p>
                <p className="text-3xl font-semibold text-white">KSh {property.price.toLocaleString()}</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">★ {property.rating}</span>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2"><FiMapPin /> {property.location} • {property.university}</div>
              <div className="flex items-center gap-2"><FiWifi /> Fast WiFi included</div>
              <div className="flex items-center gap-2"><FiShield /> Secure entry and CCTV</div>
              <div className="flex items-center gap-2"><FiZap /> Power backup available</div>
            </div>
            <div className="mt-6 flex gap-3">
              <button className="rounded-full bg-blue-600 px-4 py-3 font-medium text-white">Book viewing</button>
              <button className="rounded-full border border-white/10 px-4 py-3 font-medium text-slate-200">Save</button>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Landlord profile</h2>
            <p className="mt-2 text-slate-400">Highly rated host with 4.9 average across 120 reviews.</p>
            <Link to="/messages" className="mt-4 inline-block rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white">Chat landlord</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
