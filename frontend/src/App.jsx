import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';
import { initLenisScroll } from './utils/lenisScroll';

const App = () => {
  useEffect(() => {
    const cleanup = initLenisScroll();
    return cleanup;
  }, []);

  return <AppRoutes />;
};

export default App;
