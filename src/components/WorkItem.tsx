import { motion } from 'framer-motion';

interface WorkItemProps {
  title: string;
  period?: string;
  description: string;
  href?: string;
  index: number;
}

export default function WorkItem({ title, period, description, href, index }: WorkItemProps) {
  const content = (
    <>
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-6 mb-3">
        <h3 className="font-display text-xl md:text-2xl text-ink-primary leading-snug">
          {title}
        </h3>
        {period && (
          <span className="text-[12px] uppercase tracking-label text-ink-muted shrink-0">
            {period}
          </span>
        )}
      </div>
      <p className="text-ink-body leading-[1.75] text-[15px] md:text-[16px]">
        {description}
      </p>
      {href && (
        <span className="inline-flex items-center gap-2 mt-4 text-[12px] uppercase tracking-label text-ink-accent group-hover:gap-3 transition-all">
          Assistir
          <span aria-hidden="true">→</span>
        </span>
      )}
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
      className="py-8 md:py-10 border-b border-line-subtle last:border-b-0"
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="group block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.article>
  );
}
