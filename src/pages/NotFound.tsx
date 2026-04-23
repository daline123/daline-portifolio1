import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout label="Erro 404">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-display font-medium text-3xl md:text-5xl text-ink-primary mb-6 lowercase"
      >
        página <span className="font-normal text-ink-accent tracking-normal lowercase">não encontrada.</span>
      </motion.h1>
      <p className="text-ink-body text-lg mb-10 max-w-[52ch]">
        Este endereço não existe — talvez o movimento tenha mudado de direção.
      </p>
      <Link
        to="/"
        className="group inline-flex items-center gap-3 border border-ink-primary text-ink-primary uppercase tracking-label text-[12px] px-8 py-4 transition-colors hover:bg-ink-primary hover:text-bg-primary"
      >
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-x-1"
        >
          ←
        </span>
        Voltar ao início
      </Link>
    </PageLayout>
  );
}
