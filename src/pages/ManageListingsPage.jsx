import Layout from '../components/Layout';
import { properties } from '../services/demoData';

export default function ManageListingsPage() {
  return (
    <Layout title="Manage listings">
      <div className="space-y-4">
        {properties.map((property) => (
          <div key={property.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">{property.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{property.location}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full bg-blue-600 px-3 py-2 text-sm text-white">Edit</button>
                <button className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
