const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './packages/*/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: { ...colors.blue, DEFAULT: colors.blue[500] },
        neutral: colors.neutral,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('./packages/core')({
      colors: ['blue'],
      cssBase: true,
    }),
  ],
}
