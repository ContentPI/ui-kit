export interface IShape {
  unitBase: string
}

type ValueOf<T> = T[keyof T]

export const Shapes = {
  unitBase: 'unitBase'
} as const
export type Shapes = ValueOf<typeof Shapes>
