import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const PARAGRAPHS = [
  'Corpo Quente é um projeto de práticas corporais dançantes criado por Daline Ribeiro para mulheres que querem se reconectar com o próprio corpo através do movimento.',
  'É uma combinação de dança contemporânea, kundalini, rebolação, consciência corporal e leitura — sem precisar de experiência, sem certo ou errado. Só corpo, presença e vontade de sentir.',
  'Os encontros acontecem em ciclos: online, em grupo pequeno, com intenção. Para ativações de marca, eventos corporativos e projetos presenciais, entre em contato.',
];

const PILLARS = [
  'dança contemporânea',
  'kundalini',
  'rebolação',
  'consciência corporal',
  'leitura',
];

export default function CorpoQuente() {
  return (
    <PageLayout label="Corpo Quente" wide>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display leading-[0.98] text-ink-primary mb-10 md:mb-14"
          >
            <span className="block text-5xl md:text-7xl lg:text-[100px] font-medium lowercase">corpo</span>
            <span className="block text-5xl md:text-7xl lg:text-[100px] font-normal text-ink-accent lowercase">
              quente.
            </span>
          </motion.h1>

          <div className="space-y-6 text-ink-body text-lg md:text-[19px] leading-[1.7] max-w-[54ch]">
            {PARAGRAPHS.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-14 md:mt-20"
          >
            <Link
              to="/contato"
              className="group inline-flex items-center gap-3 border border-ink-primary text-ink-primary uppercase tracking-widest text-[11px] px-10 py-4 transition-all hover:bg-ink-primary hover:text-bg-primary"
            >
              Entre em contato
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </motion.div>

          <div className="mt-20 md:mt-32 pt-12 border-t border-line-subtle grid grid-cols-2 gap-8 max-w-[500px]">
             <div>
               <p className="label mb-4 text-ink-accent">Práticas</p>
               <ul className="space-y-2">
                 {PILLARS.slice(0,3).map(p => <li key={p} className="text-ink-body lowercase">{p}</li>)}
               </ul>
             </div>
             <div>
               <p className="label mb-4 opacity-0 hidden md:block">.</p>
               <ul className="space-y-2">
                 {PILLARS.slice(3).map(p => <li key={p} className="text-ink-body lowercase">{p}</li>)}
               </ul>
             </div>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="lg:sticky lg:top-[calc(var(--nav-height)+60px)] space-y-12"
        >
          <div className="relative w-full aspect-[4/5] overflow-hidden bg-bg-secondary rounded-sm">
            <img
              src="/images/gallery/01.jpg"
              alt="Prática Corpo Quente — Daline Ribeiro"
              className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
            />
            <p className="absolute bottom-6 left-6 right-6 font-display text-bg-primary text-2xl leading-tight lowercase">
              só corpo, <br/>presença e vontade de sentir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="aspect-square overflow-hidden bg-bg-secondary rounded-sm shadow-lg">
              <img
                src="/images/gallery/corpo-quente-1.jpg"
                alt="Corpo Quente Prática 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden bg-bg-secondary rounded-sm shadow-lg mt-8">
              <img
                src="/images/gallery/corpo-quente-2.png"
                alt="Corpo Quente Prática 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.aside>
      </div>
    </PageLayout>
  );
}


