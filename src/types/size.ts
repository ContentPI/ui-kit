import { ValueOf } from './global'

export const Size = {
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
  xLarge: 'xl'
} as const

export type Size = ValueOf<typeof Size>

export type ButtonSize = Size
