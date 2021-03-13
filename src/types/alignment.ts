import { ValueOf } from './global'

export const Alignment = {
  left: 'left',
  right: 'right',
  center: 'center'
} as const

export type Alignment = ValueOf<typeof Alignment>
