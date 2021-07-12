export interface InputClasses {
  base: string
  active: string
  disabled: string
  valid: string
  invalid: string
  radio: string
  checkbox: string
}
export const defaultInputClasses: InputClasses = {
  base: 'block w-full text-sm focus:outline-none dark:text-gray-300 form-input leading-5',
  active:
    'focus:border-purple-400 dark:border-gray-600 focus:shadow-outline-purple dark:focus:border-gray-600 dark:focus:shadow-outline-gray dark:bg-gray-700',
  disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
  valid:
    'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green',
  invalid:
    'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red',
  radio:
    'text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray',
  checkbox:
    'text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray',
}
