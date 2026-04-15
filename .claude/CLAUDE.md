# CLAUDE.md — Portfolio Daline Ribeiro

## Visão Geral do Projeto

Site portfólio pessoal para **Daline Ribeiro**, bailarina, criadora e artista da dança. Intérprete-criadora na Lia Rodrigues Companhia de Danças desde 2022, com apresentações em +20 países.

**URL do projeto:** dalineribeiro.com (ou similar)
**Referência visual:** Site da Cristina Córdova (cristinacordova.com) — layout editorial minimalista, galeria horizontal com scroll lateral na home, navegação limpa no topo.

---

## Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS 3 |
| Roteamento | React Router v6 |
| Deploy | Vercel |
| Fontes | Google Fonts (ver Design System) |
| Animações | CSS transitions + Framer Motion (lightweight) |
| Imagens | Placeholder via `/public/images/` — a artista fornecerá fotos posteriormente |

**Nota:** Projeto estático, sem backend. Sem Supabase. Sem autenticação. Site vitrine puro.

---

## Design System

### Direção Estética

**Conceito:** Editorial minimalista com alma de dança. Inspirado em revistas de arte contemporânea e sites de companhias de dança europeias. O espaço em branco é tão importante quanto o conteúdo — respira como uma pausa entre movimentos.

**Tom:** Elegante, contido, sofisticado. Deixar as imagens e o trabalho falarem. A tipografia é ousada apenas no nome; o resto é discreto e funcional.

### Paleta de Cores

```css
:root {
  /* Fundos */
  --bg-primary: #FAFAFA;        /* fundo principal — off-white quente */
  --bg-secondary: #F0EFED;      /* fundo seções alternadas */
  --bg-overlay: rgba(0,0,0,0.03); /* overlay sutil em hovers */

  /* Textos */
  --text-primary: #1A1A1A;      /* títulos, nome */
  --text-body: #3D3D3D;         /* corpo de texto */
  --text-muted: #8A8A8A;        /* legendas, metadados */
  --text-accent: #C4A882;       /* detalhes dourados — remetendo a pele, terra, calor */

  /* Interação */
  --link-hover: #1A1A1A;
  --border-subtle: #E5E3E0;
  --border-active: #1A1A1A;
}
```

**Sem dark mode.** O site é claro — a identidade da artista é luz, corpo, presença.

### Tipografia

```css
/* Nome/Título principal */
font-family: 'Playfair Display', serif;
/* OU alternativa: 'Cormorant Garamond', serif */

/* Navegação + labels */
font-family: 'Archivo', sans-serif;
letter-spacing: 0.12em;
text-transform: uppercase;
font-weight: 500;
font-size: 13px;

/* Corpo de texto */
font-family: 'Archivo', sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.7;

/* Subtítulo (dança. corpo. movimento.) */
font-family: 'Archivo', sans-serif;
font-weight: 300;
font-style: italic;
letter-spacing: 0.2em;
font-size: 14px;
color: var(--text-muted);
```

### Espaçamentos

```
--spacing-xs: 8px;
--spacing-sm: 16px;
--spacing-md: 32px;
--spacing-lg: 64px;
--spacing-xl: 120px;
--nav-height: 72px;
--gallery-gap: 12px;       /* gap entre imagens na galeria horizontal */
--page-padding-x: 48px;    /* padding lateral das páginas internas */
--page-padding-x-mobile: 24px;
```

---

## Estrutura de Rotas

```
/                → Home (galeria horizontal)
/sobre           → Sobre
/cena            → Cena (Intérprete + Criadora)
/corpo-quente    → Corpo Quente
/contato         → Fale Comigo
```

---

## Componentes

### 1. `<Navbar />`

**Comportamento idêntico à referência Cristina Córdova:**

- Fixo no topo (`position: fixed`, `z-index: 50`)
- Fundo: `var(--bg-primary)` com `backdrop-filter: blur(8px)` e leve transparência
- **Esquerda:** Nome "DALINE RIBEIRO" em `Playfair Display`, bold, ~28px, link para `/`
- **Direita:** Links de navegação em `Archivo` uppercase, 13px, letter-spacing 0.12em
  - SOBRE | CENA | CORPO QUENTE | FALE COMIGO
  - Ícone Instagram (link para @daline.ribeiro_)
- **Hover nos links:** underline animado de baixo para cima (pseudo-element `::after` com `transform: scaleX(0) → scaleX(1)`)
- **Mobile (< 768px):** Hamburger menu → fullscreen overlay com links centralizados, animação fade-in
- **Subtítulo** "dança. corpo. movimento." aparece abaixo do nome apenas no desktop, em itálico, muted

