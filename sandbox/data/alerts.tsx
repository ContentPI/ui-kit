import React from 'react'

import Alert from '../../src/components/Alert'
import { CodeBlock } from './types'

export const alerts: CodeBlock[] = [
  {
    title: 'Alert',
    description: 'Primary Alert',
    render: (
      <>
        <Alert color="primary">Alert</Alert>
        <Alert color="primary" alignment="center">
          <>
            <a href="#">Alert</a> with Center Alignment
          </>
        </Alert>
        <Alert color="primary" alignment="right">
          Alert with Right Alignment
        </Alert>
        <Alert color="primary" shape="regular">
          Alert with Regular Shape
        </Alert>
        <Alert color="primary" shape="round">
          Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="primary">Alert</Alert>
    <Alert color="primary" alignment="center">
      Alert with Center Alignment
    </Alert>
    <Alert color="primary" alignment="right">
      Alert with Right Alignment
    </Alert>
    <Alert color="primary" shape="regular">
      Alert with Regular Shape
    </Alert>
    <Alert color="primary" shape="round">
      Alert with Round Shape
    </Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Secondary Alert',
    render: (
      <>
        <Alert color="secondary">Alert</Alert>
        <Alert color="secondary" alignment="center">
          <>
            <a href="#">Alert</a> with Center Alignment
          </>
        </Alert>
        <Alert color="secondary" alignment="right">
          Alert with Right Alignment
        </Alert>
        <Alert color="secondary" shape="regular">
          Alert with Regular Shape
        </Alert>
        <Alert color="secondary" shape="round">
          Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="secondary">Alert</Alert>
    <Alert color="secondary" alignment="center">
      Alert with Center Alignment
    </Alert>
    <Alert color="secondary" alignment="right">
      Alert with Right Alignment
    </Alert>
    <Alert color="secondary" shape="regular">
      Alert with Regular Shape
    </Alert>
    <Alert color="secondary" shape="round">
      Alert with Round Shape
    </Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Info Alert',
    render: (
      <>
        <Alert color="info">Alert</Alert>
        <Alert color="info" alignment="center">
          <>
            <a href="#">Alert</a> with Center Alignment
          </>
        </Alert>
        <Alert color="info" alignment="right">
          Alert with Right Alignment
        </Alert>
        <Alert color="info" shape="regular">
          Alert with Regular Shape
        </Alert>
        <Alert color="info" shape="round">
          Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="info">Alert</Alert>
    <Alert color="info" alignment="center">
      Alert with Center Alignment
    </Alert>
    <Alert color="info" alignment="right">
      Alert with Right Alignment
    </Alert>
    <Alert color="info" shape="regular">
      Alert with Regular Shape
    </Alert>
    <Alert color="info" shape="round">
      Alert with Round Shape
    </Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Success Alert',
    render: (
      <>
        <Alert color="success">Alert</Alert>
        <Alert color="success" alignment="center">
          <>
            <a href="#">Alert</a> with Center Alignment
          </>
        </Alert>
        <Alert color="success" alignment="right">
          Alert with Right Alignment
        </Alert>
        <Alert color="success" shape="regular">
          Alert with Regular Shape
        </Alert>
        <Alert color="success" shape="round">
          Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="success">Alert</Alert>
    <Alert color="success" alignment="center">
      Alert with Center Alignment
    </Alert>
    <Alert color="success" alignment="right">
      Alert with Right Alignment
    </Alert>
    <Alert color="success" shape="regular">
      Alert with Regular Shape
    </Alert>
    <Alert color="success" shape="round">
      Alert with Round Shape
    </Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Warning Alert',
    render: (
      <>
        <Alert color="warning">Alert</Alert>
        <Alert color="warning" alignment="center">
          <>
            <a href="#">Alert</a> with Center Alignment
          </>
        </Alert>
        <Alert color="warning" alignment="right">
          Alert with Right Alignment
        </Alert>
        <Alert color="warning" shape="regular">
          Alert with Regular Shape
        </Alert>
        <Alert color="warning" shape="round">
          Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="warning">Alert</Alert>
    <Alert color="warning" alignment="center">
      Alert with Center Alignment
    </Alert>
    <Alert color="warning" alignment="right">
      Alert with Right Alignment
    </Alert>
    <Alert color="warning" shape="regular">
      Alert with Regular Shape
    </Alert>
    <Alert color="warning" shape="round">
      Alert with Round Shape
    </Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Danger Alert',
    render: (
      <>
        <Alert color="danger">Alert</Alert>
        <Alert color="danger" alignment="center">
          <>
            <a href="#">Alert</a> with Center Alignment
          </>
        </Alert>
        <Alert color="danger" alignment="right">
          Alert with Right Alignment
        </Alert>
        <Alert color="danger" shape="regular">
          Alert with Regular Shape
        </Alert>
        <Alert color="danger" shape="round">
          Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="danger">Alert</Alert>
    <Alert color="danger" alignment="center">
      Alert with Center Alignment
    </Alert>
    <Alert color="danger" alignment="right">
      Alert with Right Alignment
    </Alert>
    <Alert color="danger" shape="regular">
      Alert with Regular Shape
    </Alert>
    <Alert color="danger" shape="round">
      Alert with Round Shape
    </Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Light Alert',
    render: (
      <>
        <Alert color="light">Alert</Alert>
        <Alert color="light" alignment="center">
          <>
            <a href="#">Alert</a> with Center Alignment
          </>
        </Alert>
        <Alert color="light" alignment="right">
          Alert with Right Alignment
        </Alert>
        <Alert color="light" shape="regular">
          Alert with Regular Shape
        </Alert>
        <Alert color="light" shape="round">
          Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="light">Alert</Alert>
    <Alert color="light" alignment="center">
      Alert with Center Alignment
    </Alert>
    <Alert color="light" alignment="right">
      Alert with Right Alignment
    </Alert>
    <Alert color="light" shape="regular">
      Alert with Regular Shape
    </Alert>
    <Alert color="light" shape="round">
      Alert with Round Shape
    </Alert>
    `
  },
  {
    title: 'Alert',
    description: 'Dark Alert',
    render: (
      <>
        <Alert color="dark">Alert</Alert>
        <Alert color="dark" alignment="center">
          <>
            <a href="#">Alert</a> with Center Alignment
          </>
        </Alert>
        <Alert color="dark" alignment="right">
          Alert with Right Alignment
        </Alert>
        <Alert color="dark" shape="regular">
          Alert with Regular Shape
        </Alert>
        <Alert color="dark" shape="round">
          Alert with Round Shape
        </Alert>
      </>
    ),
    code: `
    <Alert color="dark">Alert</Alert>
    <Alert color="dark" alignment="center">
      Alert with Center Alignment
    </Alert>
    <Alert color="dark" alignment="right">
      Alert with Right Alignment
    </Alert>
    <Alert color="dark" shape="regular">
      Alert with Regular Shape
    </Alert>
    <Alert color="dark" shape="round">
      Alert with Round Shape
    </Alert>
    `
  }
]
