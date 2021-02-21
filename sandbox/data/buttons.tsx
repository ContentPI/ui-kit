import React, { ReactElement } from 'react'

import Button from '../../src/components/Button'

export interface iButton {
  title: string
  prop?: string
  description: string
  render: ReactElement
  code: string
}

const buttons: iButton[] = [
  {
    title: 'Button (<button>)',
    description: 'A standard button',
    render: <Button>Button</Button>,
    code: `
    <Button>
      Standard Button
    </Button>
    `
  },
  {
    title: 'Button (<a>)',
    description: 'A standard button',
    render: <Button href="#">Button</Button>,
    code: `
    <Button href="#">
      Standard Button
    </Button>
    `
  },
  {
    title: 'Emphasis (<button>)',
    description: 'A button can be formatted to show different levels of emphasis',
    render: (
      <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
        <Button color="link">Link</Button>
      </>
    ),
    code: `
    <Button color="primary">Save</Button>
    <Button>Cancel</Button>
    `
  },
  {
    title: 'Emphasis (<a>)',
    description: 'A button can be formatted to show different levels of emphasis',
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
  }
]

export default buttons
