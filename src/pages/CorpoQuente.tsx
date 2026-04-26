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
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-24 md:mb-32">
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-display leading-[0.98] text-ink-primary mb-10 md:mb-14"
            >
              <span className="block text-5xl md:text-7xl lg:text-[110px] font-medium lowercase">corpo</span>
              <span className="block text-5xl md:text-7xl lg:text-[110px] font-normal text-ink-accent lowercase">
                quente.
              </span>
            </motion.h1>

            <div className="space-y-6 text-ink-body text-lg md:text-xl leading-relaxed max-w-[50ch]">
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
              className="mt-12 md:mt-16"
            >
              <Link
                to="/contato"
                className="group inline-flex items-center gap-3 border-b border-ink-primary text-ink-primary uppercase tracking-widest text-sm pb-2 transition-all hover:gap-5"
              >
                Entre em contato para parcerias
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[3/4] overflow-hidden bg-bg-secondary rounded-sm shadow-xl">
              <img
                src="/images/gallery/01.jpg"
                alt="Prática Corpo Quente — Daline Ribeiro"
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Large Visual Section */}
        <div className="space-y-12 md:space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          >
            <div className="space-y-12">
              <div className="aspect-square md:aspect-[4/5] overflow-hidden bg-bg-secondary rounded-sm grayscale transition-all duration-700 hover:grayscale-0">
                <img
                  src="/images/gallery/corpo-quente-1.jpg"
                  alt="Corpo Quente Prática 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pl-6 md:pl-12 border-l border-ink-accent/30 py-4">
                <p className="label mb-6 text-ink-accent font-bold uppercase tracking-widest">Os Pilares</p>
                <ul className="space-y-4">
                  {PILLARS.map((pillar) => (
                    <li
                      key={pillar}
                      className="text-ink-body text-xl md:text-2xl font-display lowercase"
                    >
                      {pillar}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:pt-32">
              <div className="aspect-square md:aspect-[4/5] overflow-hidden bg-bg-secondary rounded-sm shadow-2xl transition-all duration-700 hover:-translate-y-2">
                <img
                  src="/images/gallery/corpo-quente-2.png"
                  alt="Corpo Quente Prática 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-8 font-display text-2xl md:text-4xl text-ink-primary leading-tight lowercase">
                só corpo, <br />
                <span className="text-ink-accent">presença</span> e vontade de sentir.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
}

