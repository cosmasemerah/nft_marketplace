/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', { lineHeight: 1.4 }],
        '2xl': ['1.375rem', { lineHeight: 1.4 }],
        '3xl': ['1.75rem', { lineHeight: 1.4 }],
      },
      colors: {
        primary: '#2B2B2B',
        secondary: '#3B3B3B',
        cta: '#A259FF',
        caption: '#858584',
      },
      padding: {
        7: '30px',
        12: '50px',
      },
      height: {
        7: '30px',
        12: '50px',
        14: '60px',
      },
      width: {
        7: '30px',
        12: '50px',
        14: '60px',
      },
      backgroundImage: {
        art: "url('./src/assets/cat01.svg')",
        collectibles: "url('./src/assets/cat02.svg')",
        music: "url('./src/assets/cat03.svg')",
        photography: "url('./src/assets/cat04.svg')",
        video: "url('./src/assets/cat05.svg')",
        utility: "url('./src/assets/cat06.svg')",
        sport: "url('./src/assets/cat07.svg')",
        vrworld: "url('./src/assets/cat08.svg')",
      },
    },
  },
  plugins: [],
};
