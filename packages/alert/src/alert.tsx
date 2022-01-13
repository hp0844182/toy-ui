import { cx, __DEV__ } from '@hpui/utils'
import { Icon, XIcon } from '@hpui/icon'
import { DefaultProps } from '@hpui/theme'
import * as React from 'react'

import { useAlertClass, useAlertCloseButton } from './styles'

interface AlertContext {
  color?: string
}

const AlertContext = React.createContext<AlertContext>({})

type IAlertCloseButtonProps = DefaultProps

export interface AlertCloseButtonProps extends React.HTMLAttributes<HTMLButtonElement>, IAlertCloseButtonProps {}

export const AlertCloseButton = React.forwardRef<HTMLButtonElement, AlertCloseButtonProps>(
  ({ className, ...rest }, ref) => {
    const classes = useAlertCloseButton()
    return (
      <button ref={ref} className={cx(classes, className)} {...rest}>
        <Icon as={XIcon} label="x" className="inline-block w-4 h-4 text-current   fill-current" />
      </button>
    )
  },
)

if (__DEV__) {
  AlertCloseButton.displayName = 'AlertCloseButton'
}

interface IAlertProps extends DefaultProps {
  /* The color of the alert. */
  color?: string
  /** Controls alert appearance */
  variant?: 'subtle' | 'solid' | 'left-accent'
}

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, IAlertProps {}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
  const { color = 'primary', variant = 'subtle', className, ...rest } = props
  const classes = useAlertClass({
    variant,
  })

  return (
    <div role="alert" ref={ref} data-color={color ? color : undefined} className={cx(classes, className)} {...rest} />
  )
})

if (__DEV__) {
  Alert.displayName = 'Alert'
}
