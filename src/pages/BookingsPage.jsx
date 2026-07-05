import Layout from '../components/Layout';
import { bookings, properties } from '../services/demoData';

export default function BookingsPage() {
  return (
    <Layout title="Bookings">
      <div className="space-y-4">
        {bookings.map((booking) => {
          const property = properties.find((item) => item.id === booking.propertyId);
          return (
            <div key={booking.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{property?.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">Status: {booking.status}</p>
                </div>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">{booking.createdAt}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
