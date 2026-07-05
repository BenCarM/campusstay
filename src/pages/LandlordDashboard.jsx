import Layout from '../components/Layout';
import { properties } from '../services/demoData';
import { Link } from 'react-router-dom';
import { FiBarChart2, FiHome, FiPlusCircle, FiUser } from 'react-icons/fi';

export default function LandlordDashboard() {
  return (
    <Layout title="Landlord dashboard">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Your properties</h2>
            <Link to="/manage-listings" className="text-sm font-medium text-blue-300">Manage all</Link>
          </div>
          <div className="mt-4 space-y-3">
            {properties.map((property) => (
              <div key={property.id} className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <div className="flex items-center justify-between"><h3 className="font-semibold text-white">{property.title}</h3><span className="text-sm text-emerald-300">{property.status}</span></div>
                <p className="mt-2 text-sm text-slate-400">{property.location} • {property.availableRooms} rooms available</p>
                <div className="mt-3 flex gap-2">
                  <Link to="/manage-listings" className="rounded-full bg-blue-600 px-3 py-2 text-sm text-white">Edit</Link>
                  <Link to="/messages" className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">Messages</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Quick actions</h2>
            <div className="mt-4 space-y-3">
              <Link to="/manage-listings" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiPlusCircle /> Add property</Link>
              <Link to="/messages" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiUser /> Manage bookings</Link>
              <Link to="/analytics" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiBarChart2 /> View analytics</Link>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Performance snapshot</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4"><p className="text-2xl font-semibold text-white">82%</p><p className="text-sm text-slate-400">Occupancy rate</p></div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4"><p className="text-2xl font-semibold text-white">12</p><p className="text-sm text-slate-400">Bookings</p></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
