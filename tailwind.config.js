/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4C40F7',
          'blue-2': '#203696',
          'blue-3': '#1B1B87',
        },
        dark: '#00113B',
        deactive: '#9F9FA9',
        line: {
          light: '#ECECEC',
          footer: '#D8D8D8',
        },
        accent: {
          2: '#FFD301',
          3: '#FFBDBD',
        },
        gray: '#6B6B6B',
      },
      keyframes: {
        'accordion-down': {
          from: {height: 0},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: 0},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
