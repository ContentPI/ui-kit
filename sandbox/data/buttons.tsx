import React, { ReactElement } from 'react'

// Atoms
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
    description: 'primary, secondary, info, success, warning, danger, dark, light',
    render: (
      <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
        <Button color="dark">Dark</Button>
        <Button color="light">Light</Button>
        <Button color="link">Link</Button>
      </>
    ),
    code: `
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="info">Info</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="dark">Dark</Button>
    <Button color="light">Light</Button>
    <Button color="link">Link</Button>
    `
  },
  {
    title: 'Colors (<a>)',
    prop: 'color',
    description: 'primary, secondary, info, success, warning, danger, dark, light',
    render: (
      <>
        <Button color="primary" href="#">
          Primary
        </Button>
        <Button color="secondary" href="#">
          Secondary
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
        <Button color="dark" href="#">
          Dark
        </Button>
        <Button color="light" href="#">
          Light
        </Button>
        <Button color="link" href="#">
          Link
        </Button>
      </>
    ),
    code: `
    <Button color="primary" href="#">Primary</Button>
    <Button color="secondary" href="#">Secondary</Button>
    <Button color="info" href="#">Info</Button>
    <Button color="success" href="#">Success</Button>
    <Button color="warning" href="#">Warning</Button>
    <Button color="danger" href="#">Danger</Button>
    <Button color="dark" href="#">Dark</Button>
    <Button color="light" href="#">Light</Button>
    <Button color="link" href="#">Link</Button>
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
        <Button color="secondary" disabled>
          Secondary
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
        <Button color="dark" disabled>
          Dark
        </Button>
        <Button color="light" disabled>
          Light
        </Button>
      </>
    ),
    code: `
    <Button color="primary" disabled>
      Disabled
    </Button>
    <Button color="secondary" disabled>
      Secondary
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
    <Button color="dark" disabled>
      Dark
    </Button>
    <Button color="light" disabled>
      Light
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
        <Button color="secondary" disabled href="#">
          Secondary
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
        <Button color="dark" disabled href="#">
          Dark
        </Button>
        <Button color="light" disabled href="#">
          Light
        </Button>
      </>
    ),
    code: `
    <Button color="primary" href="#" disabled>
      Disabled
    </Button>
    <Button color="secondary" href="#" disabled>
      Secondary
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
    <Button color="dark" href="#" disabled>
      Dark
    </Button>
    <Button color="light" href="#" disabled>
      Light
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
        <Button color="secondary" variant="outlined">
          Secondary
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
        <Button color="dark" variant="outlined">
          Dark
        </Button>
        <Button color="light" variant="outlined">
          Light
        </Button>
      </>
    ),
    code: `
    <Button color="primary" variant="outlined">Primary</Button>
    <Button color="secondary" variant="outlined">Secondary</Button>
    <Button color="info" variant="outlined">Info</Button>
    <Button color="success" variant="outlined">Success</Button>
    <Button color="warning" variant="outlined">Warning</Button>
    <Button color="danger" variant="outlined">Danger</Button>
    <Button color="dark" variant="outlined">Dark</Button>
    <Button color="light" variant="outlined">Light</Button>
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
        <Button color="secondary" variant="outlined" href="#">
          Secondary
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
        <Button color="dark" variant="outlined" href="#">
          Dark
        </Button>
        <Button color="light" variant="outlined" href="#">
          Light
        </Button>
      </>
    ),
    code: `
    <Button color="primary" variant="outlined" href="#">Primary</Button>
    <Button color="secondary" variant="outlined" href="#">Secondary</Button>
    <Button color="info" variant="outlined" href="#">Info</Button>
    <Button color="success" variant="outlined" href="#">Success</Button>
    <Button color="warning" variant="outlined" href="#">Warning</Button>
    <Button color="danger" variant="outlined" href="#">Danger</Button>
    <Button color="dark" variant="outlined" href="#">Dark</Button>
    <Button color="light" variant="outlined" href="#">Light</Button>
    `
  },
  {
    title: 'Sizes (<button>)',
    prop: 'size',
    description: 'sm, md, lg & xl',
    render: (
      <>
        <p>
          <Button color="primary" size="sm">
            Small Size
          </Button>
          <Button color="primary" size="md">
            Regular Size
          </Button>
          <Button color="primary" size="lg">
            Large Size
          </Button>
          <Button color="primary" size="xl">
            ExtraLarge Size
          </Button>
        </p>
        <p>
          <Button color="primary" size="sm" variant="outlined">
            Small Size
          </Button>
          <Button color="primary" size="md" variant="outlined">
            Regular Size
          </Button>
          <Button color="primary" size="lg" variant="outlined">
            Large Size
          </Button>
          <Button color="primary" size="xl" variant="outlined">
            ExtraLarge Size
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" size="sm">Small Size</Button>
    <Button color="primary" size="md">Regular Size</Button>
    <Button color="primary" size="lg">Large Size</Button>
    <Button color="primary" size="xl">ExtraLarge Size</Button>
    <Button color="primary" variant="outlined" size="sm">Primary</Button>
    <Button color="primary" variant="outlined" size="md">Primary</Button>
    <Button color="primary" variant="outlined" size="lg">Primary</Button>
    <Button color="primary" variant="outlined" size="xl">Primary</Button>
    `
  },
  {
    title: 'Sizes (<a>)',
    prop: 'size',
    description: 'sm, md, lg & xl',
    render: (
      <>
        <p>
          <Button color="primary" size="sm" href="#">
            Small Size
          </Button>
          <Button color="primary" size="md" href="#">
            Regular Size
          </Button>
          <Button color="primary" size="lg" href="#">
            Large Size
          </Button>
          <Button color="primary" size="xl" href="#">
            ExtraLarge Size
          </Button>
        </p>
        <br />
        <p>
          <Button color="primary" size="sm" variant="outlined" href="#">
            Small Size
          </Button>
          <Button color="primary" size="md" variant="outlined" href="#">
            Regular Size
          </Button>
          <Button color="primary" size="lg" variant="outlined" href="#">
            Large Size
          </Button>
          <Button color="primary" size="xl" variant="outlined" href="#">
            ExtraLarge Size
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" size="sm" href="#">Small Size</Button>
    <Button color="primary" size="md" href="#">Regular Size</Button>
    <Button color="primary" size="lg" href="#">Large Size</Button>
    <Button color="primary" size="xl" href="#">ExtraLarge Size</Button>
    <Button color="primary" variant="outlined" size="sm" href="#">Primary</Button>
    <Button color="primary" variant="outlined" size="md" href="#">Primary</Button>
    <Button color="primary" variant="outlined" size="lg" href="#">Primary</Button>
    <Button color="primary" variant="outlined" size="xl" href="#">Primary</Button>
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
          <Button color="secondary" loadingText="Creating" isLoading>
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
          <Button color="dark" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="light" loadingText="Creating" isLoading>
            Create
          </Button>
        </p>
        <p>
          <Button color="primary" loadingText="Creating">
            Create
          </Button>
          <Button color="secondary" loadingText="Creating">
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
          <Button color="dark" loadingText="Creating">
            Create
          </Button>
          <Button color="light" loadingText="Creating">
            Create
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="secondary" loadingText="Creating" isLoading>
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
    <Button color="dark" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="light" loadingText="Creating" isLoading>
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
          <Button color="secondary" href="#" loadingText="Creating" isLoading>
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
          <Button color="dark" href="#" loadingText="Creating" isLoading>
            Create
          </Button>
          <Button color="light" href="#" loadingText="Creating" isLoading>
            Create
          </Button>
        </p>
        <br />
        <p>
          <Button color="primary" href="#" loadingText="Creating">
            Create
          </Button>
          <Button color="secondary" href="#" loadingText="Creating">
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
          <Button color="dark" href="#" loadingText="Creating">
            Create
          </Button>
          <Button color="light" href="#" loadingText="Creating">
            Create
          </Button>
        </p>
      </>
    ),
    code: `
    <Button color="primary" href="#" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="secondary" href="#" loadingText="Creating" isLoading>
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
    <Button color="dark" href="#" loadingText="Creating" isLoading>
      Create
    </Button>
    <Button color="light" href="#" loadingText="Creating" isLoading>
      Create
    </Button>
    `
  }
]

export default buttons
