import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import { FiBell, FiHome, FiLogOut, FiMessageSquare, FiSearch, FiSettings, FiStar, FiUser } from 'react-icons/fi';

export default function Layout({ children, title }) {
  const navigate = useNavigate();
  const { user, setUser, notifications } = useAppContext();

  const handleLogout = async () => {
  try {
    await signOut(auth);
    setUser(null);
    navigate('/');
  } catch (error) {
    console.error(error);
    alert('Failed to log out. Please try again.');
  }
};

  const navItems = [
    { to: '/', label: 'Home', icon: FiHome },
    { to: '/search', label: 'Search', icon: FiSearch },
    { to: user?.role === 'student' ? '/student' : user?.role === 'landlord' ? '/landlord' : '/admin', label: 'Dashboard', icon: FiHome },
    { to: '/messages', label: 'Messages', icon: FiMessageSquare },
    { to: '/notifications', label: 'Alerts', icon: FiBell },
    { to: '/profile', label: 'Profile', icon: FiUser },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-xl font-semibold tracking-wide text-white">CampusStay</Link>
          <nav className="hidden gap-4 md:flex">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-2 rounded-full px-3 py-2 text-sm ${isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-white/10'}`}>
                <Icon /> {label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-white/10 p-2 text-slate-300">{notifications.length}</button>
            {user ? (
              <button onClick={handleLogout} className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-slate-300"><FiLogOut /> Logout</button>
            ) : (
              <Link to="/login" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">Sign In</Link>
            )}
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {title ? <h1 className="mb-6 text-3xl font-semibold">{title}</h1> : null}
        {children}
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 px-4 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CampusStay. Student-first off-campus housing.</p>
          <div className="flex gap-4">
            <Link to="/search">Listings</Link>
            <Link to="/profile">Support</Link>
            <Link to="/settings"><FiSettings className="inline" /></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
