import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../features/auth/UI/Pages/Login';
import Signup from '../features/auth/UI/Pages/Signup';
import CreateEventPage from '../pages/layouts/CreateEventPage';
import EventDetailsPage from '../pages/layouts/EventDetailsPage';
import EventsPage from '../pages/layouts/EventsPage';
import LandingPage from '../pages/layouts/LandingPage';
import PlaceholderPage from '../pages/layouts/PlaceholderPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage focusSection="top" />} />
      <Route path="/featured-events" element={<Navigate to="/events" replace />} />
      <Route path="/features" element={<LandingPage focusSection="features" />} />
      <Route path="/how-it-works" element={<LandingPage focusSection="how-it-works" />} />
      <Route path="/contact" element={<LandingPage focusSection="cta" />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/events/new" element={<CreateEventPage />} />
      <Route path="/events/:id" element={<EventDetailsPage />} />
      <Route path="/pricing" element={<PlaceholderPage title="Pricing Plans" description="Pricing is being finalized for teams, communities, and enterprise programs." />} />
      <Route path="/docs" element={<PlaceholderPage title="Documentation" description="Implementation guides and API references are being prepared for release." />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;