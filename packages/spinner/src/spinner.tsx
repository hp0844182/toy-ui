import { DefaultProps } from '@hpui/theme'
import { cx, __DEV__ } from '@hpui/utils'
import * as React from 'react'

import { useSpinClass, useSpinContainerCls } from './styles'

export interface ISpinProps extends DefaultProps {
  /* Size of the spinner */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  spinning?: boolean
}

export interface SpinProps extends React.HTMLAttributes<SVGSVGElement>, ISpinProps {}

const Spin = (props: ISpinProps) => {
  const { size = 'sm' } = props
  const classes = useSpinClass({ size })
  return (
    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" viewBox="0 0 66 66" className={classes}>
      <circle cx="33" cy="33" fill="none" r="28" stroke="currentColor" strokeWidth="10" className="opacity-30" />
      <circle
        cx="33"
        cy="33"
        fill="none"
        r="28"
        stroke="currentColor"
        strokeDasharray="40, 134"
        strokeDashoffset="325"
        strokeLinecap="round"
        strokeWidth="10"
        className="opacity-70"
      />
    </svg>
  )
}
export const Spinner: React.FunctionComponent<ISpinProps> = (props) => {
  const { size = 'sm', className, spinning, children, ...rest } = props
  const spinContainer = useSpinContainerCls({ spinning: spinning })
  return (
    <div className={cx(className, 'spin-nested-box')} {...rest}>
      {spinning && (
        <div key="spinning" className="spin-nested-loading">
          <Spin size={size} />
        </div>
      )}
      <div className={spinContainer} key="container">
        {children}
      </div>
    </div>
  )
}

if (__DEV__) {
  Spinner.displayName = 'Spinner'
}
