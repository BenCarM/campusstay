import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';

export default function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log('Reset', data);
  };

  return (
    <Layout title="Reset your password">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-blue-900/20">
        <h2 className="text-2xl font-semibold text-white">Forgot your password?</h2>
        <p className="mt-2 text-slate-400">We’ll send a reset link to your email address.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input {...register('email', { required: true })} className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" />
          </div>
          <button className="w-full rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white">Send reset link</button>
        </form>
        <p className="mt-4 text-sm text-slate-400"><Link to="/login" className="text-blue-300">Back to sign in</Link></p>
      </div>
    </Layout>
  );
}
