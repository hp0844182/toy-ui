import { createContext } from 'react'
export interface MenuDataContext {
  selectedKey: string
  handleSelect: (key: string) => void
}
export const menuContext = createContext<MenuDataContext>({
  selectedKey: '',
  handleSelect: () => {},
})
