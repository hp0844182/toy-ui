import React from 'react'
import { useBackdropClasses } from './styles'

export type BackdropProps = React.HTMLAttributes<HTMLDivElement>

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(props, ref) {
  const { className, ...other } = props
  const cls = useBackdropClasses(props)
  return <div className={cls} ref={ref} {...other}></div>
})
