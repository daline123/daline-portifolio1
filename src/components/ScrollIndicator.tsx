import { AnimatePresence, motion } from 'framer-motion';

interface ScrollIndicatorProps {
  visible: boolean;
}

export default function ScrollIndicator({ visible }: ScrollIndicatorProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pointer-events-none fixed bottom-6 right-6 md:bottom-10 md:right-10 z-30 flex items-center gap-3 text-ink-muted"
        >
          <span className="uppercase text-[11px] tracking-wider2">
            arraste
          </span>
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block text-ink-primary"
            aria-hidden="true"
          >
            →
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
