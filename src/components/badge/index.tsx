import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from 'src/context/theme-context'
import { mergeDeep } from 'src/utils/merge-deep'

import { defaultBadgeClasses } from './default'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The type of the badge
   */
  type?: 'success' | 'danger' | 'warning' | 'neutral' | 'primary'
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(function Badge(props, ref) {
  const { className, children, type = 'primary', ...other } = props

  const {
    theme: { badge = {} },
  } = useContext(ThemeContext)
  const theme = mergeDeep(defaultBadgeClasses, badge)
  const baseStyle = theme.base

  const cls = classNames(baseStyle, theme[type], className, '')

  return (
    <span className={cls} ref={ref} {...other}>
      {children}
    </span>
  )
})

export default Badge
