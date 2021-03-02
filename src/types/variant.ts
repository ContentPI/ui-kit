import { ValueOf } from './global'

export const Variant = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text'
} as const

export type Variant = ValueOf<typeof Variant>
