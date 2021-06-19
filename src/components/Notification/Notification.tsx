// Dependencies
import React, { FC, useEffect, useState } from 'react'
import { ToastProvider, useToasts, AppearanceTypes } from 'react-toast-notifications'

// Custom Notification
import CustomNotification from './CustomNotification'

type Props = {
  message: string
  type: AppearanceTypes
}

const NotificationWrapper: FC<Props> = ({ message, type }) => {
  const { addToast } = useToasts()
  const [executed, setExecuted] = useState(false)

  useEffect(() => {
    if (!executed) {
      addToast(message, { appearance: type })
      setExecuted(true)
    }

    return () => {
      setExecuted(false)
    }
  }, [executed])

  return null
}

const Notification: FC<Props> = ({ message, type }) => (
  <ToastProvider components={{ Toast: CustomNotification }}>
    <NotificationWrapper message={message} type={type} />
  </ToastProvider>
)

export default Notification
