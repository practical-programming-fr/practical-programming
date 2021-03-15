module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'beige':'#FAF8F4'
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
