module.exports = Spinner = () => ({
  '.spin-nested-box': {
    '@apply relative': {},
  },
  '.spin-nested-loading': {
    '@apply absolute': {},
    '@apply w-full h-full': {},
    '@apply inline-flex items-center justify-center': {},
    '@apply opacity-50': {},
  },
  '.spin-blur': {
    '@apply opacity-30 select-none': {},
  },
  '.spin': {
    '&-2xs': {
      '@apply w-4 h-4': {},
    },
    '&-xs': {
      '@apply w-5 h-5': {},
    },
    '&-sm': {
      '@apply w-6 h-6': {},
    },
    '&-md': {
      '@apply w-7 h-7': {},
    },

    '&-lg': {
      '@apply w-8 h-8': {},
    },

    '&-xl': {
      '@apply w-10 h-10': {},
    },

    '&-2xl': {
      '@apply w-12 h-12': {},
    },

    '&-3xl': {
      '@apply w-16 h-16': {},
    },
  },
})
