import React, { useState, useContext } from 'react'
import { forwardRefWithName, cx } from '@hpui/utils'
import { ChevronRightIcon, ExclamationIcon } from '@hpui/icon'
export interface SubMenuProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  menuTitle: React.ReactNode
  level?: number
  activecondition?: boolean
}
export const SubMenu = forwardRefWithName<HTMLDivElement, SubMenuProps>((props, ref) => {
  const { className, menuTitle, children, level = 0, activecondition = false, ...rest } = props
  const [open, setOpen] = useState(activecondition)
  const cls = cx('relative  inline-block text-left w-full', className)
  const ulCls = cx('overflow-hidden transition-all duration-1000', open ? 'h-auto' : 'h-0')
  const iconCls = cx('flex-shrink-0  transition-transform text-lg', { 'rotate-90': open })
  const pstyle: React.CSSProperties = {
    paddingLeft: level === 0 ? level * 24 + 4 + 'px' : level * 24 + 'px',
  }
  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div ref={ref} className={cls} {...rest}>
      <div
        onClick={handleOpen}
        style={pstyle}
        className="flex items-center justify-between w-full py-1 pr-2 mb-1 rounded-md cursor-pointer hover:bg-gray-100"
      >
        <span className="flex-shrink-0 text-base">
          <ExclamationIcon />
        </span>
        <span className="flex-1 ml-1 overflow-hidden font-normal">{menuTitle}</span>
        <ChevronRightIcon className={iconCls} />
      </div>
      <ul className={ulCls}>
        {React.Children.map(children, (child) => {
          return child
            ? React.cloneElement(child as any, {
                level: level + 1,
              })
            : child
        })}
      </ul>
    </div>
  )
}, 'Menu')
