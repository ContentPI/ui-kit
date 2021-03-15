const mediaQueries = ['xs', 'sm', 'md', 'lg', 'xl'] as const
export type MediaQueries = typeof mediaQueries[number]

export const units = ['px', 'rem'] as const
export type Units = typeof units[number]

export interface IKeys {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export default interface IBreakpoints {
  keys: IKeys
  unit: Units
  step: number
  up: (key: MediaQueries) => string
  down: (key: MediaQueries) => string
  between: (start: MediaQueries, end: MediaQueries) => string
  only: (key: MediaQueries) => string
  width: (width: number) => string
}
