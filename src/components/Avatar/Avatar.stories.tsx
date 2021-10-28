import React from 'react'
import Avatar from './index'

const stories = {
  component: 'Avatar',
  props: [
    {
      name: 'children',
      type: 'Node',
      default: 'null',
      description: 'The content of the component',
    },
    {
      name: 'color',
      type: 'Color',
      default: 'primary',
      description: 'The color of the button',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: 'Enables the full width of the alert',
    },
  ],
  stories: [
    {
      name: 'Avatar',
      description: 'Avatar colors',
      render: (
        <>
          <Avatar color="primary" variant="circle">
            A
          </Avatar>

          <Avatar color="primary" variant="rounded">
            B
          </Avatar>

          <Avatar color="secondary" variant="rounded">
            C
          </Avatar>

          <Avatar color="success" variant="circle">
            D
          </Avatar>

          <Avatar color="info">D</Avatar>

          <Avatar color="warning">D</Avatar>

          <Avatar color="danger">D</Avatar>

          <Avatar color="light">D</Avatar>

          <Avatar color="dark">D</Avatar>
        </>
      ),
      prop: false,
      code: `
      <Alert>This is a primary alert</Alert>
      `,
    },
  ],
}

export default stories
