/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0A0A0A',
          secondary: '#141414',
        },
        ink: {
          primary: '#F9F6F1',
          body: '#D1D1D1',
          muted: '#808080',
          accent: '#9B4A24',
        },
        line: {
          subtle: '#262626',
          active: '#F9F6F1',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Syne', 'sans-serif'],
      },
      spacing: {
        nav: '72px',
      },
      letterSpacing: {
        label: '0.12em',
        wider2: '0.2em',
      },
      maxWidth: {
        prose: '860px',
      },
    },
  },
  plugins: [],
};
