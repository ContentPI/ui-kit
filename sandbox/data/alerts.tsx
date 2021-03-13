import React from 'react'

import Alert from '../../src/components/Alert'
import { CodeBlock } from './types'

export const alerts: CodeBlock[] = [
  {
    title: 'Alert',
    description: 'Primary Alert',
    render: (
      <>
        <Alert color="primary">Primary Alert</Alert>
        <Alert color="primary" alignment="center">
          Primary Alert with Center Alignment
        </Alert>
        <Alert color="primary" alignment="right">
          Primary Alert with Right Alignment
        </Alert>
        <Alert color="primary" shape="regular">
          Primary Alert with Regular Shape
        </Alert>
        <Alert color="primary" shape="round">
          Primary Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="primary">Primary Alert</Alert>
    <Alert color="primary" alignment="center">
      Primary Alert with Center Alignment
    </Alert>
    <Alert color="primary" alignment="right">
      Primary Alert with Right Alignment
    </Alert>
    <Alert color="primary" shape="regular">
      Primary Alert with Regular Shape
    </Alert>
    <Alert color="primary" shape="round">
      Primary Alert with Round Shape
    </Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Secondary Alert',
    render: <Alert color="secondary">This is my alert</Alert>,
    code: `
    <Alert color="secondary">This is my alert</Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Info Alert',
    render: <Alert color="info">This is my alert</Alert>,
    code: `
    <Alert color="info">This is my alert</Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Success Alert',
    render: <Alert color="success">This is my alert</Alert>,
    code: `
    <Alert color="success">This is my alert</Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Warning Alert',
    render: <Alert color="warning">This is my alert</Alert>,
    code: `
    <Alert color="warning">This is my alert</Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Danger Alert',
    render: <Alert color="danger">This is my alert</Alert>,
    code: `
    <Alert color="danger">This is my alert</Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Light Alert',
    render: <Alert color="light">This is my alert</Alert>,
    code: `
    <Alert color="light">This is my alert</Alert>
    `
  }
]
