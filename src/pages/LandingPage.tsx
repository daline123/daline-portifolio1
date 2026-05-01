import { motion } from 'framer-motion';
import Home from './Home';
import Cena from './Cena';
import CorpoQuente from './CorpoQuente';
import Sobre from './Sobre';
import Contato from './Contato';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Home />
      
      <Cena isSection id="cena" />

      <CorpoQuente isSection id="corpo-quente" />

      <Sobre isSection id="sobre" />

      <Contato isSection id="contato" />
    </div>
  );
}
