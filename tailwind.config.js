/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: 1.4 }], //12px
        base: ['1rem', { lineHeight: 1.4 }], //16px
        '2xl': ['1.375rem', { lineHeight: 1.4 }], //22px
        '3xl': ['1.75rem', { lineHeight: 1.4 }], //28px
        '4xl': ['2.375rem', { lineHeight: 1.4 }], //38px
      },
      colors: {
        primary: '#2B2B2B',
        secondary: '#3B3B3B',
        cta: '#A259FF',
        mute: '#CCCCCC',
        caption: '#858584',
      },
      padding: {
        6: '22px',
        7: '30px',
        12: '50px',
        14: '60px',
        18: '72px',
      },
      height: {
        7: '30px',
        12: '50px',
        14: '60px',
        24: '100px',
        52: '206px',
        56: '221px',
      },
      width: {
        7: '30px',
        12: '50px',
        14: '60px',
        24: '100px',
        52: '206px',
        56: '221px',
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
        highlight:
          "linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%),url('./src/assets/highlight_mobile.svg')",
      },
    },
  },
  plugins: [],
};
