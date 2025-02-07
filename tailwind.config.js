/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#001F3F',
          light: '#003366'
        },
        golden: {
          DEFAULT: '#FFD700',
          light: '#FFDF2B'
        }
      }
    },
  },
  plugins: [],
};