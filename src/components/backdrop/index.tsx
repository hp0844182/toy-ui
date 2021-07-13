import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from 'src/context/theme-context'
import { defaultBackdropClasses } from './default'
export type BackdropProps = React.HTMLAttributes<HTMLDivElement>

export const Backdrop = React.forwardRef<HTMLDivElement, BackdropProps>(function Backdrop(props, ref) {
  const { className, ...other } = props
  const {
    theme: { backdrop = defaultBackdropClasses },
  } = useContext(ThemeContext)

  const baseStyle = backdrop.base

  const cls = classNames(baseStyle, className)
  return <div className={cls} ref={ref} {...other}></div>
})

export default Backdrop
