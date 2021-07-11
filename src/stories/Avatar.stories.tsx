import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { AvatarProps, Avatar } from '../components/avatar'

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta
const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

export const Regular = Template.bind({})
Regular.args = {
  size: 'regular',
  src: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
}
