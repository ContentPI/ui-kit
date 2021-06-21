// Dependencies
import React, { FC, useEffect, useState } from 'react'
import { ToastProvider, useToasts, AppearanceTypes, Placement } from 'react-toast-notifications'

// Custom Notification
import CustomNotification from './CustomNotification'

// Hooks
import usePrevious from '../../usePrevious'

type Props = {
  id?: number
  message: string
  type: AppearanceTypes
  position?: Placement
  duration?: number
  maxNotifications?: number
  setId?: any
}

const NotificationWrapper: FC<Props> = ({ id, message, type, maxNotifications = 5, setId }) => {
  const { addToast } = useToasts()
  const prevProps: any = usePrevious({ id })
  const notifications = document.querySelectorAll('.notification') || []

  useEffect(() => {
    if (!prevProps || (prevProps.id !== id && notifications.length < maxNotifications)) {
      console.log('ENTRA', id)
      addToast(message, { appearance: type })
      setId(Math.random())
      console.log('GENERATING NEW ID')
    }
  }, [id, prevProps])

  return null
}

const Notification: FC<Props> = ({
  message,
  type,
  position = 'top-right',
  duration = 0,
  maxNotifications
}) => {
  const [id, setId] = useState(Math.random())

  console.log('id==', id)
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
        setId={setId}
      />
    </ToastProvider>
  )
}

export default Notification
