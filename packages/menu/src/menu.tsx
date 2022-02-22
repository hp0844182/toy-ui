import React, { Reducer, useReducer } from 'react'
import { forwardRefWithName, cx } from '@hpui/utils'
import { menuContext, MenuDataContext } from './menu-context'
import { useMemo } from 'react'

// 初始状态
interface IinitState {
  selectedKey: string
}
const initialState: IinitState = { selectedKey: '' }
type ActionType = { type: 'setOpenKeys'; payload: IinitState['selectedKey'] }
function reducer(state: IinitState, action: ActionType) {
  switch (action.type) {
    case 'setOpenKeys':
      return {
        ...state,
        openKeys: action.payload,
      }
    default:
      throw new Error()
  }
}

export interface MenuProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
  mode: 'vertical' | 'horizontal' | 'inline'
  handleSelect: MenuDataContext['handleSelect']
  selectedKey: string
}
export const Menu = forwardRefWithName<HTMLUListElement, MenuProps>((props, ref) => {
  const { className, selectedKey, handleSelect } = props
  const [state, setState] = useReducer<Reducer<IinitState, ActionType>>(reducer, initialState)
  const contextValue = useMemo<MenuDataContext>(() => {
    return {
      selectedKey: selectedKey,
      handleSelect: handleSelect,
    }
  }, [selectedKey, handleSelect])
  const cls = cx('relative inline-block text-left bg-white w-40', className)
  return (
    <ul ref={ref} className={cls}>
      <menuContext.Provider value={contextValue}>{props.children}</menuContext.Provider>
    </ul>
  )
}, 'Menu')
