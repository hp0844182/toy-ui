import React, { useContext } from 'react'
import classNames from 'classnames'
import { ThemeContext } from '../../context/theme-context'
import { defaultAvatarClasses } from './default'
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The size of the avatar
   */
  size?: 'large' | 'regular' | 'small' | number
  /**
   * Alternative text for the avatar image
   */
  alt?: string
  /**
   * The source for the avatar image
   */
  src: string
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(function Avatar(props, ref) {
  const { size = 'regular', src, alt, className, ...other } = props
  const {
    theme: { avatar = defaultAvatarClasses },
  } = useContext(ThemeContext)

  const baseStyle = avatar.base
  const sizeStyles = {
    large: avatar.size.large,
    regular: avatar.size.regular,
    small: avatar.size.small,
  }
  /**
   * custome the avatar size
   */
  const isCustomSize = typeof size === 'number'
  const cls = classNames(baseStyle, !isCustomSize && sizeStyles[size as 'small'], className)
  const style = isCustomSize && {
    width: size + 'px',
    height: size + 'px',
  }
  return (
    <div
      className={cls}
      ref={ref}
      {...other}
      style={{
        ...style,
        ...other.style,
      }}
    >
      <img className="object-cover w-full h-full rounded-full" src={src} alt={alt} loading="lazy" />
      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
    </div>
  )
})

export default Avatar
