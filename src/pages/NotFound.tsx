import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout label="Erro 404">
      <h1 className="font-display text-4xl md:text-6xl text-ink-primary leading-tight mb-6">
        Página <span className="italic text-ink-accent">não encontrada.</span>
      </h1>
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
