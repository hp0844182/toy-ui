/* eslint-disable @typescript-eslint/no-var-requires */
const windmill = require('../config')
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = windmill({
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
})
