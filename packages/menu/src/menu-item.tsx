import React, { useContext } from 'react'
import { forwardRefWithName, cx } from '@hpui/utils'
import { menuContext } from './menu-context'
import { ExclamationIcon } from '@hpui/icon'
interface MenuItemProps extends React.HtmlHTMLAttributes<HTMLLIElement> {
  itemKey: string
  level?: number
  icon?: React.ReactNode
}
export const MenuItem = forwardRefWithName<HTMLLIElement, MenuItemProps>((props, ref) => {
  const { className, children, level = 0, itemKey } = props
  const { handleSelect, selectedKey } = useContext(menuContext)
  const cls = cx(
    'flex text-left mb-1 cursor-pointer text-base  items-center justify-start py-1 px-4 text-gray-700 hover:bg-gray-100 rounded-md',
    { 'bg-gray-100': selectedKey === itemKey },
    className,
  )
  const pstyle: React.CSSProperties = {
    paddingLeft: level * 24 + 'px',
  }
  return (
    <li
      onClick={() => {
        handleSelect(itemKey)
      }}
      style={pstyle}
      ref={ref}
      className={cls}
    >
      <span className="flex-shrink-0 w-4">
        <ExclamationIcon />
      </span>
      <span className="ml-1 font-normal">{children}</span>
    </li>
  )
}, 'MenuItem')
