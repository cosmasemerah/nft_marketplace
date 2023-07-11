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
      },
      padding: {
        7: '30px',
        12: '50px',
      },
    },
  },
  plugins: [],
};
