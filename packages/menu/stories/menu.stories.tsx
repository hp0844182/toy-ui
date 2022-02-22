import { useState } from 'react'
import { Menu, SubMenu, MenuItem } from '../src'

export default {
  title: 'menu',
  component: Menu,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export const Base = () => {
  const [key, setKey] = useState('')
  return (
    <>
      <Menu
        selectedKey={key}
        handleSelect={(key) => {
          setKey(key)
        }}
        mode="horizontal"
      >
        <SubMenu menuTitle="Dashboard" key="122">
          <MenuItem itemKey="1">user list</MenuItem>
          <MenuItem itemKey="2">profile</MenuItem>
          <MenuItem itemKey="3">feed</MenuItem>
          <SubMenu key="7" menuTitle="Pages">
            <MenuItem itemKey="4">prin</MenuItem>
            <MenuItem itemKey="5">404</MenuItem>
            <MenuItem itemKey="6">f504eed</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </>
  )
}
