type ValueOf<T> = T[keyof T]

export const Variant = {
  contained: 'contained',
  outlined: 'outlined'
} as const
export type Variant = ValueOf<typeof Variant>

export const ButtonVariant = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text'
} as const

export type ButtonVariant = ValueOf<typeof ButtonVariant>
export const ButtonVariants = Object.keys(ButtonVariant)
