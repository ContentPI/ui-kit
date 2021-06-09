import { ValueOf } from '../types'

export const Shape = {
  regular: 'regular',
  square: 'square',
  round: 'round'
} as const

export type Shape = ValueOf<typeof Shape>
export const Shapes = Object.keys(Shape)