```
┌─────────────────────────────────────────────────────────────┐
│  DALINE RIBEIRO          SOBRE  CENA  CORPO QUENTE  CONTATO  [ig] │
│  dança. corpo. movimento.                                         │
└─────────────────────────────────────────────────────────────┘
```

### 2. `<HorizontalGallery />` — Página Home (`/`)

**Este é o componente central e mais importante do site.**

**Layout:**
- Ocupa `100vw` × `100vh` (fullscreen abaixo da navbar)
- Container horizontal com `display: flex`, `overflow-x: auto`, `scroll-snap-type: x mandatory`
- Imagens lado a lado com gap de 12px
- Cada imagem: `height: calc(100vh - var(--nav-height) - 48px)`, width auto (aspect ratio preservado)
- `scroll-snap-align: start` em cada imagem

**Scroll:**
- Scroll vertical do mouse é interceptado e convertido em scroll horizontal (`wheel` event → `scrollLeft`)
- Scroll suave com `scroll-behavior: smooth` ou via JS com `requestAnimationFrame`
- Em mobile: scroll horizontal nativo com swipe (touch events)
- Scrollbar customizada: fina, discreta, cor `var(--border-subtle)`

**Scrollbar customizada (CSS):**
```css
.gallery::-webkit-scrollbar {
  height: 4px;
}
.gallery::-webkit-scrollbar-track {
  background: transparent;
}
.gallery::-webkit-scrollbar-thumb {
  background: var(--border-subtle);
  border-radius: 2px;
}
```

**Imagens:**
- Placeholder: usar boxes com aspect-ratios variados (retrato 2:3, paisagem 3:2, quadrado 1:1) alternando
- Cada imagem terá `object-fit: cover`
- Hover: leve zoom (scale 1.02) com transition 0.6s ease
- Mínimo 8-10 imagens placeholder na galeria
- **Sem legendas na home** — apenas imagens puras, como na referência

**Indicador de scroll (opcional):**
- Pequena seta ou texto "scroll →" no canto inferior direito, fade-out após primeiro scroll

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [NAVBAR]                                                                 │
├──────┬──────────┬────────┬──────────┬────────┬──────────┬────────────────┤
│      │          │        │          │        │          │                │
│ IMG  │   IMG    │  IMG   │   IMG    │  IMG   │   IMG    │   IMG  ...     │
│  1   │    2     │   3    │    4     │   5    │    6     │    7           │
│      │          │        │          │        │          │                │
├──────┴──────────┴────────┴──────────┴────────┴──────────┴────────────────┤
│                              ← scroll horizontal →                       │
└──────────────────────────────────────────────────────────────────────────┘
```

### 3. `<PageLayout />` — Layout das Páginas Internas

Wrapper compartilhado por todas as páginas internas (Sobre, Cena, Corpo Quente, Contato).

- Scroll **vertical** normal (diferente da Home)
- Max-width: `860px` para texto, centralizado
- Padding: `var(--page-padding-x)` lateral, `var(--spacing-xl)` top (abaixo da navbar)
- Animação de entrada: fade-in + translate-y sutil (20px) com duration 0.6s

### 4. `<SobrePage />` — Rota `/sobre`

**Layout:**
- Título da seção: "SOBRE" em Archivo uppercase, letter-spacing amplo, cor muted, 13px
- Abaixo: texto biográfico em parágrafos, Archivo 400, 16px, line-height 1.7
- Pode ter uma imagem destaque ao lado (layout 2 colunas em desktop, 1 coluna mobile)
- Ao final: frase de disponibilidade com destaque sutil

**Conteúdo:**
```
Daline Ribeiro é bailarina, criadora e artista da dança. Desde 2022 é 
intérprete-criadora na Lia Rodrigues Companhia de Danças, onde já se 
apresentou em mais de 20 países e dançou mais de 160 vezes o repertório 
da companhia, incluindo os espetáculos Borda, Encantado e Fúria.

Nascida em Teresina, começou no balé clássico aos 5 anos e nunca mais 
parou de estudar dança. É jornalista formada pela UFPI, tem formação 
livre em dança pela Escola Estadual de Dança Lenir Argento e integrou 
a 5ª Dentição da Universidade Antropofágica do Teatro Oficina.

Além de intérprete, atua como criadora e produtora, já criou um festival 
de dança online, coordenou mostras de artes cênicas e assinou direção 
de movimento. Criou o Corpo Quente, práticas corporais dançantes para 
quem quer se reconectar com o próprio corpo através do movimento.

