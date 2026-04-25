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
    title: 'lia rodrigues companhia de danças',
    period: 'desde 2022',
    description:
      'Intérprete-criadora na Lia Rodrigues Companhia de Danças desde 2022, criou o espetáculo “Borda” em 2025 e dança também as peça “ Encantado” e “Fúria”. Através da companhia, já dançou em mais de 20 países e nos principais teatros do mundo como o Théâtre National Chaillot em Paris, Sandler’s Wells em Londres e Sydney Opera House entre outros.
',
    cover: '/images/gallery/borda-capa.jpg',
    images: ['/images/gallery/02.jpg', '/images/gallery/03.jpg', '/images/gallery/05.jpg', '/images/gallery/06.jpg'],
  },
  {
    title: 'true rouge — tunga / inhotim',
    period: '2023',
    description:
      'Performer na instauração True Rouge (1997) do artista Tunga no Instituto Inhotim com direção da Lia Rodrigues em Cia de Danças,  no evento “Anoitecer Inhotim” (2023). “True Rouge” foi a primeira obra a integrar Inhotim, e periodicamente é ativada por bailarinos.',
    cover: '/images/gallery/07.jpg',
    images: ['/images/gallery/07.jpg', '/images/gallery/06.jpg'],
  },
  {
    title: 'entre — datan izaká',
    period: '2016',
    description:
      'Intérprete-criadora do espetáculo de dança E|N|T|R|E (2016) de Datan Izaká.Além de uma temporada em Teresina, a peça teve apresentações no festival Modo de Existir- SESC Santo Amaro-SP e Festival Panorama-Rj. Foi o primeiro trabalho profissional como intérprete-criadora de Daline.',
    cover: '/images/gallery/04.jpg',
    images: ['/images/gallery/04.jpg', '/images/gallery/03.jpg'],
  },
  {
    title: 'ato ancestral — ópera na serra da capivara',
    period: '2017',
    description:
      'Intérprete no espetáculo “ Ato Ancestral” da primeira edição da Ópera na Serra da Capivara em São Raimundo Nonato em (2017). Com direção e criação de Datan Izaká e colaboração de Samuel Alvis. A Ópera na Serra da Capivara hoje é destaque no calendário cultural brasileiro.
',
    cover: '/images/gallery/08.jpg',
    images: ['/images/gallery/08.jpg', '/images/gallery/09.jpg'],
  },
  {
    title: 'catirinas — weyla carvalho',
    period: '2017',
    description: 'Performer do espetáculo "Catirinas" (2017) de Weyla Carvalho com apresentação no Junta - Festival Internacional de Dança de Teresina 3ª edição. O espetáculo ressignifica a história de Catirina que é personagem principal na trama do bumba-meu-boi.',
    cover: '/images/gallery/05.jpg',
    images: ['/images/gallery/05.jpg', '/images/gallery/10.jpg'],
  },
];

const CRIADORA: Work[] = [
  {
    title: 'oficina serestinha',
    description:
      'Ministra a oficina Serestinha, em que combina práticas de dança contemporânea, técnicas de composição e consciência corporal com as sonoridades das festas de serestas do Piauí. A oficina busca explorar como o repertório de movimento da nossa infância se expande e reflete na construção da nossa dança atual.',
    cover: '/images/gallery/serestinha-capa.jpg',
    images: [
      '/images/gallery/09.jpg',
      '/images/gallery/10.jpg',
    ],
  },
  {
    title: 'direção de movimento — as cotas (une)',
    description:
      `Diretora de movimento do videoclipe "As Cotas" da União Nacional dos Estudantes, um manifesto audiovisual que celebra os dez anos de implementação das Cotas no Brasil, que contou com grandes nomes da música brasileira como intérpretes como: Chico César, Leci Brandão, Mart'nália, Teresa Cristina, José Miguel Wisnik, Iara Rennó entre outros.`,
    href: 'https://www.youtube.com/watch?v=OBjDDV8S2qg',
    cover: '/images/gallery/as-cotas.jpg',
    images: ['/images/gallery/03.jpg', '/images/gallery/04.jpg'],
  },
  {
    title: 'pretaforma',
    period: '2021',
    description:
      `Idealizadora do  PRETAFORMA- Plataforma para artistas negros e negras, em parceria com o artista Jacob Alves. O festival aconteceu de forma on-line em 2021, 46 artistas do Brasil e Moçambique compuseram a programação da primeira edição. O projeto contemplado pelo Prêmio Maria da Inglaterra/Lei Adir Blanc Estadual Piauí`,
    cover: '/images/gallery/pretaforma.jpg',
    images: ['/images/gallery/06.jpg', '/images/gallery/05.jpg'],
  },
  {
    title: 'mostra de artes cênicas — 11ª bienal da une',
    description:
      `Coordenadora da Mostra de Artes Cênicas- 11ª Bienal da UNE Festival dos Estudantes. A Bienal é a maior vitrine das produções artísticas estudantis, participaram da 11ª edição 8 mil estudantes do Brasil inteiro. A mostra de Artes Cênicas contou com a curadoria de Maria Marighella e Adriana Bittencourt.`,
    cover: '/images/gallery/09.jpg',
    images: ['/images/gallery/09.jpg', '/images/gallery/08.jpg'],
  },
];

const ALL_WORKS: Work[] = [...INTERPRETE, ...CRIADORA];

export default function Cena() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <PageLayout label="Cena" wide>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="font-display font-medium text-3xl md:text-[44px] leading-[1.1] text-ink-primary mb-16 md:mb-24 lowercase"
      >
        trabalhos em cena<br />
        <span className="font-normal text-ink-accent tracking-normal text-2xl md:text-3xl">intérprete e criadora.</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {ALL_WORKS.map((w, i) => (
          <WorkCard
            key={w.title}
            work={w}
            index={i}
            onClick={() => setSelectedWork(w)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedWork && (
          <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </PageLayout>
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
      <div className="aspect-square overflow-hidden bg-bg-secondary mb-4 relative">
        <img
          src={work.cover}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <h3 className="font-display font-medium text-xl md:text-2xl text-ink-primary leading-tight lowercase">
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
              <h2 className="font-display font-medium text-4xl md:text-5xl text-ink-primary leading-tight lowercase">
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
