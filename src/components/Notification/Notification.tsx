// Dependencies
import React, { FC, useEffect } from 'react'
import { ToastProvider, useToasts, AppearanceTypes } from 'react-toast-notifications'

type Props = {
  message: string
  type: AppearanceTypes
}

const NotificationWrapper: FC<Props> = ({ message, type }) => {
  const { addToast } = useToasts()

  useEffect(() => {
    addToast(message, { appearance: type })
  }, [])

  return null
}

const Notification: FC<Props> = ({ message, type }) => (
  <ToastProvider>
    <NotificationWrapper message={message} type={type} />
  </ToastProvider>
)

export default Notification
