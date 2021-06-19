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
  const notification = document.querySelector('.notification')

  useEffect(() => {
    if (!notification) {
      addToast(message, { appearance: type })
    }
  }, [notification])

  return null
}

const Notification: FC<Props> = ({ message, type }) => {
  return (
    <ToastProvider components={{ Toast: CustomNotification }} autoDismiss>
      <NotificationWrapper message={message} type={type} />
    </ToastProvider>
  )
}

export default Notification
