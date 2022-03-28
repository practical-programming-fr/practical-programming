const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
      colors: {
        'accent-1': '#333',
        'beige':'#FAF8F4',
        'dark-gray':'#141414',
        'nav-gray':'#191919',
        'dark-white':'#DBDBDB',
        'orange-link':'#BA6051',
        'brand': '#B4AFA9',
        sky:colors.sky,
        blue:colors.blue,
        white:colors.white,
        gray:colors.gray
      }
  },
  plugins: [],
}
