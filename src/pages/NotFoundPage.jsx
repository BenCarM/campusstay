import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function NotFoundPage() {
  return (
    <Layout title="404 — page not found">
      <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center">
        <h2 className="text-2xl font-semibold text-white">The page you’re looking for doesn’t exist.</h2>
        <p className="mt-3 text-slate-400">Return to the home page or explore available listings.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-blue-600 px-5 py-3 text-white">Back home</Link>
      </div>
    </Layout>
  );
}
