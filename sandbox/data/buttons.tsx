import React from 'react'

import { CodeBlock } from './types'
import Button from '../../src/components/Button'

export const buttons: CodeBlock[] = [
  {
    title: 'Button (<button>)',
    description: 'A standard button',
    render: <Button>Standard Button</Button>,
    code: `
    <Button>
      Standard Button
    </Button>
    `
  },
  {
    title: 'Button (<a>)',
    description: 'A standard button',
    render: <Button href="#">Standard Button</Button>,
    code: `
    <Button href="#">
      Standard Button
    </Button>
    `
  },
  {
    title: 'Button (<button>)',
    description: 'A round, square, and regular button',
    render: (
      <>
        <Button>Button</Button>
        <Button shape="round">Button</Button>
        <Button shape="square">Button</Button>
      </>
    ),
    code: `
    <Button>Button</Button>
    <Button shape="round">Button</Button>
    <Button shape="square">Button</Button>
    `
  },
  {
    title: 'Button (<a>)',
    description: 'A round, square, and regular button',
    render: (
      <>
        <Button href="#">Button</Button>
        <Button href="#" shape="round">
          Button
        </Button>
        <Button href="#" shape="square">
          Button
        </Button>
      </>
    ),
    code: `
    <Button href="#">Button</Button>
    <Button href="#" shape="round">
      Button
    </Button>
    <Button href="#" shape="square">
      Button
    </Button>
    `
  },
  {
    title: 'Emphasis (<button>)',
    description: 'A button can be formatted to show different levels of emphasis',
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
  },
  {
    title: 'Colors (<button>)',
    prop: 'color',
    description: 'primary, info, success, warning, danger',
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
  },
  {
    title: 'Colors (<a>)',
    prop: 'color',
    description: 'primary, secondary, info, success, warning, danger',
    render: (
      <>
        <Button color="primary" href="#">
          Primary
        </Button>
        <Button color="info" href="#">
          Info
        </Button>
        <Button color="success" href="#">
          Success
        </Button>
        <Button color="warning" href="#">
          Warning
        </Button>
        <Button color="danger" href="#">
          Danger
        </Button>
      </>
    ),
    code: `
    <Button color="primary" href="#">Primary</Button>
    <Button color="info" href="#">Info</Button>
    <Button color="success" href="#">Success</Button>
    <Button color="warning" href="#">Warning</Button>
    <Button color="danger" href="#">Danger</Button>
    `
  },
  {
    title: 'Disabled (<button>)',
    prop: 'disabled',
    description: 'boolean',
    render: (
      <>
        <Button color="primary" disabled>
          Disabled
        </Button>
        <Button color="info" disabled>
          Info
        </Button>
        <Button color="success" disabled>
          Success
        </Button>
        <Button color="warning" disabled>
          Warning
        </Button>
        <Button color="danger" disabled>
          Danger
        </Button>
      </>
    ),
    code: `
    <Button color="primary" disabled>
      Disabled
    </Button>
    <Button color="info" disabled>
      Info
    </Button>
    <Button color="success" disabled>
      Success
    </Button>
    <Button color="warning" disabled>
      Warning
    </Button>
    <Button color="danger" disabled>
      Danger
    </Button>
    `
  },
  {
    title: 'Disabled (<a>)',
    prop: 'disabled',
    description: 'boolean',
    render: (
      <>
        <Button color="primary" disabled href="#">
          Disabled
        </Button>
        <Button color="info" disabled href="#">
          Info
        </Button>
        <Button color="success" disabled href="#">
          Success
        </Button>
        <Button color="warning" disabled href="#">
          Warning
        </Button>
        <Button color="danger" disabled href="#">
          Danger
        </Button>
      </>
    ),
    code: `
    <Button color="primary" href="#" disabled>
      Disabled
    </Button>
    <Button color="info" href="#" disabled>
      Info
    </Button>
    <Button color="success" href="#" disabled>
      Success
    </Button>
    <Button color="warning" href="#" disabled>
      Warning
    </Button>
    <Button color="danger" href="#" disabled>
      Danger
    </Button>
    `
  },
  {
    title: 'Variant Outlined (<button>)',
    prop: 'variant',
    description: 'outlined',
    render: (
      <>
        <Button color="primary" variant="outlined">
          Primary
        </Button>
        <Button color="info" variant="outlined">
          Info
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
        <Button color="warning" variant="outlined">
          Warning
        </Button>
        <Button color="danger" variant="outlined">
          Danger
        </Button>
      </>
    ),
    code: `
    <Button color="primary" variant="outlined">Primary</Button>
    <Button color="info" variant="outlined">Info</Button>
    <Button color="success" variant="outlined">Success</Button>
    <Button color="warning" variant="outlined">Warning</Button>
    <Button color="danger" variant="outlined">Danger</Button>
    `
  },
  {
    title: 'Variant Outlined (<a>)',
    prop: 'variant',
    description: 'outlined',
    render: (
      <>
        <Button color="primary" variant="outlined" href="#">
          Primary
        </Button>
        <Button color="info" variant="outlined" href="#">
          Info
        </Button>
        <Button color="success" variant="outlined" href="#">
          Success
        </Button>
        <Button color="warning" variant="outlined" href="#">
          Warning
        </Button>
        <Button color="danger" variant="outlined" href="#">
          Danger
        </Button>
      </>
    ),
    code: `
    <Button color="primary" variant="outlined" href="#">Primary</Button>
    <Button color="info" variant="outlined" href="#">Info</Button>
    <Button color="success" variant="outlined" href="#">Success</Button>
    <Button color="warning" variant="outlined" href="#">Warning</Button>
    <Button color="danger" variant="outlined" href="#">Danger</Button>
    `
  },
  {
    title: 'Sizes (<button>)',
    prop: 'size',
    description: 'sm, md, lg & xl',
    render: (
      <>
        <p>
          <Button color="primary" size="small">
            Small Size
          </Button>
          <Button color="primary" size="medium">
            Regular Size
          </Button>
          <Button color="primary" size="large">
            Large Size
          </Button>
          <Button color="primary" size="xLarge">
            ExtraLarge Size
          </Button>
        </p>
        <p>
          <Button color="primary" size="small" variant="outlined">
            Small Size
          </Button>
          <Button color="primary" size="medium" variant="outlined">
            Regular Size
          </Button>
          <Button color="primary" size="large" variant="outlined">
            Large Size
          </Button>
          <Button color="primary" size="xLarge" variant="outlined">
            ExtraLarge Size
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" size="small">Small Size</Button>
    <Button color="primary" size="medium">Regular Size</Button>
    <Button color="primary" size="large">Large Size</Button>
    <Button color="primary" size="xLarge">ExtraLarge Size</Button>
    <Button color="primary" variant="outlined" size="small">Primary</Button>
    <Button color="primary" variant="outlined" size="medium">Primary</Button>
    <Button color="primary" variant="outlined" size="large">Primary</Button>
    <Button color="primary" variant="outlined" size="xLarge">Primary</Button>
    `
  },
  {
    title: 'Sizes (<a>)',
    prop: 'size',
    description: 'sm, md, lg & xl',
    render: (
      <>
        <p>
          <Button color="primary" size="small" href="#">
            Small Size
          </Button>
          <Button color="primary" size="medium" href="#">
            Regular Size
          </Button>
          <Button color="primary" size="large" href="#">
            Large Size
          </Button>
          <Button color="primary" size="xLarge" href="#">
            ExtraLarge Size
          </Button>
        </p>
        <br />
        <p>
          <Button color="primary" size="small" variant="outlined" href="#">
            Small Size
          </Button>
          <Button color="primary" size="medium" variant="outlined" href="#">
            Regular Size
          </Button>
          <Button color="primary" size="large" variant="outlined" href="#">
            Large Size
          </Button>
          <Button color="primary" size="xLarge" variant="outlined" href="#">
            ExtraLarge Size
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" size="small" href="#">Small Size</Button>
    <Button color="primary" size="medium" href="#">Regular Size</Button>
    <Button color="primary" size="large" href="#">Large Size</Button>
    <Button color="primary" size="xLarge" href="#">ExtraLarge Size</Button>
    <Button color="primary" variant="outlined" size="small" href="#">Primary</Button>
    <Button color="primary" variant="outlined" size="medium" href="#">Primary</Button>
    <Button color="primary" variant="outlined" size="large" href="#">Primary</Button>
    <Button color="primary" variant="outlined" size="xLarge" href="#">Primary</Button>
    `
  },
  {
    title: 'Button with Loading Text (<button>)',
    prop: 'isLoading',
    description: 'true',
    render: (
      <>
        <p>
          <Button color="primary" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="info" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="success" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="warning" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="danger" loadingText="Creating" isLoading>
            Create
          </Button>
        </p>
        <p>
          <Button color="primary" loadingText="Creating">
            Create
          </Button>
          <Button color="info" loadingText="Creating">
            Create
          </Button>
          <Button color="success" loadingText="Creating">
            Create
          </Button>
          <Button color="warning" loadingText="Creating">
            Create
          </Button>
          <Button color="danger" loadingText="Creating">
            Create
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="info" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="success" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="warning" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="danger" loadingText="Creating" isLoading>
      Create
    </Button>
    `
  },
  {
    title: 'Button with Loading Text (<a>)',
    prop: 'isLoading',
    description: 'true',
    render: (
      <>
        <p>
          <Button color="primary" href="#" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="info" href="#" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="success" href="#" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="warning" href="#" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="danger" href="#" loadingText="Creating" isLoading>
            Create
          </Button>
        </p>
        <br />
        <p>
          <Button color="primary" href="#" loadingText="Creating">
            Create
          </Button>
          <Button color="info" href="#" loadingText="Creating">
            Create
          </Button>
          <Button color="success" href="#" loadingText="Creating">
            Create
          </Button>
          <Button color="warning" href="#" loadingText="Creating">
            Create
          </Button>
          <Button color="danger" href="#" loadingText="Creating">
            Create
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" href="#" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="info" href="#" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="success" href="#" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="warning" href="#" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="danger" href="#" loadingText="Creating" isLoading>
      Create
    </Button>
    `
  }
]
