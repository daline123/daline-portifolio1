import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import WorkItem from '../components/WorkItem';

interface Work {
  title: string;
  period?: string;
  description: string;
  href?: string;
}

const INTERPRETE: Work[] = [
  {
    title: 'Lia Rodrigues Companhia de Danças',
    period: 'desde 2022',
    description:
      'Intérprete-criadora. Criou Borda (2025), dança Encantado e Fúria. Apresentações no Théâtre National de Chaillot (Paris), Sadler\'s Wells (Londres), Sydney Opera House, entre outros.',
  },
  {
    title: 'True Rouge — Tunga / Inhotim',
    period: '2023',
    description:
      'Performer na instauração True Rouge do artista Tunga no Instituto Inhotim, evento Anoitecer Inhotim, com direção de Lia Rodrigues.',
  },
  {
    title: 'ENTRE — Datan Izaká',
    period: '2016',
    description:
      'Intérprete-criadora. Apresentações no SESC Santo Amaro (SP) e no Festival Panorama (RJ).',
  },
  {
    title: 'Ato Ancestral — Ópera na Serra da Capivara',
    period: '2017',
    description:
      'Intérprete. Direção e criação de Datan Izaká, colaboração de Samuel Alvis. São Raimundo Nonato.',
  },
  {
    title: 'Catirinas — Weyla Carvalho',
    period: '2017',
    description: 'Performer. Apresentação na 3ª edição do Junta Festival.',
  },
];

const CRIADORA: Work[] = [
  {
    title: 'Oficina Serestinha',
    description:
      'Combina dança contemporânea, composição e consciência corporal com sonoridades das serestas do Piauí. Explora como o repertório de movimento da infância se expande na dança atual.',
  },
  {
    title: 'Direção de Movimento — As Cotas (UNE)',
    description:
      'Videoclipe manifesto celebrando 10 anos das Cotas no Brasil. Com Chico César, Leci Brandão, Mart\'nália, Teresa Cristina, José Miguel Wisnik, Iara Rennó e outros.',
    href: 'https://www.youtube.com/watch?v=OBjDDV8S2qg',
  },
  {
    title: 'PRETAFORMA',
    period: '2021',
    description:
      'Plataforma para artistas pretos e pretas, em parceria com Jacob Alves. Festival online com 46 artistas do Brasil e Moçambique. Contemplado pelo Prêmio Maria da Inglaterra / Lei Aldir Blanc Estadual Piauí.',
  },
  {
    title: 'Mostra de Artes Cênicas — 11ª Bienal da UNE',
    description:
      'Coordenação da mostra com curadoria de Maria Marighella e Adriana Bittencourt. 8 mil estudantes participantes.',
  },
];

export default function Cena() {
  return (
    <PageLayout label="Cena">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="font-display text-3xl md:text-[44px] leading-[1.15] text-ink-primary mb-16 md:mb-24"
      >
        Trabalhos em cena<br />
        <span className="italic text-ink-accent">intérprete e criadora.</span>
      </motion.h1>

      <Section label="Intérprete" works={INTERPRETE} />
      <div className="h-20 md:h-28" aria-hidden="true" />
      <Section label="Criadora" works={CRIADORA} />
    </PageLayout>
  );
}

interface SectionProps {
  label: string;
  works: Work[];
}

function Section({ label, works }: SectionProps) {
  return (
    <section>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="label mb-4"
      >
        {label}
      </motion.p>
      <div className="border-t border-line-subtle">
        {works.map((w, i) => (
          <WorkItem
            key={w.title}
            index={i}
            title={w.title}
            period={w.period}
            description={w.description}
            href={w.href}
          />
        ))}
      </div>
    </section>
  );
}
