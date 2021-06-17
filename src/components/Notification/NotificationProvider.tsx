// Dependencies
import React, { FC, createContext, ReactElement } from 'react'
import { ToastProvider, useToasts } from 'react-toast-notifications'

interface INotificationContext {
  useToasts: any
}

type Props = {
  children: ReactElement
  position?:
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'top-left'
    | 'top-center'
    | 'top-right'
  duration?: number
  keep?: boolean
}

// Creating context
export const NotificationContext = createContext<INotificationContext>({
  useToasts: () => null
})

const NotificationProvider: FC<Props> = ({
  children,
  position = 'top-right',
  duration = 5000,
  keep = false
}) => {
  console.log('USE TOASTS FROM UI-KIT', useToasts)
  const context = {
    useToasts
  }

  return (
    <NotificationContext.Provider value={context}>
      <ToastProvider placement={position} autoDismissTimeout={duration} autoDismiss={!keep}>
        {children}
      </ToastProvider>
    </NotificationContext.Provider>
  )
}

export default NotificationProvider
