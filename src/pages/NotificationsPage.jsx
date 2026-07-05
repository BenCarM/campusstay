import Layout from '../components/Layout';
import { useAppContext } from '../contexts/AppContext';

export default function NotificationsPage() {
  const { notifications } = useAppContext();

  return (
    <Layout title="Notifications">
      <div className="space-y-3">
        {notifications.map((item) => (
          <div key={item.id} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">{item.title}</h3>
              {item.unread ? <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-300">New</span> : null}
            </div>
            <p className="mt-2 text-sm text-slate-400">{item.message}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
