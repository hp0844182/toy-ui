export interface HelperTextClasses {
  base: string
  valid: string
  invalid: string
}
// HelperText
export const defaultHelperTextClasses: HelperTextClasses = {
  base: 'text-xs',
  valid: 'text-green-600 dark:text-green-400',
  invalid: 'text-red-600 dark:text-red-400',
}
