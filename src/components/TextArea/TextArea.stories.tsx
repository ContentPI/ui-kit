import React from 'react'
import TextArea from './index'

const stories = {
  component: 'TextArea',
  stories: [
    {
      name: 'TextArea',
      description: 'Text Area',
      render: <TextArea />,
      prop: false,
      code: `
       <TextArea />
      `
    },
    {
      name: 'TextArea with full width',
      description: 'Enables full width',
      render: <TextArea fullWidth />,
      prop: 'fullWidth',
      code: `
       <TextArea fullWidth />
      `
    },
    {
      name: 'TextArea with status',
      description: 'Enables status',
      render: <TextArea status="success" />,
      prop: 'status',
      code: `
       <TextArea status="info" />
       <TextArea status="primary" />
       <TextArea status="danger" />
       <TextArea status="success" />
       <TextArea status="warning" />
      `
    }
  ]
}

export default stories
