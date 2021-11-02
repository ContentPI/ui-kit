import { ValueOf } from '../types'

export const Alignment = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const

export type Alignment = ValueOf<typeof Alignment>
