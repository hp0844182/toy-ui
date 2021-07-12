import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { HelperText, helperTextProps } from '../components/help-text'

export default {
  title: 'Components/HelperText',
  component: HelperText,
} as Meta
const Template: Story<helperTextProps> = (args) => (
  <HelperText
    {...args}
    onClick={() => {
      console.log(123)
    }}
  />
)

export const Valid = Template.bind({})
Valid.args = {
  valid: true,
  children: 'valid',
}
