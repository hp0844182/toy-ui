export interface BadgeClasses {
  base: string
  success: string
  danger: string
  warning: string
  neutral: string
  primary: string
}

export const defaultBadgeClasses = {
  base: 'inline-flex px-2 text-xs font-medium leading-5 rounded-full',
  success: 'text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100',
  danger: 'text-red-700 bg-red-100 dark:text-red-100 dark:bg-red-700',
  warning: 'text-yellow-600 bg-yellow-100 dark:text-white dark:bg-yellow-600',
  neutral: 'text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700',
  primary: 'text-primary-700 bg-primary-100 dark:text-white dark:bg-primary-600',
}
