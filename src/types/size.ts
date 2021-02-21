import { ValueOf } from './global'

export const Size = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  xLarge: 'xl'
} as const

export type Size = ValueOf<typeof Size>
