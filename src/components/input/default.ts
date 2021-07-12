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
  base: 'block w-full text-sm bg-white border  border-solid focus:outline-none rounded dark:text-gray-300 form-input leading-5',
  active:
    'focus:border-primary-400 focus:ring-2 focus:ring-primary-300 dark:border-gray-600  dark:focus:border-gray-600  dark:bg-gray-700',
  disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
  valid: 'border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 ',
  invalid: 'border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 ',
  radio: 'text-primary-600 form-radio focus:border-primary-400 focus:outline-none ',
  checkbox: 'text-primary-600 form-checkbox focus:border-primary-400 focus:outline-none ',
}
