import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext(null);

const seedUser = {
  uid: 'demo-student',
  role: 'student',
  name: 'Ada Thompson',
  email: 'ada@student.com',
  verified: true,
};

export function AppProvider({ children }) {
  const [user, setUser] = useState(seedUser);
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Booking approved', message: 'Your viewing request was approved', unread: true },
    { id: 2, title: 'New message', message: 'A landlord replied to your chat', unread: false },
  ]);

  const value = useMemo(() => ({
    user,
    setUser,
    darkMode,
    setDarkMode,
    loading,
    setLoading,
    notifications,
    setNotifications,
  }), [user, darkMode, loading, notifications]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
