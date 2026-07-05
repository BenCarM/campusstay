import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';
import { useAppContext } from '../contexts/AppContext';
import Layout from '../components/Layout';

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useAppContext();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const uid = userCredential.user.uid;

    const userDoc = await getDoc(doc(db, "users", uid));

    if (!userDoc.exists()) {
      alert("User profile not found.");
      return;
    }

    const userData = userDoc.data();

    setUser(userData);

    switch (userData.role) {
      case "admin":
        navigate("/admin");
        break;

      case "landlord":
        navigate("/landlord");
        break;

      default:
        navigate("/student");
    }

  } catch (error) {
    alert(error.message);
  }
};

  return (
    <Layout title="Welcome back">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-900/20">
        <h2 className="text-2xl font-semibold text-white">Sign in to CampusStay</h2>
        <p className="mt-2 text-slate-400">Use your student, landlord or admin account to continue.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input {...register('email', { required: 'Email is required' })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="you@example.com" />
            {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p>}
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input type="password" {...register('password', { required: 'Password is required' })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="••••••••" />
            {errors.password && <p className="mt-2 text-sm text-rose-400">{errors.password.message}</p>}
          </div>
          <button className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white">Sign in</button>
        </form>
        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <Link to="/forgot-password" className="text-blue-300">Forgot password?</Link>
          <Link to="/register" className="text-blue-300">Create account</Link>
        </div>
      </div>
    </Layout>
  );
}
