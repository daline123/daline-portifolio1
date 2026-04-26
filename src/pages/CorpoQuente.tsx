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
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] xl:grid-cols-[1fr_500px] gap-16 lg:gap-24 items-start max-w-7xl mx-auto">
        {/* Left Side: Information */}
        <div className="lg:sticky lg:top-[calc(var(--nav-height)+60px)]">
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

          <div className="space-y-6 text-ink-body text-lg md:text-[20px] leading-[1.7] max-w-[50ch]">
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
              className="group inline-flex items-center gap-3 border border-ink-primary text-ink-primary uppercase tracking-widest text-[11px] px-12 py-5 transition-all hover:bg-ink-primary hover:text-bg-primary"
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

          <div className="mt-20 md:mt-32 pt-12 border-t border-line-subtle">
             <p className="label mb-8 text-ink-accent uppercase tracking-widest font-bold">Os Pilares</p>
             <div className="flex flex-wrap gap-x-12 gap-y-4">
                {PILLARS.map(p => (
                  <span key={p} className="text-xl font-display text-ink-body lowercase border-b border-ink-accent/20 pb-1">
                    {p}
                  </span>
                ))}
             </div>
          </div>
        </div>

        {/* Right Side: Stack of Natural Images */}
        <div className="space-y-12 md:space-y-20">
          {[
            { src: '/images/gallery/01.jpg', alt: 'Daline Ribeiro - Prática Corpo Quente' },
            { src: '/images/gallery/corpo-quente-2.png', alt: 'Momento de dança e conexão' },
            { src: '/images/gallery/corpo-quente-03.jpg', alt: 'Encontro online via Zoom' },
          ].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-sm shadow-sm transition-transform duration-700 hover:scale-[1.01]"
              />
              {idx === 0 && (
                 <p className="mt-6 font-display text-2xl text-ink-accent lowercase">
                   Estar. Dançar. Sentir.
                 </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}




