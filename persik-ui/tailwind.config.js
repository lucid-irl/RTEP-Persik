const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': "1024px",
      'xl': '1280px',
      '2xl': '1536px',
      'phone': '320px',
      'laptop': '768px',
    },
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Open Sans', 'serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
