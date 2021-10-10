module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          900: '#121212',
          800: '#181818',
          700: '#202020',
          600: '#313131',
          500: '#484848',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
