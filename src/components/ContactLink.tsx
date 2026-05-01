import { motion } from 'framer-motion';

interface ContactLinkProps {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  index: number;
}

export default function ContactLink({ label, value, href, external = false, index }: ContactLinkProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 + index * 0.08, duration: 0.5 }}
      className="group grid grid-cols-[120px_1fr_auto] md:grid-cols-[160px_1fr_auto] items-baseline gap-4 md:gap-8 py-6 md:py-8 border-b border-line-subtle transition-colors hover:text-ink-accent"
    >
      <span className="text-[12px] uppercase tracking-label text-ink-primary shrink-0">{label}</span>
      <span className="font-display text-xl md:text-3xl text-ink-primary group-hover:text-ink-accent transition-colors break-all">
        {value}
      </span>
      <span
        aria-hidden="true"
        className="text-ink-primary text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:text-ink-accent"
      >
        →
      </span>
    </motion.a>
  );
}
