import classNames from 'classnames'
import React, { ReactNode, SVGAttributes, useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'
import warn from 'src/utils/warning'
import { defaultButtonClasses } from './default'
type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>

export interface Props {
  children?: React.ReactNode
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean
  /**
   * The size of the button
   */
  size?: 'larger' | 'large' | 'regular' | 'small'
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: IconType
  /**
   * Shows an icon inside the button, right aligned
   */
  iconRight?: IconType
  /**
   * The style of the button
   */
  layout?: 'outline' | 'link' | 'primary'
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean
  /**
   * Shows an loading icon inside the button,disable event handles
   */
  loading?: boolean
}

export interface ButtonAsButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  tag?: 'button'
  /**
   * The native HTML button type
   */
  type?: 'button' | 'submit' | 'reset'
}

export interface ButtonAsAnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: 'a'
}

export interface ButtonAsOtherProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsOtherProps

type Ref = ReactNode | HTMLElement | string

type IconProps = SVGAttributes<SVGElement>

export const LoadingIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
)
export const Button = React.forwardRef<Ref, ButtonProps>(function Button(props, ref) {
  const {
    tag = 'button',
    type = tag === 'button' ? 'button' : undefined,
    disabled = false,
    loading = false,
    size = 'regular',
    layout = 'primary',
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    ...other
  } = props
  const {
    theme: { button = defaultButtonClasses },
  } = useContext(ThemeContext)

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight
  }

  warn(
    hasIcon() && !other['aria-label'] && !children,
    'Button',
    'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.',
  )

  const IconLeft = iconLeft || icon
  const IconRight = iconRight

  const baseStyle = button.base
  const blockStyle = button.block
  const loadingStyle = button.loading
  const sizeStyles = {
    larger: button.size.larger,
    large: button.size.large,
    regular: button.size.regular,
    small: button.size.small,
  }
  const iconSizeStyles = {
    larger: button.size.icon.larger,
    large: button.size.icon.large,
    regular: button.size.icon.regular,
    small: button.size.icon.small,
  }
  const iconStyle = button.icon[size]
  const layoutStyles = {
    primary: button.primary.base,
    outline: button.outline.base,
    link: button.link.base,
  }
  const activeStyles = {
    primary: button.primary.active,
    outline: button.outline.active,
    link: button.link.active,
  }
  const disabledStyles = {
    primary: button.primary.disabled,
    outline: button.outline.disabled,
    link: button.link.disabled,
  }

  const buttonStyles = classNames(
    baseStyle,
    // has icon but no children
    hasIcon() && !children && iconSizeStyles[size],
    // has icon and children
    hasIcon() && children && sizeStyles[size],
    // does not have icon
    !hasIcon() && sizeStyles[size],
    layoutStyles[layout],
    disabled ? disabledStyles[layout] : activeStyles[layout],
    block ? blockStyle : null,
    loading ? loadingStyle : null,
    className,
  )

  const iconLeftStyles = classNames(iconStyle, children ? button.icon.left : '')
  const iconRightStyles = classNames(iconStyle, children ? button.icon.right : '')
  const loadingStyles = classNames(button.loadingIcon[size], button.loadingIcon[layout], 'animate-spin -ml-1')
  return React.createElement(
    tag,
    {
      className: buttonStyles,
      ref,
      disabled: disabled || loading,
      type,
      ...other,
    },
    loading ? <LoadingIcon className={loadingStyles} /> : null,
    IconLeft && !loading ? React.createElement(IconLeft, { className: iconLeftStyles, 'aria-hidden': true }) : null,
    children,
    IconRight ? React.createElement(IconRight, { className: iconRightStyles, 'aria-hidden': true }) : null,
  )
})

export default Button
