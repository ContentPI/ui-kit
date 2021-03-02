import { ValueOf } from './global'

export const Variant = {
  contained: 'contained',
  outlined: 'outlined'
} as const

export type Variant = ValueOf<typeof Variant>
