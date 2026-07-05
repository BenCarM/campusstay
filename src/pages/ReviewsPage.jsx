import Layout from '../components/Layout';
import { reviews } from '../services/demoData';

export default function ReviewsPage() {
  return (
    <Layout title="Reviews">
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <p className="text-white">“{review.comment}”</p>
            <p className="mt-2 text-sm text-slate-400">Rating: {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
