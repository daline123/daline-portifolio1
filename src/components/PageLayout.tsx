import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageLayoutProps {
  label?: string;
  children: ReactNode;
  wide?: boolean;
  isSection?: boolean;
  id?: string;
}

export default function PageLayout({ label, children, wide = false, isSection = false, id }: PageLayoutProps) {
  const Component = isSection ? 'section' : 'main';
  
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${isSection ? 'py-20 md:py-32' : 'min-h-screen pt-[calc(var(--nav-height)+80px)] md:pt-[calc(var(--nav-height)+120px)] pb-24 md:pb-32'} px-6 md:px-12`}
    >
      <div className={`mx-auto ${wide ? 'max-w-7xl' : 'max-w-prose'}`}>
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
    </motion.div>
  );
}
