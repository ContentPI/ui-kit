type ValueOf<T> = T[keyof T]

export const Color = {
  danger: 'danger',
  info: 'info',
  primary: 'primary',
  success: 'success',
  warning: 'warning'
} as const
export type Color = ValueOf<typeof Color>

export const StatusColor = {
  danger: 'danger',
  info: 'info',
  primary: 'primary',
  success: 'success',
  warning: 'warning'
} as const
export type StatusColor = ValueOf<typeof StatusColor>
export const StatusColors = Object.keys(Color)

export const TextColors = {
  primary: 'primary',
  secondary: 'secondary',
  disabled: 'disabled',
  hint: 'hint'
} as const
export type TextColors = ValueOf<typeof TextColors>
