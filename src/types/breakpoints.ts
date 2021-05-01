const mediaQueries = ['xSmall', 'small', 'medium', 'large', 'xLarge'] as const

export type MediaQueries = typeof mediaQueries[number]

export const sizeUnits = ['px', 'rem'] as const
export type SizeUnits = typeof sizeUnits[number]

export interface IKeys {
  xSmall: number | string
  small: number | string
  medium: number | string
  large: number | string
  xLarge: number | string
}

export interface IBreakpoints {
  keys: IKeys
  unit: SizeUnits
  step: number | string
  up: (key: MediaQueries) => string
  down: (key: MediaQueries) => string
  between: (start: MediaQueries, end: MediaQueries) => string
  only: (key: MediaQueries) => string
  width: (width: number) => string
}
