import Layout from '../components/Layout';
import { reviews } from '../services/demoData';

export default function ManageReviewsPage() {
  return (
    <Layout title="Manage reviews">
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white">{review.comment}</p>
                <p className="mt-2 text-sm text-slate-400">Rating: {review.rating} / 5</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-full bg-blue-600 px-3 py-2 text-sm text-white">Approve</button>
                <button className="rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
