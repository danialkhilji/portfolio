/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-cyan': '#4cc9f0',
        'brand-dark': '#1D3557',
        'brand-medium': '#457B9D',
        'brand-light': '#A8DADC',
        'brand-bg': '#F8F9FA',
        'brand-dot': '#023047',
        'brand-footer': '#2c2c2c',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUpArrows: {
          '0%': { opacity: '0', transform: 'translateY(calc(20px - 50%))' },
          '100%': { opacity: '1', transform: 'translateY(-50%)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s forwards',
        fadeInUpArrows: 'fadeInUpArrows 0.5s forwards',
      },
    },
  },
  plugins: [],
};
