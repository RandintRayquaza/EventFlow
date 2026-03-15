import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('../features/auth/UI/Pages/Login'));
const Signup = lazy(() => import('../features/auth/UI/Pages/Signup'));
const Landing = lazy(() => import('../features/landing/pages/Landing'));

// Fallback loader while suspense resolves
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-[var(--color-bg)]">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-[var(--color-border)] border-t-[var(--color-primary)]"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Landing focusSection="top" />} />
        <Route path="/featured-events" element={<Landing focusSection="featured-events" />} />
        <Route path="/features" element={<Landing focusSection="features" />} />
        <Route path="/how-it-works" element={<Landing focusSection="how-it-works" />} />
        <Route path="/contact" element={<Landing focusSection="cta" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;