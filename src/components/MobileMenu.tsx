import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface NavItem {
  to: string;
  label: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}

export default function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-bg-primary md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between h-nav px-6 border-b border-line-subtle">
            <Link
              to="/"
              onClick={onClose}
              className="font-display italic text-[22px] font-medium text-ink-primary"
            >
              Daline Ribeiro
            </Link>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar menu"
              className="p-2 -mr-2 text-ink-primary"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
                <line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center gap-8 pt-24">
            {items.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
              >
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="font-display text-[32px] text-ink-primary"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://instagram.com/daline.ribeiro_"
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="uppercase text-[13px] tracking-label text-ink-muted mt-4"
            >
              Instagram
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
