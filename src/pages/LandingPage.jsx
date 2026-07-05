import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiHeart, FiMapPin, FiShield, FiStar, FiUsers, FiWifi, FiZap } from 'react-icons/fi';
import Layout from '../components/Layout';
import { properties } from '../services/demoData';

const stats = [
  { label: 'Verified Listings', value: '280+' },
  { label: 'Students Served', value: '1,400+' },
  { label: 'Verified Landlords', value: '97%' },
];

const benefits = [
  { title: 'Verified stays', text: 'Every listing is reviewed for safety, price and proximity.', icon: FiShield },
  { title: 'Instant booking', text: 'Schedule viewings and reserve rooms without the back-and-forth.', icon: FiZap },
  { title: 'Live search', text: 'Filter by price, amenities, transport and university gate.', icon: FiWifi },
];

const footerHighlights = [
  { title: 'Flexible stays', text: 'Short-term and long-term options for every semester.', icon: FiUsers },
  { title: 'Neighborhood insights', text: 'Find homes close to campus, malls and transit.', icon: FiMapPin },
  { title: 'Trusted support', text: 'Round-the-clock help from verified hosts and our team.', icon: FiCheckCircle },
];

export default function LandingPage() {
  return (
    <Layout>
      <section className="overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),linear-gradient(135deg,_rgba(15,23,42,0.96),_rgba(17,24,39,0.95))] p-6 shadow-2xl shadow-blue-950/30 backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-200">
              <FiShield className="text-cyan-300" />
              Trusted off-campus housing for university life
            </div>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Discover a premium place to live near campus.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                Browse verified rentals, compare amenities and book a viewing in minutes with CampusStay.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/search" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-900/30 transition-transform hover:-translate-y-0.5">
                Explore homes
              </Link>
              <Link to="/register" className="rounded-full border border-white/15 bg-white/10 px-5 py-3 font-medium text-slate-100 backdrop-blur transition hover:bg-white/15">
                Create account
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-slate-950/20">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative">
            <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-cyan-400/25 via-blue-500/10 to-transparent blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/60 p-3 shadow-2xl shadow-slate-950/40 backdrop-blur">
              <img src="/images/hero-hostel.svg" alt="Modern student hostel exterior" className="h-[360px] w-full rounded-[24px] object-cover sm:h-[430px]" />
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-slate-950/70 px-3 py-1 text-sm text-slate-100 backdrop-blur">
                24/7 concierge
              </div>
              <div className="absolute bottom-6 right-6 max-w-[220px] rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm text-slate-200 shadow-lg backdrop-blur">
                <div className="flex items-center gap-2 font-medium text-white">
                  <FiCheckCircle className="text-emerald-400" />
                  Fully verified stays
                </div>
                <p className="mt-2 text-slate-400">Flexible bookings and instant student support.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-2xl font-semibold text-white">Why students choose CampusStay</h2>
            <div className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
              100% safe
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {benefits.map(({ title, text, icon: Icon }) => (
              <div key={title} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-800/70 p-4">
                <div className="rounded-2xl bg-cyan-500/15 p-3 text-cyan-300">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {properties.slice(0, 2).map((property, index) => (
            <motion.article key={property.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: index * 0.08 }} className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20 backdrop-blur">
              <div className="relative">
                <img src={property.images?.[0] ?? '/images/hero-hostel.svg'} alt={property.title} className="h-44 w-full object-cover" />
                <div className="absolute left-3 top-3 rounded-full border border-cyan-400/30 bg-slate-950/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                  Verified
                </div>
                <button type="button" className="absolute right-3 top-3 rounded-full border border-white/15 bg-slate-950/70 p-2 text-white backdrop-blur">
                  <FiHeart size={16} />
                </button>
                <div className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1 text-sm text-slate-100 backdrop-blur">
                  {property.availableRooms} rooms left
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{property.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{property.location} • {property.university}</p>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-sm text-amber-300">
                    <FiStar size={14} /> {property.rating}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                  <FiMapPin /> {property.distance.toFixed(1)} km to campus
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-slate-300">KSh {property.price.toLocaleString()} / month</p>
                  <Link to={`/property/${property.id}`} className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    View stay <FiArrowRight />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[28px] border border-white/10 bg-slate-900/60 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Campus-ready living</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Everything students need in one place</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/search" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/15">
              Explore listings
            </Link>
            <Link to="/support" className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/15">
              Need help?
            </Link>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {footerHighlights.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <div className="inline-flex rounded-full bg-cyan-400/10 p-2 text-cyan-300">
                <Icon size={18} />
              </div>
              <h3 className="mt-3 font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
