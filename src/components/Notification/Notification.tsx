// Dependencies
import React, { FC, useEffect } from 'react'
import { ToastProvider, useToasts, AppearanceTypes, Placement } from 'react-toast-notifications'

// Custom Notification
import CustomNotification from './CustomNotification'

type Props = {
  message: string
  type: AppearanceTypes
  position?: Placement
  duration?: number
}

const NotificationWrapper: FC<Props> = ({ message, type }) => {
  const { addToast } = useToasts()

  useEffect(() => {
    addToast(message, { appearance: type })
  }, [])

  return null
}

const Notification: FC<Props> = ({ message, type, position = 'top-right', duration = 5000 }) => {
  return (
    <ToastProvider
      components={{ Toast: CustomNotification }}
      autoDismiss
      placement={position}
      autoDismissTimeout={duration}
    >
      <NotificationWrapper message={message} type={type} />
    </ToastProvider>
  )
}

export default Notification
