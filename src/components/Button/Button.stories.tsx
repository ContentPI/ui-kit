import React from 'react'
import Button from './index'

const stories = {
  component: 'Button',
  stories: [
    {
      name: 'Button (<button>)',
      description: 'A standard button',
      render: <Button>Button</Button>,
      prop: false,
      code: `
    <Button>
      Standard Button
    </Button>
    `
    },
    {
      name: 'Button (<a>)',
      description: 'A standard button',
      render: <Button href="#">Button</Button>,
      prop: false,
      code: `
    <Button href="#">
      Standard Button
    </Button>
    `
    },
    {
      name: 'Emphasis (<button>)',
      description: 'A button can be formatted to show different levels of emphasis',
      prop: false,
      render: (
        <>
          <Button color="primary">Save</Button>
          <Button>Cancel</Button>
        </>
      ),
      code: `
      <Button color="primary">Save</Button>
      <Button>Cancel</Button>
      `
    },
    {
      name: 'Emphasis (<a>)',
      description: 'A button can be formatted to show different levels of emphasis',
      prop: false,
      render: (
        <>
          <Button color="primary" href="#">
            Save
          </Button>
          <Button href="#">Cancel</Button>
        </>
      ),
      code: `
      <Button color="primary" href="#">Save</Button>
      <Button href="#">Cancel</Button>
      `
    },
    {
      name: 'Colors (<button>)',
      prop: 'color',
      description: 'primary, secondary, info, success, warning, danger, dark, light',
      render: (
        <>
          <Button color="primary">Primary</Button>
          <Button color="info">Info</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
        </>
      ),
      code: `
      <Button color="primary">Primary</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      `
    }
  ]
}

export default stories
