import { ValueOf } from './global'

export const Color = {
  danger: 'danger',
  info: 'info',
  link: 'link',
  primary: 'primary',
  success: 'success',
  warning: 'warning'
} as const

export type Color = ValueOf<typeof Color>

export const Colors = Object.keys(Color)
