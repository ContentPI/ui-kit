import { ValueOf } from '../types'

export const Size = {
  xSmall: 'xSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  xLarge: 'xLarge'
} as const

export const ButtonSize = {
  ...Size
} as const

export type Size = ValueOf<typeof Size>
export const Sizes = Object.keys(Size)

export type ButtonSize = ValueOf<typeof ButtonSize>
export const ButtonSizes = Object.keys(Size)
