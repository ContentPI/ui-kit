import { ValueOf } from '@types'

export interface IShape {
  unitBase: string
}

export const Shapes = {
  unitBase: 'unitBase'
} as const
export type Shapes = ValueOf<typeof Shapes>
