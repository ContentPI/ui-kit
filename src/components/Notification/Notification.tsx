// Dependencies
import React, { FC, useEffect } from 'react'
import { ToastProvider, useToasts, AppearanceTypes, Placement } from 'react-toast-notifications'

// Custom Notification
import CustomNotification from './CustomNotification'

type Props = {
  message: string
  type: AppearanceTypes
  position?: Placement
}

const NotificationWrapper: FC<Props> = ({ message, type }) => {
  const { addToast } = useToasts()
  const notification = document.querySelector('.notification')

  useEffect(() => {
    if (!notification) {
      addToast(message, { appearance: type })
    }
  }, [notification])

  return null
}

const Notification: FC<Props> = ({ message, type, position = 'top-right' }) => {
  return (
    <ToastProvider components={{ Toast: CustomNotification }} autoDismiss placement={position}>
      <NotificationWrapper message={message} type={type} />
    </ToastProvider>
  )
}

export default Notification
