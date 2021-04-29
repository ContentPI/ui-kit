import { ValueOf } from '@types'

export const Size = {
  xSmall: 'xs',
  small: 'sm',
  medium: 'md',
  large: 'lg',
  xLarge: 'xl'
} as const

export const ButtonSize = {
  ...Size
} as const

export type Size = ValueOf<typeof Size>
export const Sizes = Object.keys(Size)

export type ButtonSize = ValueOf<typeof ButtonSize>
export const ButtonSizes = Object.keys(Size)
