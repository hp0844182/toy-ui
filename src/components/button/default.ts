type SizeType = {
  larger: string
  large: string
  regular: string
  small: string
}
type Layout = 'primary' | 'link' | 'outline'
type LayoutType = {
  base: string
  active: string
  disabled: string
}
export interface ButtonDefaultClasses {
  base: string
  block: string
  size: SizeType & {
    icon: SizeType
  }
  icon: SizeType & {
    left: string
    right: string
  }
  loading: string
  loadingIcon: SizeType &
    {
      [k in Layout]: string
    }
  primary: LayoutType
  outline: LayoutType
  link: LayoutType
}

export const defaultButtonClasses: ButtonDefaultClasses = {
  base: 'align-bottom inline-flex items-center justify-center  leading-5  transition-colors duration-150 font-medium focus:outline-none',
  block: 'w-full',
  size: {
    larger: 'px-10 py-4 rounded-lg',
    large: 'px-5 py-3 rounded-lg',
    regular: 'px-4 py-2 rounded-lg text-sm',
    small: 'px-3 py-1 rounded-md text-sm',
    icon: {
      larger: 'p-4 rounded-lg',
      large: 'p-3 rounded-lg',
      regular: 'p-2 rounded-lg',
      small: 'p-2 rounded-md',
    },
  },
  // styles applied to the SVG icon
  icon: {
    larger: 'h-5 w-5',
    large: 'h-5 w-5',
    regular: 'h-5 w-5',
    small: 'h-3 w-3',
    left: 'mr-2 -ml-1',
    right: 'ml-2 -mr-1',
  },
  loading: 'cursor-default',
  // styles applied to the Loading icon
  loadingIcon: {
    larger: ' mr-3 h-5 w-5 ',
    large: 'mr-3 h-5 w-5 ',
    regular: ' mr-3 h-5 w-5 ',
    small: ' mr-2 h-3 w-3 ',
    primary: 'text-white',
    link: 'text-gray-500',
    outline: 'text-gray-500',
  },
  primary: {
    base: 'text-white bg-primary-600 border border-transparent',
    active: 'active:bg-purple-600 hover:bg-primary-700 focus:ring-2 focus:ring-primary-300 focus:shadow-outline-purple',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  outline: {
    base: 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none',
    active:
      'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:ring-2 focus:ring-gray-300 focus:shadow-outline-gray',
    disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
  },
  link: {
    base: 'text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent',
    active:
      'active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10',
    disabled: 'opacity-50 cursor-not-allowed',
  },
}
