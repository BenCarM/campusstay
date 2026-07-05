import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/config';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Booking approved',
      message: 'Your viewing request was approved',
      unread: true,
    },
    {
      id: 2,
      title: 'New message',
      message: 'A landlord replied to your chat',
      unread: false,
    },
  ]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userRef = doc(db, 'users', firebaseUser.uid);
          const userSnap = await getDoc(userRef);

          if (userSnap.exists()) {
            setUser(userSnap.data());
          } else {
            setUser({
              uid: firebaseUser.uid,
              name: firebaseUser.displayName || 'CampusStay User',
              email: firebaseUser.email,
              verified: firebaseUser.emailVerified,
              role: 'student',
            });
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = useMemo(
    () => ({
      user,
      setUser,
      loading,
      setLoading,
      darkMode,
      setDarkMode,
      notifications,
      setNotifications,
    }),
    [user, loading, darkMode, notifications]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}