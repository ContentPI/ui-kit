import { ValueOf } from './global'

export const Color = {
  danger: 'danger',
  dark: 'dark',
  info: 'info',
  light: 'light',
  link: 'link',
  primary: 'primary',
  secondary: 'secondary',
  success: 'success',
  warning: 'warning'
} as const

export type Color = ValueOf<typeof Color>

export const Colors = Object.keys(Color)
