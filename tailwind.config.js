/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F5EFE1',
          secondary: '#EAE2CF',
        },
        ink: {
          primary: '#4A2B1F',
          body: '#333333',
          muted: '#7E7E7E',
          accent: '#9B4A24',
        },
        line: {
          subtle: '#DFD7C2',
          active: '#1A1A1A',
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
