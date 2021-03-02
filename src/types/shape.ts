import { ValueOf } from './global'

export const Shape = {
  regular: 'regular',
  square: 'square',
  round: 'round'
} as const

export type Shape = ValueOf<typeof Shape>
