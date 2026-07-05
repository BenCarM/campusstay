import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiMapPin, FiShield, FiWifi, FiZap } from 'react-icons/fi';
import Layout from '../components/Layout';
import { properties } from '../services/demoData';

const stats = [
  { label: 'Verified Listings', value: '1.2k+' },
  { label: 'Happy Students', value: '8.4k' },
  { label: 'Bookings This Month', value: '3.2k' },
];

const benefits = [
  { title: 'Verified stays', text: 'Every listing is reviewed for safety, price and proximity.', icon: FiShield },
  { title: 'Instant booking', text: 'Schedule viewings and reserve rooms without the back-and-forth.', icon: FiZap },
  { title: 'Live search', text: 'Filter by price, amenities, transport and university gate.', icon: FiWifi },
];

export default function LandingPage() {
  return (
    <Layout>
      <section className="grid gap-10 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-blue-900/20 backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">Trusted off-campus housing for university life</span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Find a home that fits your campus routine.</h1>
          <p className="max-w-xl text-lg text-slate-300">Browse verified rentals, compare amenities, book viewings and reserve rooms effortlessly with CampusStay.</p>
          <div className="flex flex-wrap gap-3">
            <Link to="/search" className="rounded-full bg-blue-600 px-5 py-3 font-medium text-white">Explore homes</Link>
            <Link to="/register" className="rounded-full border border-white/10 px-5 py-3 font-medium text-slate-100">Create account</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Search your next stay</h2>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">Live availability</span>
          </div>
          <div className="space-y-3">
            <input className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="Location or university" />
            <input className="w-full rounded-2xl border border-white/10 bg-slate-800 px-4 py-3" placeholder="Max budget" />
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-medium text-white">Search listings <FiArrowRight /></button>
          </div>
          <div className="mt-6 space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2"><FiCheckCircle /> Verified landlords</div>
            <div className="flex items-center gap-2"><FiCheckCircle /> Secure booking flow</div>
            <div className="flex items-center gap-2"><FiCheckCircle /> 24/7 support</div>
          </div>
        </motion.div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-semibold text-white">Why students choose CampusStay</h2>
          <div className="mt-6 space-y-4">
            {benefits.map(({ title, text, icon: Icon }) => (
              <div key={title} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <div className="rounded-2xl bg-blue-500/15 p-3 text-blue-300"><Icon size={20} /></div>
                <div>
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="text-sm text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {properties.slice(0, 2).map((property) => (
            <div key={property.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{property.title}</h3>
                <span className="text-sm text-emerald-300">★ {property.rating}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{property.location} • {property.university}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400"><FiMapPin /> {property.distance.toFixed(1)} km to campus</div>
              <p className="mt-4 text-sm text-slate-300">UGX {property.price.toLocaleString()} / month</p>
              <Link to={`/property/${property.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-300">See property <FiArrowRight /></Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
