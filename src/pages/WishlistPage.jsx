import Layout from '../components/Layout';
import { properties } from '../services/demoData';
import { Link } from 'react-router-dom';

export default function WishlistPage() {
  return (
    <Layout title="Wishlist">
      <div className="grid gap-4 md:grid-cols-2">
        {properties.map((property) => (
          <div key={property.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <h3 className="text-lg font-semibold text-white">{property.title}</h3>
            <p className="mt-2 text-sm text-slate-400">{property.location} • {property.university}</p>
            <p className="mt-4 text-sm text-slate-300">UGX {property.price.toLocaleString()}</p>
            <Link to={`/property/${property.id}`} className="mt-5 inline-block rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">View</Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}
