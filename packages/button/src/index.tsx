import React from 'react'
import { Button as InternalButton, IButtonProps } from './button'

export type { IButtonProps }
type Button = React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLButtonElement>>
const Button = InternalButton as React.FunctionComponent<IButtonProps>
export { Button }
