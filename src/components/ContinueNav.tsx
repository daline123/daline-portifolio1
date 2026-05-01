import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ContinueNavProps {
  nextLabel: string;
  nextHref: string;
}

export default function ContinueNav({ nextLabel, nextHref }: ContinueNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-32 pt-20 border-t border-line-subtle text-center pb-20"
    >
      <Link to={nextHref} className="group inline-block">
        <p className="text-[11px] uppercase tracking-[0.3em] text-ink-muted mb-4 group-hover:text-ink-accent transition-colors">
          Continuar navegando —
        </p>
        <h2 className="font-display font-medium text-4xl md:text-6xl text-ink-primary lowercase group-hover:italic transition-all">
          {nextLabel}
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="w-px h-16 bg-line-subtle group-hover:h-24 group-hover:bg-ink-accent transition-all duration-500" />
        </div>
      </Link>
    </motion.div>
  );
}
