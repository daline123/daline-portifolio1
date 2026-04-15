import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cena from './pages/Cena';
import CorpoQuente from './pages/CorpoQuente';
import Contato from './pages/Contato';
import NotFound from './pages/NotFound';

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-bg-primary text-ink-body">
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cena" element={<Cena />} />
          <Route path="/corpo-quente" element={<CorpoQuente />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
