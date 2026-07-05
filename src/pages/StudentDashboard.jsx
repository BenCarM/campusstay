import Layout from '../components/Layout';
import { properties, bookings } from '../services/demoData';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiClock, FiHeart, FiMessageSquare, FiSearch, FiStar, FiTrendingUp, FiUser } from 'react-icons/fi';
import { useAppContext } from '../contexts/AppContext';

export default function StudentDashboard() {
  const { user } = useAppContext();
  const activeBookings = bookings.filter((booking) => booking.status === 'approved').length;
  const savedHomes = 4;
  const averageRating = 4.8;
  const upcomingBooking = bookings[0];
  const featuredProperty = properties[0];

  return (
    <Layout title="Student dashboard">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(17,24,39,0.95))] p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-300">Welcome back</p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Hi {user?.name || 'Student'},</h2>
                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">
                  You have {activeBookings} active booking{activeBookings === 1 ? '' : 's'} and {savedHomes} saved properties ready for your next move.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/search" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-medium text-white">
                  Find Accommodation
                </Link>
                <Link to="/bookings" className="rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium text-slate-100">
                  View My Bookings
                </Link>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Your activity</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <div className="flex items-center gap-2 text-cyan-300"><FiCalendar /><p className="text-sm font-medium">Active bookings</p></div>
                <p className="mt-3 text-2xl font-semibold text-white">{activeBookings}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <div className="flex items-center gap-2 text-pink-300"><FiHeart /><p className="text-sm font-medium">Saved homes</p></div>
                <p className="mt-3 text-2xl font-semibold text-white">{savedHomes}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <div className="flex items-center gap-2 text-amber-300"><FiStar /><p className="text-sm font-medium">Average rating</p></div>
                <p className="mt-3 text-2xl font-semibold text-white">{averageRating.toFixed(1)}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Recommended properties</h2>
              <Link to="/search" className="text-sm font-medium text-cyan-300">View all</Link>
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
          <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
            <div className="mt-4 space-y-3">
              <Link to="/search" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiTrendingUp /> Search homes</Link>
              <Link to="/bookings" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiCalendar /> Booking history</Link>
              <Link to="/messages" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiMessageSquare /> Messages</Link>
              <Link to="/wishlist" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiHeart /> Wishlist</Link>
              <Link to="/reviews" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4"><FiStar /> Reviews</Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Upcoming Booking</h2>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">Confirmed</span>
            </div>
            <div className="mt-4 rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <div className="flex items-center gap-2 text-cyan-300"><FiClock /><p className="text-sm font-medium">{featuredProperty?.title}</p></div>
              <p className="mt-2 text-sm text-slate-400">{featuredProperty?.location} • {featuredProperty?.university}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                <span>Booking ID: {upcomingBooking?.id}</span>
                <span>Status: {upcomingBooking?.status}</span>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Recent Activity</h2>
              <span className="text-sm text-slate-400">Today</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-3">
                <div className="rounded-full bg-cyan-400/10 p-2 text-cyan-300"><FiSearch /></div>
                <div>
                  <p className="text-sm font-medium text-white">Searched for homes near Kenyatta University</p>
                  <p className="mt-1 text-xs text-slate-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-3">
                <div className="rounded-full bg-emerald-400/10 p-2 text-emerald-300"><FiHeart /></div>
                <div>
                  <p className="text-sm font-medium text-white">Saved Greenview Student Hostel</p>
                  <p className="mt-1 text-xs text-slate-400">Yesterday</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-3">
                <div className="rounded-full bg-amber-400/10 p-2 text-amber-300"><FiUser /></div>
                <div>
                  <p className="text-sm font-medium text-white">Updated your profile preferences</p>
                  <p className="mt-1 text-xs text-slate-400">2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
