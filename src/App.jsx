import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppContext } from './contexts/AppContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import StudentDashboard from './pages/StudentDashboard';
import LandlordDashboard from './pages/LandlordDashboard';
import AdminDashboard from './pages/AdminDashboard';
import SearchPage from './pages/SearchPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import WishlistPage from './pages/WishlistPage';
import BookingsPage from './pages/BookingsPage';
import ReviewsPage from './pages/ReviewsPage';
import MessagesPage from './pages/MessagesPage';
import NotificationsPage from './pages/NotificationsPage';
import ProfilePage from './pages/ProfilePage';
import ManageListingsPage from './pages/ManageListingsPage';
import ManageUsersPage from './pages/ManageUsersPage';
import ManageReviewsPage from './pages/ManageReviewsPage';
import AnalyticsPage from './pages/AnalyticsPage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

function ProtectedRoute({ children, role }) {
  const { user } = useAppContext();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;
  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/property/:id" element={<PropertyDetailsPage />} />

      <Route path="/student" element={<ProtectedRoute role="student"><StudentDashboard /></ProtectedRoute>} />
      <Route path="/wishlist" element={<ProtectedRoute role="student"><WishlistPage /></ProtectedRoute>} />
      <Route path="/bookings" element={<ProtectedRoute role="student"><BookingsPage /></ProtectedRoute>} />
      <Route path="/reviews" element={<ProtectedRoute role="student"><ReviewsPage /></ProtectedRoute>} />
      <Route path="/messages" element={<ProtectedRoute role="student"><MessagesPage /></ProtectedRoute>} />
      <Route path="/notifications" element={<ProtectedRoute role="student"><NotificationsPage /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />

      <Route path="/landlord" element={<ProtectedRoute role="landlord"><LandlordDashboard /></ProtectedRoute>} />
      <Route path="/manage-listings" element={<ProtectedRoute role="landlord"><ManageListingsPage /></ProtectedRoute>} />

      <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
      <Route path="/manage-users" element={<ProtectedRoute role="admin"><ManageUsersPage /></ProtectedRoute>} />
      <Route path="/manage-reviews" element={<ProtectedRoute role="admin"><ManageReviewsPage /></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute role="admin"><AnalyticsPage /></ProtectedRoute>} />
      <Route path="/settings" element={<ProtectedRoute role="admin"><SettingsPage /></ProtectedRoute>} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
