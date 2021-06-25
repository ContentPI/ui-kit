import React from 'react'
import TextField from './index'

const stories = {
  component: 'TextField',
  stories: [
    {
      name: 'TextField',
      description: 'text, password, number or email',
      render: <TextField type="text" placeholder="Placeholder" />,
      prop: 'type',
      code: `
      <TextField type="text" placeholder="Placeholder" />
      `
    },
    {
      name: 'TextField with error',
      description: 'boolean (false by default)',
      render: <TextField type="text" error />,
      prop: 'error',
      code: `
      <TextField type="text" error />
      `
    },
    {
      name: 'TextField fullWidth',
      description: 'boolean (false by default)',
      render: <TextField type="text" fullWidth />,
      prop: 'fullWidth',
      code: `
      <TextField type="text" fullWidth />
      `
    },
    {
      name: 'TextField with helperText',
      description: 'string',
      render: <TextField type="text" helperText="Helper text" />,
      prop: 'helperText',
      code: `
      <TextField type="text" helperText="Helper text" />
      `
    },
    {
      name: 'TextField as textarea',
      description: 'boolean (false by default)',
      render: <TextField type="text" textArea />,
      prop: 'textArea',
      code: `
      <TextField type="text" textArea />
      `
    },
    {
      name: 'TextField with min & max length',
      description: 'number',
      render: (
        <>
          <TextField type="text" minLength={10} />
          <TextField type="text" maxLength={20} />
        </>
      ),
      prop: 'minLenght | maxLength',
      code: `
      <TextField type="text" minLength={10} />
      <TextField type="text" maxLength={20} />
      `
    }
  ]
}

export default stories
