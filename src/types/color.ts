export const Color = {
  danger: 'danger',
  info: 'info',
  link: 'link',
  primary: 'primary',
  success: 'success',
  warning: 'warning'
} as const

type ValueOf<T> = T[keyof T]

export type Color = ValueOf<typeof Color>

export const Colors = Object.keys(Color)
