import React from 'react'
import { IDefaultTheme } from './default-theme'

interface ThemeContextInterface {
  theme: Partial<IDefaultTheme>
  mode?: Mode
  toggleMode?: any
}

export const ThemeContext = React.createContext<ThemeContextInterface>({ theme: {} })

interface ThemeProviderProps {
  children: React.ReactNode
  value?: any
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
