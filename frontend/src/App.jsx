import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import { initLenisScroll } from './utils/lenisScroll';
import { Toaster } from 'react-hot-toast';

const App = () => {
  useEffect(() => {
    const cleanup = initLenisScroll();
    return cleanup;
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <AppRoutes />
    </>
  );
};

export default App;
