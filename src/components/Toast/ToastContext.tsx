import React, { FC, createContext, useState, useEffect, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Toast, { IProps } from './Toast'

type Context = {
  toasts: ReactElement[]
  createToast: any
  position: string
}

type ProviderProps = {
  children: ReactElement
  maxToasts?: number
  duration?: number | null
  position?: string
}

export const ToastContext = createContext<Context>({
  toasts: [],
  position: '',
  createToast: () => null
})

const ToastProvider: FC<ProviderProps> = ({
  children,
  maxToasts = 10,
  duration = 5000,
  position = 'bottom right'
}) => {
  const [toasts, setToasts] = useState<any>([])
  const [queue, setQueue] = useState<any>([])

  const popToast = (returnToasts = false) => {
    const newToasts = [...toasts]
    newToasts.pop()

    if (returnToasts) {
      return newToasts
    } else {
      setToasts(newToasts)
    }
  }

  const handleClose = () => {
    popToast()
  }

  useEffect(() => {
    if (queue.length > 0) {
      const newToasts: any = popToast(true)
      const mergedToasts = [...newToasts, queue[0]]

      queue.pop()

      setToasts(mergedToasts)
      setQueue(queue)
    }
  }, [queue])

  useEffect(() => {
    let timer: any = null

    if (duration && duration > 0 && toasts.length > 0) {
      timer = setInterval(() => {
        handleClose()
      }, duration)
    } else {
      clearTimeout(timer)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [toasts, duration])

  const createToast = (props: IProps) => {
    const toaskKey = uuidv4()
    props.content += toaskKey

    const newToasts = [<Toast key={toaskKey} {...props} />, ...toasts]

    if (newToasts.length > maxToasts) {
      const newQueue = [<Toast key={toaskKey} {...props} />, ...queue]
      setQueue(newQueue)
    } else {
      setToasts(newToasts)
    }
  }

  const context = {
    createToast,
    toasts,
    position
  }

  return <ToastContext.Provider value={context}>{children}</ToastContext.Provider>
}

export default ToastProvider
