import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Badge, BadgeProps } from '../components/badge'

export default {
  title: 'Components/Badge',
  component: Badge,
} as Meta
const Template: Story<BadgeProps> = (args) => <Badge {...args} />

export const Neutral = Template.bind({})
Neutral.args = {
  type: 'neutral',
  children: 'hello world',
}
