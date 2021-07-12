import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Input, InputProps } from '../components/input'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta
const Template: Story<InputProps> = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {}
