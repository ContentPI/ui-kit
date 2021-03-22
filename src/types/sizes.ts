type ValueOf<T> = T[keyof T]

export const ButtonSize = {
  giant: 'giant',
  large: 'large',
  medium: 'medium',
  small: 'small',
  tiny: 'tiny'
} as const

export type ButtonSize = ValueOf<typeof ButtonSize>
export const ButtonSizes = Object.keys(ButtonSize)
