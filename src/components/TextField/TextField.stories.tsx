import React from 'react'
import TextField from './index'

const stories = {
  component: 'TextField',
  stories: [
    {
      name: 'TextField',
      description: 'Text Input',
      render: <TextField type="text" placeholder="Placeholder" />,
      prop: false,
      code: `
      <TextField type="text" placeholder="Placeholder" />
      `
    },
    {
      name: 'TextField with error',
      description: 'Error',
      render: <TextField type="text" error />,
      prop: false,
      code: `
      <TextField type="text" error />
      `
    },
    {
      name: 'TextField fullWidth',
      description: 'Full width',
      render: <TextField type="text" fullWidth />,
      prop: false,
      code: `
      <TextField type="text" fullWidth />
      `
    },
    {
      name: 'TextField with helperText',
      description: 'Helper text',
      render: <TextField type="text" helperText="Helper text" />,
      prop: false,
      code: `
      <TextField type="text" helperText="Helper text" />
      `
    },
    {
      name: 'TextField as textarea',
      description: 'Textarea',
      render: <TextField type="text" textArea />,
      prop: false,
      code: `
      <TextField type="text" textArea />
      `
    },
    {
      name: 'TextField with min & max length',
      description: 'Min & max length',
      render: (
        <>
          <TextField type="text" minLength={10} />
          <TextField type="text" maxLength={20} />
        </>
      ),
      prop: false,
      code: `
      <TextField type="text" minLength={10} />
      <TextField type="text" maxLength={20} />
      `
    }
  ]
}

export default stories
