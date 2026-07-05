import Layout from '../components/Layout';
import { useAppContext } from '../contexts/AppContext';

export default function ProfilePage() {
  const { user } = useAppContext();

  return (
    <Layout title="Profile">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <h2 className="text-xl font-semibold text-white">Account details</h2>
        <div className="mt-4 space-y-3 text-slate-300">
          <p><span className="text-slate-400">Name:</span> {user?.name}</p>
          <p><span className="text-slate-400">Email:</span> {user?.email}</p>
          <p><span className="text-slate-400">Role:</span> {user?.role}</p>
          <p><span className="text-slate-400">Verified:</span> {user?.verified ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </Layout>
  );
}
