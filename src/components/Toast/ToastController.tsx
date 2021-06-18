import React, { FC, useState, useEffect } from 'react'
import { Transition } from 'react-transition-group'

import { NOOP } from './utils'
import type { ToastProps } from './ToastElement'

import usePrevious from './usePrevious'

const defaultAutoDismissTimeout = 5000

const TimerType = {
  clear: NOOP,
  pause: NOOP,
  resume: NOOP
}

function Timer(callback: any, delay: number) {
  let timerId: any
  let start = delay
  let remaining = delay

  const timer = {
    clear: () => {
      clearTimeout(timerId)
    },
    pause: () => {
      clearTimeout(timerId)
      remaining -= Date.now() - start
    },
    resume: () => {
      start = Date.now()
      clearTimeout(timerId)
      timerId = setTimeout(callback, remaining)
    }
  }

  timer.resume()

  return timer
}

type Props = {
  autoDismiss?: boolean
  autoDismissTimeout?: number
  onDismiss?: any
  component?: any
}

const ToastController: FC<Props> = ({
  autoDismiss,
  autoDismissTimeout,
  onDismiss,
  component: Toast,
  ...props
}) => {
  const [isRunning, setIsRunning] = useState(autoDismiss)
  let timeout: any

  const prevProps: any = usePrevious({ autoDismiss })

  const startTimer = () => {
    if (!autoDismiss) {
      return
    }

    setIsRunning(true)

    timeout = new Timer(onDismiss, autoDismissTimeout)
  }

  const clearTimer = () => {
    if (timeout) {
      timeout.clear()
    }
  }

  const onMouseEnter = () => {
    setIsRunning(false)

    if (timeout) {
      timeout.pause()
    }
  }

  const onMouseLeave = () => {
    setIsRunning(true)

    if (timeout) {
      timeout.resume()
    }
  }

  useEffect(() => {
    startTimer()

    if (prevProps.autoDismiss !== autoDismiss) {
      const startOrClear = autoDismiss ? startTimer : clearTimer

      startOrClear()
    }

    return () => {
      clearTimer()
    }
  }, [autoDismiss])

  const handleMouseEnter = autoDismiss ? onMouseEnter : NOOP
  const handleMouseLeave = autoDismiss ? onMouseLeave : NOOP

  return (
    <Toast
      autoDismiss={autoDismiss}
      autoDismissTimeout={autoDismissTimeout}
      isRunning={isRunning}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  )
}

export default ToastController
