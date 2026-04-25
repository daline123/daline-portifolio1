import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const NAV_ITEMS = [
  { to: '/sobre', label: 'Sobre' },
  { to: '/cena', label: 'Cena' },
  { to: '/corpo-quente', label: 'Corpo Quente' },
  { to: '/contato', label: 'Fale Comigo' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent border-transparent transition-all duration-500">
        <div className="flex items-center justify-between px-6 md:px-12 h-nav">
          <Link to="/" className="flex flex-col leading-none" aria-label="daline ribeiro — início">
            <span className="font-display font-medium text-[22px] md:text-[28px] lowercase text-ink-primary">
              daline ribeiro
            </span>
            <span className="hidden md:block font-sans font-normal text-[11px] tracking-[0.1em] mt-1 lowercase text-ink-muted">
              dança. corpo. movimento.
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} end>
                {({ isActive }) => (
                  <span 
                    className="nav-link" 
                    data-active={isActive}
                  >
                    {item.label}
                  </span>
                )}
              </NavLink>
            ))}
            <a
              href="https://instagram.com/daline.ribeiro_"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram de Daline Ribeiro"
              className="text-ink-primary hover:text-ink-accent transition-colors"
            >
              <InstagramIcon />
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          >
            <span className="w-6 h-px bg-ink-primary" />
            <span className="w-6 h-px bg-ink-primary" />
            <span className="w-6 h-px bg-ink-primary" />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_ITEMS}
      />
    </>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}
