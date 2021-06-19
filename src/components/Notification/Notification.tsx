// Dependencies
import React, { FC, useEffect } from 'react'
import { ToastProvider, useToasts, AppearanceTypes } from 'react-toast-notifications'

// Custom Notification
import CustomNotification from './CustomNotification'

type Props = {
  message: string
  type: AppearanceTypes
}

const NotificationWrapper: FC<Props> = ({ message, type }) => {
  const { addToast } = useToasts()

  useEffect(() => {
    addToast(message, { appearance: type })
  })

  return null
}

const Notification: FC<Props> = ({ message, type }) => (
  <ToastProvider components={{ Toast: CustomNotification }}>
    <NotificationWrapper message={message} type={type} />
  </ToastProvider>
)

export default Notification
