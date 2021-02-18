import { ValueOf } from './global'

export const Variant = {
  Contained: 'contained',
  Outlined: 'outlined',
  Text: 'text'
} as const

export type Variant = ValueOf<typeof Variant>

export type ButtonVariant = Variant
