import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '../components/PageLayout';

interface Work {
  title: string;
  period?: string;
  description: string;
  href?: string;
  cover: string;
  images: string[];
}

const INTERPRETE: Work[] = [
  {
    title: 'Lia Rodrigues Companhia de Danças',
    period: 'desde 2022',
    description:
      'Intérprete-criadora. Criou Borda (2025), dança Encantado e Fúria. Apresentações no Théâtre National de Chaillot (Paris), Sadler\'s Wells (Londres), Sydney Opera House, entre outros.',
    cover: '/images/gallery/01.jpg',
    images: ['/images/gallery/01.jpg', '/images/gallery/02.jpg'],
  },
  {
    title: 'True Rouge — Tunga / Inhotim',
    period: '2023',
    description:
      'Performer na instauração True Rouge do artista Tunga no Instituto Inhotim, evento Anoitecer Inhotim, com direção de Lia Rodrigues.',
    cover: '/images/gallery/07.jpg',
    images: ['/images/gallery/07.jpg', '/images/gallery/06.jpg'],
  },
  {
    title: 'ENTRE — Datan Izaká',
    period: '2016',
    description:
      'Intérprete-criadora. Apresentações no SESC Santo Amaro (SP) e no Festival Panorama (RJ).',
    cover: '/images/gallery/04.jpg',
    images: ['/images/gallery/04.jpg', '/images/gallery/03.jpg'],
  },
  {
    title: 'Ato Ancestral — Ópera na Serra da Capivara',
    period: '2017',
    description:
      'Intérprete. Direção e criação de Datan Izaká, colaboração de Samuel Alvis. São Raimundo Nonato.',
    cover: '/images/gallery/08.jpg',
    images: ['/images/gallery/08.jpg', '/images/gallery/09.jpg'],
  },
  {
    title: 'Catirinas — Weyla Carvalho',
    period: '2017',
    description: 'Performer. Apresentação na 3ª edição do Junta Festival.',
    cover: '/images/gallery/05.jpg',
    images: ['/images/gallery/05.jpg', '/images/gallery/10.jpg'],
  },
];

const CRIADORA: Work[] = [
  {
    title: 'Oficina Serestinha',
    description:
      'Combina dança contemporânea, composição e consciência corporal com sonoridades das serestas do Piauí. Explora como o repertório de movimento da infância se expande na dança atual.',
    cover: '/images/gallery/02.jpg',
    images: ['/images/gallery/02.jpg', '/images/gallery/01.jpg'],
  },
  {
    title: 'Direção de Movimento — As Cotas (UNE)',
    description:
      'Videoclipe manifesto celebrando 10 anos das Cotas no Brasil. Com Chico César, Leci Brandão, Mart\'nália, Teresa Cristina, José Miguel Wisnik, Iara Rennó e outros.',
    href: 'https://www.youtube.com/watch?v=OBjDDV8S2qg',
    cover: '/images/gallery/03.jpg',
    images: ['/images/gallery/03.jpg', '/images/gallery/04.jpg'],
  },
  {
    title: 'PRETAFORMA',
    period: '2021',
    description:
      'Plataforma para artistas pretos e pretas, em parceria com Jacob Alves. Festival online com 46 artistas do Brasil e Moçambique. Contemplado pelo Prêmio Maria da Inglaterra / Lei Aldir Blanc Estadual Piauí.',
    cover: '/images/gallery/06.jpg',
    images: ['/images/gallery/06.jpg', '/images/gallery/05.jpg'],
  },
  {
    title: 'Mostra de Artes Cênicas — 11ª Bienal da UNE',
    description:
      'Coordenação da mostra com curadoria de Maria Marighella e Adriana Bittencourt. 8 mil estudantes participantes.',
    cover: '/images/gallery/09.jpg',
    images: ['/images/gallery/09.jpg', '/images/gallery/08.jpg'],
  },
];

export default function Cena() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <PageLayout label="Cena">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="font-display font-extrabold text-3xl md:text-[44px] leading-[1.1] text-ink-primary mb-16 md:mb-24 uppercase tracking-tighter"
      >
        Trabalhos em cena<br />
        <span className="font-normal text-ink-accent tracking-normal capitalize text-2xl md:text-3xl">intérprete e criadora.</span>
      </motion.h1>

      <Section label="Intérprete" works={INTERPRETE} onSelect={setSelectedWork} />
      <div className="h-20 md:h-28" aria-hidden="true" />
      <Section label="Criadora" works={CRIADORA} onSelect={setSelectedWork} />

      <AnimatePresence>
        {selectedWork && (
          <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

interface SectionProps {
  label: string;
  works: Work[];
  onSelect: (work: Work) => void;
}

function Section({ label, works, onSelect }: SectionProps) {
  return (
    <section>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="label mb-8"
      >
        {label}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((w, i) => (
          <WorkCard
            key={w.title}
            work={w}
            index={i}
            onClick={() => onSelect(w)}
          />
        ))}
      </div>
    </section>
  );
}

function WorkCard({ work, index, onClick }: { work: Work; index: number; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group text-left"
    >
      <div className="aspect-[4/5] overflow-hidden bg-bg-secondary mb-4 relative">
        <img
          src={work.cover}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <h3 className="font-display font-bold text-xl md:text-2xl text-ink-primary leading-tight">
        {work.title}
      </h3>
      {work.period && (
        <p className="text-[12px] uppercase tracking-wider text-ink-muted mt-1">
          {work.period}
        </p>
      )}
    </motion.button>
  );
}

function WorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-bg-primary/95 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-bg-primary w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl border border-line-subtle"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 text-ink-primary hover:text-ink-accent transition-colors"
          aria-label="Fechar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-16">
          <div className="space-y-8">
            <div>
              <p className="label mb-4">{work.period}</p>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-ink-primary leading-tight tracking-tight uppercase">
                {work.title}
              </h2>
            </div>
            
            <p className="text-ink-body text-lg leading-relaxed">
              {work.description}
            </p>

            {work.href && (
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 text-ink-accent hover:gap-4 transition-all uppercase text-sm tracking-widest font-medium"
              >
                Ver projeto online <span>→</span>
              </a>
            )}
          </div>

          <div className="space-y-6">
            {work.images.map((img, i) => (
              <div key={i} className="aspect-video md:aspect-[4/3] bg-bg-secondary">
                <img
                  src={img}
                  alt={`${work.title} - ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
