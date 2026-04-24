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
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 lg:gap-24 items-start">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display leading-[0.98] text-ink-primary mb-10 md:mb-14"
          >
            <span className="block text-5xl md:text-7xl lg:text-[96px] font-medium lowercase">corpo</span>
            <span className="block text-5xl md:text-7xl lg:text-[96px] font-normal text-ink-accent lowercase">
              quente.
            </span>
          </motion.h1>

          <div className="space-y-6 text-ink-body text-[16px] md:text-[17px] leading-[1.8] max-w-[58ch]">
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
              className="group inline-flex items-center gap-3 border border-ink-primary text-ink-primary uppercase tracking-label text-[12px] px-8 py-4 transition-colors hover:bg-ink-primary hover:text-bg-primary"
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
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="lg:sticky lg:top-[calc(var(--nav-height)+80px)] space-y-6"
        >
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-bg-secondary">
            <img
              src="/images/gallery/01.jpg"
              alt="Prática Corpo Quente — Daline Ribeiro"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
            />
            <p className="absolute bottom-5 left-5 right-5 font-display font-medium text-bg-primary text-xl md:text-2xl leading-snug lowercase">
              só corpo, presença e vontade de sentir.
            </p>
          </div>

          <div className="pt-2">
            <p className="label mb-4">Práticas</p>
            <ul className="space-y-2">
              {PILLARS.map((pillar) => (
                <li
                  key={pillar}
                  className="text-ink-body text-[15px] flex items-baseline gap-3"
                >
                  <span
                    aria-hidden="true"
                    className="w-1 h-1 rounded-full bg-ink-accent shrink-0 translate-y-[-2px]"
                  />
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </PageLayout>
  );
}
