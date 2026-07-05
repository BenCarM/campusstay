import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheckCircle, FiCoffee, FiDroplet, FiHome, FiMapPin, FiSearch, FiShield, FiStar, FiTv, FiWifi, FiZap } from 'react-icons/fi';
import Layout from '../components/Layout';
import { properties } from '../services/demoData';

const amenityIcons = {
  WiFi: FiWifi,
  Water: FiDroplet,
  Electricity: FiZap,
  Security: FiShield,
  Parking: FiCheckCircle,
  Laundry: FiHome,
  Kitchen: FiCoffee,
  TV: FiTv,
};

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState(300000);
  const [selectedUniversity, setSelectedUniversity] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [distance, setDistance] = useState(6);
  const [rating, setRating] = useState(0);
  const [availability, setAvailability] = useState('all');

  const universities = ['All', ...new Set(properties.map((property) => property.university))];
  const propertyTypes = ['All', ...new Set(properties.map((property) => property.propertyType))];
  const amenities = ['WiFi', 'Water', 'Electricity', 'Security', 'Parking', 'Laundry', 'Kitchen', 'TV'];

  const visible = useMemo(() => properties.filter((property) => {
    const matchesQuery = !query || `${property.title} ${property.location} ${property.university}`.toLowerCase().includes(query.toLowerCase());
    const matchesPrice = property.price <= maxPrice;
    const matchesUniversity = selectedUniversity === 'All' || property.university === selectedUniversity;
    const matchesType = selectedType === 'All' || property.propertyType === selectedType;
    const matchesAmenities = selectedAmenities.length === 0 || selectedAmenities.every((amenity) => property.amenities.includes(amenity));
    const matchesDistance = property.distance <= distance;
    const matchesRating = property.rating >= rating;
    const matchesAvailability = availability === 'all' || (availability === 'available' && property.availableRooms > 3) || (availability === 'limited' && property.availableRooms <= 3);

    return matchesQuery && matchesPrice && matchesUniversity && matchesType && matchesAmenities && matchesDistance && matchesRating && matchesAvailability;
  }), [query, maxPrice, selectedUniversity, selectedType, selectedAmenities, distance, rating, availability]);

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((current) => (current.includes(amenity) ? current.filter((item) => item !== amenity) : [...current, amenity]));
  };

  return (
    <Layout title="Search accommodation">
      <div className="grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
        <div className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 backdrop-blur">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Refine your search</h2>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">{visible.length} results</span>
          </div>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Location or university</label>
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2">
                <FiSearch className="text-slate-400" />
                <input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full bg-transparent outline-none text-slate-100" placeholder="Try Kahawa Sukari" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">University</label>
              <select value={selectedUniversity} onChange={(e) => setSelectedUniversity(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none">
                {universities.map((university) => (
                  <option key={university} value={university}>{university}</option>
                ))}
              </select>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Property type</label>
              <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none">
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Amenities</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {amenities.map((amenity) => {
                  const isSelected = selectedAmenities.includes(amenity);
                  return (
                    <button key={amenity} type="button" onClick={() => toggleAmenity(amenity)} className={`rounded-full border px-3 py-1.5 text-sm ${isSelected ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200' : 'border-white/10 bg-slate-950/70 text-slate-300'}`}>
                      {amenity}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Max budget: KSH {maxPrice.toLocaleString()}</label>
              <input type="range" min="100000" max="400000" step="5000" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-cyan-400" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Distance from campus: {distance.toFixed(1)} km</label>
              <input type="range" min="0.5" max="8" step="0.5" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full accent-cyan-400" />
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Minimum rating</label>
              <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none">
                <option value={0}>Any</option>
                <option value={4.5}>4.5+</option>
                <option value={4.7}>4.7+</option>
                <option value={4.9}>4.9+</option>
              </select>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/70 p-4">
              <label className="mb-2 block text-sm text-slate-300">Availability</label>
              <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2 text-slate-100 outline-none">
                <option value="all">Any</option>
                <option value="available">Available</option>
                <option value="limited">Limited rooms</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {visible.map((property, index) => {
            const availabilityLabel = property.availableRooms > 3 ? 'Available' : 'Limited';
            const availabilityColor = property.availableRooms > 3 ? 'bg-emerald-500/10 text-emerald-300' : 'bg-amber-500/10 text-amber-300';

            return (
              <motion.article key={property.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/20 backdrop-blur">
                <div className="relative">
                  <img src={property.images?.[0] ?? '/images/hero-hostel.svg'} alt={property.title} className="h-48 w-full object-cover" />
                  <div className="absolute left-3 top-3 rounded-full border border-cyan-400/20 bg-slate-950/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                    Verified
                  </div>
                  <div className={`absolute right-3 top-3 rounded-full px-3 py-1 text-sm ${availabilityColor}`}>
                    {availabilityLabel}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{property.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{property.propertyType} • {property.location}</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-sm text-amber-300">
                      <FiStar size={14} /> {property.rating}
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
                    <span className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1">{property.university}</span>
                    <span className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1">{property.propertyType}</span>
                    <span className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1">{property.availableRooms} rooms</span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-300">{property.description}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {property.amenities.map((amenity) => {
                      const Icon = amenityIcons[amenity] ?? FiCheckCircle;
                      return (
                        <span key={amenity} className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/90 px-3 py-1.5 text-sm text-slate-300">
                          <Icon size={14} className="text-cyan-300" /> {amenity}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <FiMapPin /> {property.distance.toFixed(1)} km to campus
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-lg font-semibold text-white">KSH {property.price.toLocaleString()}</p>
                      <Link to={`/property/${property.id}`} className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-medium text-white">
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
