import Layout from '../components/Layout';
import { users } from '../services/demoData';

export default function ManageUsersPage() {
  return (
    <Layout title="Manage users">
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.uid} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                <p className="mt-2 text-sm text-slate-400">{user.email} • {user.role}</p>
              </div>
              <button className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">Suspend</button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
