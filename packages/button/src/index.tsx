import React from 'react'
import { Button as InternalButton, ButtonProps } from './button'

export type { ButtonProps }
type Button = React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>
const Button = InternalButton as React.FunctionComponent<ButtonProps>
export { Button }