Está disponível para projetos, ativações, workshops e colaborações artísticas.
```

### 5. `<CenaPage />` — Rota `/cena`

**Layout com duas sub-seções:**

**5a. Intérprete**
- Label "INTÉRPRETE" em uppercase muted
- Lista de trabalhos, cada um como bloco com:
  - Nome do espetáculo em **bold** ou itálico
  - Descrição/detalhes em texto regular
  - Ano entre parênteses
- Separador sutil (`border-bottom: 1px solid var(--border-subtle)`) entre items

**Items da seção Intérprete:**

1. **Lia Rodrigues Companhia de Danças** (desde 2022)
   Intérprete-criadora. Criou "Borda" (2025), dança "Encantado" e "Fúria". Apresentações no Théâtre National Chaillot (Paris), Sadler's Wells (Londres), Sydney Opera House, entre outros.

2. **True Rouge — Tunga / Inhotim** (2023)
   Performer na instauração True Rouge do artista Tunga no Instituto Inhotim, evento "Anoitecer Inhotim", direção de Lia Rodrigues.

3. **ENTRE — Datan Izaká** (2016)
   Intérprete-criadora. Apresentações no SESC Santo Amaro (SP) e Festival Panorama (RJ).

4. **Ato Ancestral — Ópera na Serra da Capivara** (2017)
   Intérprete. Direção e criação de Datan Izaká, colaboração de Samuel Alvis. São Raimundo Nonato.

5. **Catirinas — Weyla Carvalho** (2017)
   Performer. Apresentação no Junta Festival 3ª edição.

**5b. Criadora**
- Label "CRIADORA" em uppercase muted
- Mesma estrutura de blocos:

1. **Oficina Serestinha**
   Combina dança contemporânea, composição e consciência corporal com sonoridades das serestas do Piauí. Explora como o repertório de movimento da infância se expande na dança atual.

2. **Direção de Movimento — "As Cotas" (UNE)**
   Videoclipe manifesto celebrando 10 anos das Cotas no Brasil. Com Chico César, Leci Brandão, Mart'nália, Teresa Cristina, José Miguel Wisnik, Iara Rennó e outros.
   Link: https://www.youtube.com/watch?v=OBjDDV8S2qg

3. **PRETAFORMA** (2021)
   Plataforma para artistas pretos e pretas, em parceria com Jacob Alves. Festival online com 46 artistas do Brasil e Moçambique. Contemplado pelo Prêmio Maria da Inglaterra / Lei Adir Blanc Estadual Piauí.

4. **Mostra de Artes Cênicas — 11ª Bienal da UNE**
   Coordenação da mostra com curadoria de Maria Marighella e Adriana Bittencourt. 8 mil estudantes participantes.

### 6. `<CorpoQuentePage />` — Rota `/corpo-quente`

**Layout especial — pode ser mais expressivo que as outras páginas:**

- Título "CORPO QUENTE" grande, com destaque visual (pode usar cor accent dourada)
- Texto descritivo do projeto
- Possível imagem de fundo ou lateral
- CTA claro para contato

**Conteúdo:**
```
Corpo Quente é um projeto de práticas corporais dançantes criado por 
Daline Ribeiro para mulheres que querem se reconectar com o próprio 
corpo através do movimento.

É uma combinação de dança contemporânea, kundalini, rebolação, 
consciência corporal e leitura; sem precisar de experiência, sem 
certo ou errado. Só corpo, presença e vontade de sentir.

Os encontros acontecem em ciclos: online, em grupo pequeno, com 
intenção. Para ativações de marca, eventos corporativos e projetos 
presenciais, entre em contato.
```

**CTA Button:** "Entre em contato" → link para `/contato`
Estilo do botão: border 1px solid var(--text-primary), padding 12px 32px, uppercase, letter-spacing, hover com background preenchido e texto branco.

### 7. `<ContatoPage />` — Rota `/contato`

**Layout simples e direto:**

- Label "FALE COMIGO" em uppercase muted
- Informações de contato em texto limpo:

```
e-mail    dalinesribeiro@gmail.com
whatsapp  11 916208440
instagram @daline.ribeiro_
```

- E-mail é link `mailto:`
- WhatsApp é link `https://wa.me/5511916208440`
- Instagram é link `https://instagram.com/daline.ribeiro_`
- Layout com bastante espaço — elegante, sem formulário (contato direto)
- Possível frase final em itálico: *"Disponível para projetos, ativações, workshops e colaborações artísticas."*

---

## Estrutura de Pastas

