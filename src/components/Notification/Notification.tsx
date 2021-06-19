// Dependencies
import React, { FC, useEffect } from 'react'
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
}

const NotificationWrapper: FC<Props> = ({ id, message, type }) => {
  const { addToast } = useToasts()
  const prevProps: any = usePrevious({ id })

  useEffect(() => {
    if (prevProps && prevProps.id !== id) {
      addToast(message, { appearance: type })
    }
  }, [id, prevProps])

  return null
}

const Notification: FC<Props> = ({ id, message, type, position = 'top-right', duration = 0 }) => {
  return (
    <ToastProvider
      components={{ Toast: CustomNotification }}
      autoDismiss={duration > 0}
      placement={position}
      autoDismissTimeout={duration}
    >
      <NotificationWrapper id={id} message={message} type={type} />
    </ToastProvider>
  )
}

export default Notification
