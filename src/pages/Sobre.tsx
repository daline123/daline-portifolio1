import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import ContinueNav from '../components/ContinueNav';

const PARAGRAPHS = [
  'Daline Ribeiro é bailarina, criadora e artista da dança. Desde 2022 é intérprete-criadora na Lia Rodrigues Companhia de Danças, onde já se apresentou em mais de 20 países e dançou mais de 160 vezes o repertório da companhia, incluindo os espetáculos Borda, Encantado e Fúria.',
  'Nascida em Teresina, começou no balé clássico aos 5 anos e nunca mais parou de estudar dança. É jornalista formada pela UFPI, tem formação livre em dança pela Escola Estadual de Dança Lenir Argento e integrou a 5ª Dentição da Universidade Antropofágica do Teatro Oficina.',
  'Além de intérprete, atua como criadora e produtora: criou festival de dança online, coordenou mostras de artes cênicas, assinou direção de movimento. Criou o Corpo Quente, práticas corporais dançantes para quem quer se reconectar com o próprio corpo através do movimento.',
];

export default function Sobre({ isSection, id }: { isSection?: boolean; id?: string }) {
  return (
    <PageLayout label="Sobre" wide isSection={isSection} id={id}>
      <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-12 md:gap-16 lg:gap-24 items-start">
        <motion.aside
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="md:sticky md:top-[calc(var(--nav-height)+80px)]"
        >
          <div className="w-full aspect-[4/5] bg-bg-secondary overflow-hidden rounded-sm">
            <img
              src="/images/sobre/capa.jpg"
              alt="Daline Ribeiro sorrindo"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.aside>

        <div>
          <div className="space-y-6 text-ink-body text-[16px] md:text-[17px] leading-[1.75]">
            {PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.08, duration: 0.5 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-line-subtle space-y-6"
          >
            <p className="font-display font-bold text-xl md:text-2xl text-ink-primary leading-snug">
              Disponível para projetos, ativações, workshops e colaborações artísticas.
            </p>
            
            <div className="pt-4">
              <a 
                href="/contato" 
                className="inline-block text-ink-accent hover:text-ink-primary transition-colors uppercase tracking-[0.2em] text-xs font-bold border-b border-ink-accent/30 pb-1"
              >
                fale comigo
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <ContinueNav nextLabel="Contato" nextHref="/contato" />
    </PageLayout>
  );
}
