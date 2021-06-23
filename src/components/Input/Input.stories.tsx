import React from 'react'
import Input from './index'

const stories = {
  component: 'Input',
  stories: [
    {
      name: 'Input',
      description: 'Text Input',
      render: <Input type="text" placeholder="Placeholder" />,
      prop: false,
      code: `
      <Input type="text" placeholder="Placeholder" />
      `
    },
    {
      name: 'Password',
      description: 'Password Input',
      render: <Input type="password" />,
      prop: false,
      code: `
      <Input type="password" />
      `
    }
  ]
}

export default stories
