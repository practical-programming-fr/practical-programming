module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'beige':'#FAF8F4',
        'dark-gray':'#141414',
        'light-gray':'#1F1F1F',
        'nav-gray':'#191919',
        'dark-white':'#DBDBDB',
        'orange-link':'#BA6051',
        brand: '#B4AFA9',
        shadow: {
          '50':  '#f9f9f7',
          '100': '#f6f4ef',
          '200': '#ece7d9',
          '300': '#dfd3ba',
          '400': '#c8af88',
          '500': '#ac8859',
          '600': '#89633d',
          '700': '#684c36',
          '800': '#4f3a31',
          '900': '#3d2f2a',
        },
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/hero.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
}
