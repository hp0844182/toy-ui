module.exports = Modal = () => ({
  '.modal': {
    '@apply max-w-xl': {},
    '@apply px-6 mx-auto mt-10 overflow-hidden bg-white rounded-lg': {},
  },
  '.modal-header': {
    '@apply flex justify-between': {},
    '@apply -mx-6 px-6 py-3 text-lg font-semibold text-gray-700': {},
    '@apply border-b border-neutral-100': {},
  },
  '.modal-body': {
    '@apply  py-2 text-sm text-gray-700': {},
  },
  '.modal-footer': {
    '@apply flex items-center justify-end': {},
    '@apply -mx-6 px-6 py-3 space-x-2': {},
    '@apply border-t border-neutral-100': {},
  },
})
