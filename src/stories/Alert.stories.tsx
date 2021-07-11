import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Alert, AlertProps } from '../components/alert'

export default {
  title: 'Example/Alert',
  component: Alert,
} as Meta
const Template: Story<AlertProps> = (args) => <Alert {...args} />

export const Neutral = Template.bind({})
Neutral.args = {
  type: 'neutral',
  children: 'hello world',
}
