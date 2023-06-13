module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',    // Adicionado screen para dispositivos móveis (ex: iPhone SE)
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
      colors: {
        background: '#09090a',
      },
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
      },
    },
  },
}
