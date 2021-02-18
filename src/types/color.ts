import { ValueOf } from './global'

export const Color = {
  Danger: 'danger',
  Dark: 'dark',
  Info: 'info',
  Light: 'light',
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Warning: 'warning'
} as const

export type Color = ValueOf<typeof Color>
