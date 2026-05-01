import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import LandingPage from './pages/LandingPage';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg-primary text-ink-body">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
