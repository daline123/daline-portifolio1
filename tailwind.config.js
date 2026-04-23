/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#FAFAFA',
          secondary: '#F0EFED',
        },
        ink: {
          primary: '#1A1A1A',
          body: '#3D3D3D',
          muted: '#8A8A8A',
          accent: '#C4A882',
        },
        line: {
          subtle: '#E5E3E0',
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
