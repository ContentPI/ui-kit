// Dependencies
import React, { FC, createContext, ReactElement } from 'react'
import { ToastProvider, useToasts, AddToast } from 'react-toast-notifications'

interface INotificationContext {
  addNotification: AddToast
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
  addNotification: () => null
})

const NotificationProvider: FC<Props> = ({
  children,
  position = 'top-right',
  duration = 5000,
  keep = false
}) => {
  const { addToast: addNotification } = useToasts()

  const context = {
    addNotification
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
