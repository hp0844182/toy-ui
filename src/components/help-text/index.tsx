import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from 'src/context/theme-context'
import { mergeDeep } from 'src/utils/merge-deep'
import { defaultHelperTextClasses } from './default'

export interface helperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Defines the color of the helper text (the same as with Input, Select, etc.)
   */
  valid?: boolean
}

export const HelperText = React.forwardRef<HTMLSpanElement, helperTextProps>(function HelperText(props, ref) {
  const { children, valid, className, ...other } = props
  const {
    theme: { helperText },
  } = useContext(ThemeContext)
  const theme = mergeDeep(defaultHelperTextClasses, helperText)
  const baseStyle = theme.base
  const validStyle = theme.valid
  const invalidStyle = theme.invalid

  const validationStyle = (valid: boolean | undefined): string => {
    switch (valid) {
      case true:
        return validStyle
      case false:
        return invalidStyle
      default:
        return ''
    }
  }

  const cls = classNames(baseStyle, validationStyle(valid), className)

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

export default HelperText
