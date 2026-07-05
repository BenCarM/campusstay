import Layout from '../components/Layout';
import { properties, bookings } from '../services/demoData';
import { Link } from 'react-router-dom';
import { FiCalendar, FiHeart, FiMessageSquare, FiStar, FiTrendingUp } from 'react-icons/fi';

export default function StudentDashboard() {
  return (
    <Layout title="Student dashboard">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Your activity</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4"><p className="text-2xl font-semibold text-white">{bookings.length}</p><p className="text-sm text-slate-400">Active bookings</p></div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4"><p className="text-2xl font-semibold text-white">4</p><p className="text-sm text-slate-400">Saved homes</p></div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4"><p className="text-2xl font-semibold text-white">4.8</p><p className="text-sm text-slate-400">Average rating</p></div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Recommended properties</h2>
              <Link to="/search" className="text-sm font-medium text-blue-300">View all</Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {properties.map((property) => (
                <div key={property.id} className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                  <div className="flex items-center justify-between"><h3 className="font-semibold text-white">{property.title}</h3><span className="text-sm text-emerald-300">★ {property.rating}</span></div>
                  <p className="mt-2 text-sm text-slate-400">{property.location} • {property.university}</p>
                  <p className="mt-3 text-sm text-slate-300">KSh {property.price.toLocaleString()} / month</p>
                  <div className="mt-4 flex gap-2">
                    <Link to={`/property/${property.id}`} className="rounded-full bg-blue-600 px-3 py-2 text-sm text-white">View</Link>
                    <Link to="/wishlist" className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">Save</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h2 className="text-xl font-semibold text-white">Quick links</h2>
            <div className="mt-4 space-y-3">
              <Link to="/search" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiTrendingUp /> Search homes</Link>
              <Link to="/bookings" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiCalendar /> Booking history</Link>
              <Link to="/messages" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiMessageSquare /> Messages</Link>
              <Link to="/wishlist" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiHeart /> Wishlist</Link>
              <Link to="/reviews" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiStar /> Reviews</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
