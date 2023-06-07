module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090a',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
}
