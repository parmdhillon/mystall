const colors = require('tailwindcss/colors');

module.exports = {
  //purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: [
        'Sen',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
      ],
      display: ['Fredoka One', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial'],
    },
    colors: {
      ...colors,
      'sea-green': {
        50: '#f2fcfb',
        100: '#e6faf7',
        200: '#bff2ec',
        300: '#99eae0',
        400: '#4ddbc8',
        500: '#00cbb1',
        600: '#00b79f',
        700: '#009885',
        800: '#007a6a',
        900: '#006357',
      },
    },
    extend: {
      borderOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [],
};
