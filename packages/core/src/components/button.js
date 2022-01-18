function buttonPrimary() {
  return {
    '&-primary': {
      '@apply bg-primary hover:bg-primary-700': {},
      '@apply text-white': {},
    },
    /* light variant */
    '&-primary.btn-light': {
      '@apply bg-primary-200 hover:bg-primary': {},
      '@apply text-primary hover:text-white': {},
    },
    /* Outline variant */
    '&-primary.btn-outline': {
      '@apply bg-transparent hover:bg-primary': {},
      '@apply border-primary border': {},
      '@apply text-primary hover:text-white': {},
    },
  }
}

function buttonSecondary() {
  return {
    '&-secondary': {
      '@apply bg-neutral-500 hover:bg-neutral-700': {},
      '@apply text-white': {},
    },
    /* light variant */
    '&-secondary.btn-light': {
      '@apply bg-neutral-200 hover:bg-neutral-500': {},
      '@apply text-neutral-500 hover:text-white': {},
    },
    /* Outline variant */
    '&-secondary.btn-outline': {
      '@apply bg-transparent hover:bg-neutral-500': {},
      '@apply border-neutral-500 border': {},
      '@apply text-neutral-500 hover:text-white': {},
    },
  }
}
function buttonSuccess() {
  return {
    '&-success': {
      '@apply bg-green-500 hover:bg-green-700': {},
      '@apply text-white': {},
    },
    '&-success.btn-light': {
      '@apply bg-green-200 hover:bg-green-500': {},
      '@apply text-green-500 hover:text-white': {},
    },
    /* Outline variant */
    '&-success.btn-outline': {
      '@apply bg-transparent hover:bg-green-500': {},
      '@apply border-green-500 border': {},
      '@apply text-green-500 hover:text-white': {},
    },
  }
}

function buttonDanger() {
  return {
    '&-danger': {
      '@apply bg-red-500 hover:bg-red-700': {},
      '@apply text-white': {},
    },
    '&-danger.btn-light': {
      '@apply bg-red-200 hover:bg-red-500': {},
      '@apply text-red-500 hover:text-white': {},
    },
    /* Outline variant */
    '&-danger.btn-outline': {
      '@apply bg-transparent hover:bg-red-500': {},
      '@apply border-red-500 border': {},
      '@apply text-red-500 hover:text-white': {},
    },
  }
}

function buttonWarn() {
  return {
    '&-warn': {
      '@apply bg-yellow-500 hover:bg-yellow-700': {},
      '@apply text-white': {},
    },
    '&-warn.btn-light': {
      '@apply bg-yellow-200 hover:bg-yellow-500': {},
      '@apply text-yellow-600 hover:text-white': {},
    },
    /* Outline variant */
    '&-warn.btn-outline': {
      '@apply bg-transparent hover:bg-yellow-500': {},
      '@apply border-yellow-500 border': {},
      '@apply text-yellow-500 hover:text-white': {},
    },
  }
}

function buttonLink() {
  return {
    '&-link': {
      '@apply bg-transparent hover:bg-neutral-200': {},
      '@apply text-primary': {},
    },
    '&-link.btn-light': {
      '@apply text-primary-200 hover:text-primary': {},
    },
    /* Outline variant */
    '&-link.btn-outline': {
      '@apply border-transparent hover:border-primary-500 border': {},
    },
  }
}

function buttonSize() {
  return {
    '&-xs': {
      '@apply px-2 py-0.5': {},
      '@apply text-xs': {},
    },
    '&-sm': {
      '@apply px-2.5 py-1': {},
      '@apply text-sm': {},
    },
    '&-md': {
      '@apply px-3.5 py-1.5': {},
      '@apply text-base': {},
    },
    '&-lg': {
      '@apply px-5 py-2': {},
      '@apply text-lg': {},
    },
    '&-xl': {
      '@apply px-6 py-2.5': {},
      '@apply text-xl': {},
    },
  }
}

module.exports = Button = (colors) => ({
  '.btn': {
    '@apply relative': {},
    '@apply rounded-md': {},
    '@apply inline-flex items-center justify-center flex-shrink-0 align-middle': {},
    '@apply font-medium leading-tight': {},
    transitionProperty: 'background-color, border-color, color, fill, stroke, box-shadow',
    '@apply	duration-75 ease-out': {},
    '@apply outline-none appearance-none cursor-pointer select-none whitespace-nowrap': {},
    '@apply focus:outline-none': {},
    // sizing
    ...buttonSize(),

    '&-disabled': {
      '@apply shadow-none cursor-not-allowed opacity-60': {},
    },

    // variants
    ...buttonPrimary(),
    ...buttonSecondary(),
    ...buttonSuccess(),
    ...buttonDanger(),
    ...buttonWarn(),
    ...buttonLink(),
  },
})
