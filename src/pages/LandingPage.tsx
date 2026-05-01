import Home from './Home';
import Cena from './Cena';
import CorpoQuente from './CorpoQuente';
import Sobre from './Sobre';
import Contato from './Contato';

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <Home />
      
      <div className="border-t border-line-subtle mx-6 md:mx-12" />
      <Sobre isSection id="sobre" />

      <div className="border-t border-line-subtle mx-6 md:mx-12" />
      <Cena isSection id="cena" />

      <div className="border-t border-line-subtle mx-6 md:mx-12" />
      <CorpoQuente isSection id="corpo-quente" />

      <div className="border-t border-line-subtle mx-6 md:mx-12" />
      <Contato isSection id="contato" />
    </div>
  );
}
