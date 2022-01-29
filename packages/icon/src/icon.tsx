import { DefaultProps } from '@hpui/theme'
import { __DEV__, cx } from '@hpui/utils'

import * as React from 'react'
export interface IconProps extends DefaultProps {
  inline?: boolean
  role?: string
  color?: string
}
export const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ color = 'currentColor', className, inline, children, ...rest }, ref) => {
    const cls = cx(inline ? 'inline-block' : 'block', className)
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        viewBox="0 0 24 24"
        stroke={color}
        className={cls}
        {...rest}
      >
        {children}
      </svg>
    )
  },
)
if (__DEV__) {
  Icon.displayName = 'Icon'
}
