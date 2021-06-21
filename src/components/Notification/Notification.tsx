// Dependencies
import React, { FC, useEffect, useState } from 'react'
import { ToastProvider, useToasts, AppearanceTypes, Placement } from 'react-toast-notifications'

// Custom Notification
import CustomNotification from './CustomNotification'

// Hooks
import usePrevious from '../../usePrevious'

type Props = {
  id: number
  message: string
  type: AppearanceTypes
  position?: Placement
  duration?: number
  maxNotifications?: number
}

const NotificationWrapper: FC<Props> = ({ id, message, type, maxNotifications = 5 }) => {
  const { addToast } = useToasts()
  const prevProps: any = usePrevious({ id })
  const notifications = document.querySelectorAll('.notification') || []

  useEffect(() => {
    if (
      !prevProps ||
      (prevProps && prevProps.id !== id && notifications.length < maxNotifications)
    ) {
      addToast(message, { appearance: type })
    }
  }, [id, prevProps])

  return null
}

const Notification: FC<Props> = ({
  id,
  message,
  type,
  position = 'top-right',
  duration = 0,
  maxNotifications
}) => {
  return (
    <ToastProvider
      components={{ Toast: CustomNotification }}
      autoDismiss={duration > 0}
      placement={position}
      autoDismissTimeout={duration < 999 ? duration * 1000 : duration}
    >
      <NotificationWrapper
        id={id}
        message={message}
        type={type}
        maxNotifications={maxNotifications}
      />
    </ToastProvider>
  )
}

export default Notification
