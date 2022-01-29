// import { Spinner } from '@vechaiui/spinner'
import { DefaultProps } from '@hpui/theme'
import { cx, __DEV__ } from '@hpui/utils'
import { Spin } from '@hpui/spinner'

import * as React from 'react'

import { useButtonClass } from './styles'

export interface IButtonProps extends DefaultProps, React.HTMLAttributes<HTMLButtonElement> {
  /* Shows loading spinner */
  loading?: boolean
  /* Makes button disabled */
  disabled?: boolean
  /* Makes button active */
  active?: boolean
  /* The label to show in the button when loading is true */
  loadingText?: string
  /* Set the original html type of button */
  type?: 'button' | 'reset' | 'submit'
  /* Adds icon before button label */
  leftIcon?: React.ReactElement
  /* Adds icon after button label */
  rightIcon?: React.ReactElement
  /* Size of the button */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /* Color of the button */
  color?: 'primary' | 'danger' | 'secondary' | 'success' | 'danger' | 'warn' | 'link'
  /** Controls button appearance */
  variant?: 'primary' | 'link' | 'solid' | 'outline' | 'light' | 'ghost'
  /* React node */
  children?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
  const {
    disabled: _disabled,
    loading,
    active,
    loadingText,
    type,
    leftIcon,
    rightIcon,
    children,
    className,
    color = 'primary',
    variant,
    size = 'md',
    ...rest
  } = props

  const disabled = _disabled || loading
  const classes = useButtonClass({
    variant,
    size,
    disabled,
    color,
  })

  return (
    <button
      ref={ref}
      disabled={disabled}
      aria-disabled={disabled}
      type={type}
      data-active={active ? 'true' : undefined}
      className={cx(classes, className)}
      {...rest}
    >
      {leftIcon && !loading ? leftIcon : null}
      {loading && <Spin className="mr-2" size="sm" />}
      {(loading && loadingText) || children}
      {rightIcon && !loading ? rightIcon : null}
    </button>
  )
})

if (__DEV__) {
  Button.displayName = 'Button'
}
