import Layout from '../components/Layout';
import { properties, users, reviews, bookings } from '../services/demoData';
import { Link } from 'react-router-dom';
import { FiActivity, FiAlertTriangle, FiBarChart2, FiShield, FiUsers } from 'react-icons/fi';

export default function AdminDashboard() {
  return (
    <Layout title="Admin dashboard">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold text-white">System overview</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4"><p className="text-2xl font-semibold text-white">{users.length}</p><p className="text-sm text-slate-400">Users</p></div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4"><p className="text-2xl font-semibold text-white">{properties.length}</p><p className="text-sm text-slate-400">Listings</p></div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4"><p className="text-2xl font-semibold text-white">{bookings.length}</p><p className="text-sm text-slate-400">Bookings</p></div>
          </div>
          <div className="mt-6 grid gap-3">
            <Link to="/manage-users" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiUsers /> Manage users</Link>
            <Link to="/manage-listings" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiActivity /> Review listings</Link>
            <Link to="/manage-reviews" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiShield /> Moderate reviews</Link>
            <Link to="/analytics" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiBarChart2 /> Analytics</Link>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Flagged items</h2>
            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4 text-sm text-amber-200"><FiAlertTriangle className="mr-2 inline" /> 2 reported listings need review</div>
              <div className="rounded-2xl border border-rose-400/20 bg-rose-500/10 p-4 text-sm text-rose-200">{reviews.length} review entries pending moderation</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
