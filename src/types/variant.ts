type ValueOf<T> = T[keyof T]

export const Variant = {
  contained: 'contained',
  outlined: 'outlined'
} as const
export type Variant = ValueOf<typeof Variant>

export const ButtonVariants = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text'
} as const

export type ButtonVariants = ValueOf<typeof ButtonVariants>
