import { cx } from '@hpui/utils'
import { createMemoClass } from '@hpui/theme'

const variantClasses = {
  subtle: 'alert-subtle',
  solid: 'alert-solid',
  'left-accent': 'alert-left-accent',
}

export const useAlertCloseButton = createMemoClass(() => {
  return cx('alert-close-button')
})

export const useAlertClass = createMemoClass((props) => {
  return cx('alert', variantClasses[props.variant])
})
