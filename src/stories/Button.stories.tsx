import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Button, ButtonProps } from '../components/button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta
const SuccessIcon: React.FC<any> = (props) => (
  <svg
    {...props}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
)
const Template: Story<ButtonProps> = (args) => (
  <Button
    {...args}
    icon={SuccessIcon}
    onClick={() => {
      console.log(123)
    }}
  />
)

export const Primary = Template.bind({})
Primary.args = {
  layout: 'primary',
  children: 'button',
}