```
daline-portfolio/
├── CLAUDE.md
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── gallery/          ← fotos da galeria home (placeholder por ora)
│       │   ├── 01.jpg
│       │   ├── 02.jpg
│       │   └── ...
│       ├── sobre/            ← foto para página Sobre
│       └── corpo-quente/     ← foto para página Corpo Quente
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css             ← imports Tailwind + custom CSS + fonts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── HorizontalGallery.tsx
│   │   ├── PageLayout.tsx
│   │   ├── ScrollIndicator.tsx
│   │   ├── WorkItem.tsx      ← bloco reutilizável para items em /cena
│   │   └── ContactLink.tsx   ← link estilizado para email/whatsapp/ig
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Sobre.tsx
│   │   ├── Cena.tsx
│   │   ├── CorpoQuente.tsx
│   │   └── Contato.tsx
│   └── styles/
│       └── gallery.css       ← scrollbar custom + horizontal scroll styles
```

---

## Implementação — Ordem dos Módulos

### Módulo 1: Setup + Navbar
- `npm create vite@latest` com React + TypeScript
- Instalar Tailwind, React Router, Framer Motion
- Configurar fontes (Playfair Display + Archivo) via Google Fonts
- Implementar `<Navbar />` com links funcionais
- Implementar `<MobileMenu />` com hamburger + overlay fullscreen
- Roteamento base no `App.tsx`

### Módulo 2: Home — Galeria Horizontal
- Implementar `<HorizontalGallery />`
- Scroll vertical → horizontal (wheel event handler)
- Scroll snap
- Imagens placeholder (usar gradient boxes ou unsplash temporário com tema dança)
- Scrollbar customizada
- Scroll indicator "→"
- Testar em mobile (touch/swipe)

### Módulo 3: Páginas Internas — Layout Base
- Implementar `<PageLayout />` wrapper
- Animação de entrada (fade + translateY)
- Testar responsividade do max-width e padding

### Módulo 4: Página Sobre
- Implementar `<SobrePage />`
- Texto biográfico
- Opcional: layout 2 colunas com imagem

### Módulo 5: Página Cena
- Implementar `<CenaPage />`
- Sub-seções Intérprete e Criadora
- `<WorkItem />` componente reutilizável
- Links externos (YouTube do videoclipe "As Cotas")

### Módulo 6: Página Corpo Quente
- Implementar `<CorpoQuentePage />`
- Layout mais expressivo, título com accent
- CTA button para contato

### Módulo 7: Página Contato
- Implementar `<ContatoPage />`
- Links mailto, WhatsApp, Instagram
- Layout clean e espaçoso

### Módulo 8: Polish & Deploy
- Revisar animações e transições de página
- Testar todos os breakpoints (mobile, tablet, desktop)
- Adicionar meta tags (og:image, description, title)
- Favicon
- Deploy na Vercel

---

## Regras de Implementação

1. **NÃO usar o design system da Agentise** (dark glassmorphism). Este é um projeto independente com identidade visual própria — clara, editorial, minimalista.
2. **Imagens são placeholder** por enquanto. Usar divs com background gradient ou cores sólidas que simulem fotos. A artista fornecerá as fotos reais depois.
3. **Performance:** Lazy loading em imagens da galeria. `loading="lazy"` + Intersection Observer para animações.
4. **Acessibilidade:** Alt text em todas as imagens, semântica HTML5, navegação por teclado funcional, focus states visíveis.
5. **Transições de rota:** Fade suave entre páginas (Framer Motion `AnimatePresence`).
6. **Sem dependências desnecessárias.** Manter o bundle leve. Framer Motion é o único extra permitido além do core.
7. **Texto em português brasileiro.** Todo o conteúdo do site é em PT-BR. Código e variáveis em inglês.
8. **Mobile-first:** Desenvolver pensando em mobile e expandir para desktop. Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`.

---

## Referências Visuais

- **Cristina Córdova** (cristinacordova.com) — layout principal, galeria horizontal, navegação
- **Lia Rodrigues Cia de Danças** (liarodrigues.com) — contexto artístico
- Estética de sites Format/Cargo para artistas visuais — clean, tipografia forte, imagens grandes

---

## Resumo

| Item | Detalhe |
|------|---------|
| Projeto | Portfólio Daline Ribeiro |
| Tipo | Site estático (SPA) |
| Stack | React + TS + Vite + Tailwind |
| Páginas | 5 (Home, Sobre, Cena, Corpo Quente, Contato) |
| Feature principal | Galeria horizontal com scroll lateral na Home |
| Estética | Editorial minimalista, fundo claro, tipografia bold |
| Deploy | Vercel |
| Backend | Nenhum |