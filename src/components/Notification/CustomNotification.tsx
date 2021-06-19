import React, { FC, ReactNode } from 'react'
import { AppearanceTypes, Placement, TransitionState } from 'react-toast-notifications'

type Props = {
  appearance: AppearanceTypes
  autoDismiss: boolean | number
  autoDismissTimeout: number
  children: ReactNode
  isRunning: boolean
  onDismiss: (id?: string) => void
  onMouseEnter: () => void
  onMouseLeave: () => void
  placement: Placement
  transitionDuration: number
  transitionState: TransitionState
}
const CustomNotification: FC<Props> = ({ appearance, children }) => (
  <div style={{ background: appearance === 'error' ? 'red' : 'green' }}>{children}</div>
)

export default CustomNotification
