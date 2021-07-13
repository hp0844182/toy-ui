import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Modal, ModalProps } from '../components/modal'

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta
const Template: Story<ModalProps> = (args) => {
  const [open, setOpen] = React.useState(true)
  return (
    <Modal
      {...args}
      isOpen={open}
      onClose={() => {
        setOpen(false)
      }}
    />
  )
}

export const Base = Template.bind({})
Base.args = {
  children: 'hello world',
}
