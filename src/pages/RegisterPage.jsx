import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import Layout from '../components/Layout';

export default function RegisterPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
  console.log("Register button clicked");
  console.log(data);

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    await setDoc(doc(db, "users", userCredential.user.uid), {
      uid: userCredential.user.uid,
      name: data.name,
      email: data.email,
      role: data.role,
      createdAt: new Date(),
    });

    alert("Account created successfully!");
    navigate("/login");

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
  return (
    <Layout title="Create your account">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-900/20">
        <h2 className="text-2xl font-semibold text-white">Join CampusStay</h2>
        <p className="mt-2 text-slate-400">Create a student, landlord or admin profile to get started.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Full name</label>
            <input {...register('name', { required: 'Name is required' })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" />
            {errors.name && <p className="mt-2 text-sm text-rose-400">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input {...register('email', { required: 'Email is required' })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Role</label>
            <select {...register('role', { required: true })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3">
              <option value="student">Student</option>
              <option value="landlord">Landlord</option>
              <option value="admin">Administrator</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Minimum 8 characters' } })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" />
          </div>
          <button className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white">Create account</button>
        </form>
        <p className="mt-4 text-sm text-slate-400">Already have an account? <Link to="/login" className="text-blue-300">Sign in</Link></p>
      </div>
    </Layout>
  );
}
