import React from 'react'
import Text from './index'

const stories = {
  component: 'Text',
  stories: [
    {
      name: 'Text',
      description: 'left, center or right',
      render: <Text align="left">Left text</Text>,
      prop: 'align',
      code: `
      <Text align="left">My text</Text>
      `
    },
    {
      name: 'Text',
      description: 'left, center or right',
      render: <Text align="center">Centered text</Text>,
      prop: 'align',
      code: `
      <Text align="center">Centered text</Text>
      `
    },
    {
      name: 'Text',
      description: 'left, center or right',
      render: <Text align="right">Right text</Text>,
      prop: 'align',
      code: `
      <Text align="right">Centered text</Text>
      `
    }
  ]
}

export default stories
