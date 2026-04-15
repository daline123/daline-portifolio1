import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  label?: string;
  children: ReactNode;
  wide?: boolean;
}

export default function PageLayout({ label, children, wide = false }: PageLayoutProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-[calc(var(--nav-height)+80px)] md:pt-[calc(var(--nav-height)+120px)] pb-24 md:pb-32 px-6 md:px-12"
    >
      <div className={`mx-auto ${wide ? 'max-w-5xl' : 'max-w-prose'}`}>
        {label && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="label mb-10 md:mb-14"
          >
            {label}
          </motion.p>
        )}
        {children}
      </div>
    </motion.main>
  );
}
