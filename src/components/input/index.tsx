import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from 'src/context/theme-context'
import { mergeDeep } from 'src/utils/merge-deep'
import { defaultInputClasses, InputClasses } from './default'

export interface InputProps extends React.ComponentPropsWithRef<'input'> {
  /**
   * Defines the color of the input
   */
  valid?: boolean
  /**
   * Defines if the input is disabled
   */
  disabled?: boolean
  /**
   * Defines the type of the input
   */
  type?: 'radio' | 'checkbox' | string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
  const { valid, disabled, className, type = 'text', ...other } = props

  const {
    theme: { input },
  } = useContext(ThemeContext)
  const theme = mergeDeep(defaultInputClasses, input) as InputClasses
  const baseStyle = theme.base
  const activeStyle = theme.active
  const disabledStyle = theme.disabled
  const validStyle = theme.valid
  const invalidStyle = theme.invalid
  const radioStyle = theme.radio
  const checkStyle = theme.checkbox

  function hasValidation(valid: boolean | undefined) {
    return valid !== undefined
  }

  function validationStyle(valid: boolean | undefined): string {
    if (hasValidation(valid)) {
      return valid ? validStyle : invalidStyle
    }
    return ''
  }

  function typeStyle(type: string): string {
    switch (type) {
      case 'radio':
        return radioStyle
      case 'checkbox':
        return checkStyle
      default:
        return baseStyle
    }
  }

  const cls = classNames(
    typeStyle(type),
    // don't apply activeStyle if has valid or disabled
    !hasValidation(valid) && !disabled && activeStyle,
    // don't apply disabledStyle if has valid
    !hasValidation(valid) && disabled && disabledStyle,
    validationStyle(valid),
    className,
  )

  return <input className={cls} type={type} ref={ref} disabled={disabled} {...other} />
})

export default Input
