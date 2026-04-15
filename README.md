# Portfolio — Daline Ribeiro

Site portfólio pessoal de **Daline Ribeiro** — bailarina, criadora e artista da dança. Intérprete-criadora na Lia Rodrigues Companhia de Danças desde 2022.

Editorial minimalista, inspirado em cristinacordova.com. Home com galeria horizontal em tela cheia.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS 3
- React Router v7
- Framer Motion
- Deploy: Vercel

## Scripts

```bash
npm run dev      # dev server
npm run build    # typecheck + production build
npm run preview  # preview do build
```

## Estrutura

```
src/
├── components/     Navbar, MobileMenu, HorizontalGallery,
│                   ScrollIndicator, PageLayout, WorkItem,
│                   ContactLink, ScrollToTop
├── pages/          Home, Sobre, Cena, CorpoQuente,
│                   Contato, NotFound
└── styles/         gallery.css (scrollbar custom + snap)
```

## Rotas

- `/` — galeria horizontal (scroll vertical → lateral)
- `/sobre`
- `/cena` — intérprete + criadora
- `/corpo-quente`
- `/contato`

## Assets

Imagens reais serão adicionadas em `public/images/gallery`, `public/images/sobre`, `public/images/corpo-quente`. Atualmente o site usa gradients placeholder.

## Deploy

`vercel.json` já contém SPA rewrites e headers de segurança. Conectar o repo à Vercel e o deploy é automático.
