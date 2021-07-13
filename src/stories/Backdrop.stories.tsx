import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Backdrop, BackdropProps } from '../components/backdrop'

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
} as Meta
const Template: Story<BackdropProps> = (args) => <Backdrop {...args} />

export const Base = Template.bind({})
