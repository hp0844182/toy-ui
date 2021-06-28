import classNames from 'classnames';
import React, { ReactNode, useContext } from 'react';
import { defaultButtonClasses } from "./default-theme";
type IconType =
  | string
  | React.FunctionComponent<{ className: string; 'aria-hidden': boolean }>
  | React.ComponentClass<{ className: string; 'aria-hidden': boolean }>;

export interface Props {
  children?: React.ReactNode;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The size of the button
   */
  size?: 'large' | 'medium' | 'default' | 'small';
  /**
   * Shows only one icon inside the button; defaults to left
   */
  icon?: IconType;
  /**
   * The type of the button
   */
  layout?: 'link' | 'primary' | 'ghost' | 'dashed' | 'default';
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean;
}

export interface ButtonAsButtonProps extends Props, React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The element that should be rendered as a button
   */
  tag?: 'button';
  /**
   * The native HTML button type
   */
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonAsAnchorProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: 'a';
}

export interface ButtonAsOtherProps extends Props, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsOtherProps;

type Ref = ReactNode | HTMLElement | string;

export const Button = React.forwardRef<Ref, ButtonProps>(function Button(props, ref) {
  const {
    tag = 'button',
    type = tag === 'button' ? 'button' : undefined,
    disabled = false,
    size = 'default',
    layout = 'primary',
    block = false,
    className,
    children,
    ...other
  } = props;
  // const {
  //   theme: { button },
  // } = useContext(ThemeContext);
  const button = defaultButtonClasses;

  const baseStyle = button.base;
  const blockStyle = button.block;
  const sizeStyles = button.size[size];
  const layoutStyles = button.layout[layout];
  console.log(sizeStyles,size);
  
  // const activeStyles = {
  //   primary: button.primary.active,
  //   outline: button.outline.active,
  //   link: button.link.active,
  // };
  // const disabledStyles = {
  //   primary: button.primary.disabled,
  //   outline: button.outline.disabled,
  //   link: button.link.disabled,
  // };

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */

  const buttonStyles = classNames(
        baseStyle,
        layoutStyles,
        sizeStyles,
        block ? blockStyle : null,
        className,
      );

  // const iconLeftStyles = classNames(iconStyle, children ? button.icon.left : '');
  // const iconRightStyles = classNames(iconStyle, children ? button.icon.right : '');

  return React.createElement(
    tag,
    {
      className: buttonStyles,
      ref,
      disabled,
      type,
      ...other,
    },
    // IconLeft ? React.createElement(IconLeft, { className: iconLeftStyles, 'aria-hidden': true }) : null,
    children,
    // IconRight ? React.createElement(IconRight, { className: iconRightStyles, 'aria-hidden': true }) : null,
  );
});
