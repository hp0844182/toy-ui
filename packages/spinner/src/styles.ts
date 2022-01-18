import { createMemoClass } from '@hpui/theme'
import { cx } from '@hpui/utils'

const sizes = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
}

export const useSpinClass = createMemoClass((props) => {
  const className = cx('animate-spin', sizes[props.size])
  return className
})

export const useSpinContainerCls = createMemoClass((props) => {
  const className = cx('spin-container', props.spinning && 'spin-blur')
  return className
})
