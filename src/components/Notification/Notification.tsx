// Dependencies
import React, { FC, useEffect } from 'react'
import { ToastProvider, useToasts, AppearanceTypes, Placement } from 'react-toast-notifications'

// Custom Notification
import CustomNotification from './CustomNotification'

type Props = {
  id: number
  message: string
  type: AppearanceTypes
  position?: Placement
  duration?: number
}

const NotificationWrapper: FC<Props> = ({ id, message, type }) => {
  const { addToast } = useToasts()

  useEffect(() => {
    console.log('ID fron UI-KIT ===', id)
    addToast(message, { appearance: type })
  }, [id])

  return null
}

const Notification: FC<Props> = ({
  id,
  message,
  type,
  position = 'top-right',
  duration = 5000
}) => {
  return (
    <ToastProvider
      components={{ Toast: CustomNotification }}
      autoDismiss
      placement={position}
      autoDismissTimeout={duration}
    >
      <NotificationWrapper id={id} message={message} type={type} />
    </ToastProvider>
  )
}

export default Notification
