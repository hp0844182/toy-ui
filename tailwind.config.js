const colors = require('tailwindcss/colors')
/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          primary: {
            50:'#EFF6FF',
            100:'#DBEAFE',
            200:'#BFDBFE',
            300:'#93C5FD',
            400:'#60A5FA',
            500:'#3B82F6',
            600:'#2563EB',
            700:'#1D4ED8',
            800:'#1E40AF',
            900:'#1E3A8A',
            DEFAULT:'#3B82F6'
          }
        }
      }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
