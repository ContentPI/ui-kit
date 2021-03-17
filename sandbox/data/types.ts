import { ReactElement } from 'react'

export interface CodeBlock {
  title: string
  prop?: string
  description: string
  render: ReactElement
  code: string
}
