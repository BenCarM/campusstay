import Layout from '../components/Layout';

export default function AnalyticsPage() {
  return (
    <Layout title="Analytics">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p className="text-sm text-slate-400">Occupancy</p>
          <p className="mt-3 text-3xl font-semibold text-white">82%</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p className="text-sm text-slate-400">Views</p>
          <p className="mt-3 text-3xl font-semibold text-white">14.2k</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
          <p className="text-sm text-slate-400">Revenue</p>
          <p className="mt-3 text-3xl font-semibold text-white">UGX 12.8M</p>
        </div>
      </div>
    </Layout>
  );
}
