import { ValueOf } from '../types'

export const Color = {
  danger: 'danger',
  info: 'info',
  primary: 'primary',
  success: 'success',
  warning: 'warning'
} as const

export type Color = ValueOf<typeof Color>
export const Colors = Object.keys(Color)

export const StatusColor = {
  danger: 'danger',
  info: 'info',
  primary: 'primary',
  success: 'success',
  warning: 'warning'
} as const

export type StatusColor = ValueOf<typeof StatusColor>
export const StatusColors = Object.keys(Color)

export const TextColor = {
  textPrimary: 'textPrimary',
  textSecondary: 'textSecondary',
  textDisabled: 'textDisabled',
  textHint: 'textHint'
} as const
export type TextColor = ValueOf<typeof TextColor>
export const TextColors = Object.keys(TextColor)

export const BackgroundColor = {
  paper: 'paper',
  main: 'main',
  light: 'light',
  dark: 'dark'
} as const
export type BackgroundColor = ValueOf<typeof BackgroundColor>
export const BackgroundColors = Object.keys(BackgroundColor)
