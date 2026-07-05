import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import { properties } from '../services/demoData';
import { Link } from 'react-router-dom';
import { FiMapPin, FiSearch } from 'react-icons/fi';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(300000);
  const visible = useMemo(() => properties.filter((property) => {
    const matchesQuery = !query || `${property.title} ${property.location} ${property.university}`.toLowerCase().includes(query.toLowerCase());
    const matchesPrice = property.price <= maxPrice;
    return matchesQuery && matchesPrice;
  }), [query, maxPrice]);

  return (
    <Layout title="Search accommodation">
      <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold text-white">Refine your search</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Location or university</label>
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900 px-3 py-2"><FiSearch /><input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-transparent outline-none" placeholder="Try Kikoni" /></div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Max budget: KSH {maxPrice.toLocaleString()}</label>
              <input type="range" min="100000" max="400000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-blue-400" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {visible.map((property) => (
            <div key={property.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{property.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{property.propertyType} • {property.location}</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">★ {property.rating}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{property.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-400"><FiMapPin /> {property.distance.toFixed(1)} km to campus</div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-lg font-semibold text-white">KSH {property.price.toLocaleString()}</p>
                <Link to={`/property/${property.id}`} className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">View details</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
