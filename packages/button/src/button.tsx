// import { Spinner } from '@vechaiui/spinner'
import { DefaultProps } from '@hpui/theme'
import { cx, __DEV__ } from '@vechaiui/utils'
import * as React from 'react'

import { useButtonClass } from './styles'

interface IButtonProps extends DefaultProps {
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
  colorType?: 'primary' | 'danger'
  /** Controls button appearance */
  variant?: 'primary' | 'link' | 'solid' | 'outline' | 'light' | 'ghost'
  /* React node */
  children?: React.ReactNode
}

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IButtonProps {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
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
    colorType = 'primary',
    variant,
    size = 'md',
    ...rest
  } = props

  const disabled = _disabled || loading
  const classes = useButtonClass({
    variant,
    size,
    disabled,
    colorType,
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
      {/* {loading && (
        <Spinner className={cx(loadingText ? 'relative' : 'absolute', loadingText ? `mr-2` : 'mr-0')} size="sm" />
      )} */}
      {loading ? loadingText || <span className="opacity-0">{children}</span> : children}
      {rightIcon && !loading ? rightIcon : null}
    </button>
  )
})

if (__DEV__) {
  Button.displayName = 'Button'
}
