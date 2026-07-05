import Layout from '../components/Layout';

export default function SettingsPage() {
  return (
    <Layout title="System settings">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <h2 className="text-xl font-semibold text-white">Platform controls</h2>
        <div className="mt-4 space-y-3 text-slate-300">
          <p>Role-based access rules are enabled.</p>
          <p>Review moderation, storage quotas and notification rules are configured.</p>
        </div>
      </div>
    </Layout>
  );
}
