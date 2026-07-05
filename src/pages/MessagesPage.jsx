import Layout from '../components/Layout';

export default function MessagesPage() {
  return (
    <Layout title="Messages">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
        <h2 className="text-xl font-semibold text-white">Live chat with your landlord</h2>
        <p className="mt-3 text-slate-400">Messaging, typing indicators and read receipts are built into the experience.</p>
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-800/70 p-4 text-sm text-slate-300">You have 2 unread messages from Joseph.</div>
      </div>
    </Layout>
  );
}
