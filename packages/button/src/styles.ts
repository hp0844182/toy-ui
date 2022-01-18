import { createMemoClass } from '@hpui/theme'
import { cx } from '@hpui/utils'

export const useButtonClass = createMemoClass((props) => {
  const colors = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    danger: 'btn-danger',
    warn: 'btn-warn',
    link: 'btn-link',
  }
  const variantClasses = {
    outline: 'btn-outline',
    light: 'btn-light',
  }

  const sizes = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
  }

  const classes = cx(
    'btn',
    colors[props.color],
    sizes[props.size],
    variantClasses[props.variant],
    props.disabled && 'btn-disabled',
  )

  return classes
})
