import React, { FC, useContext, createContext, useState, ReactElement } from 'react'
import { createPortal } from 'react-dom'
import { Transition, TransitionGroup } from 'react-transition-group'

import ToastController from './ToastController'
import { ToastContainer } from './ToastContainer'
import { DefaultToast } from './ToastElement'

import { generateUEID, NOOP } from './utils'

import type { AddFn, UpdateFn, RemoveFn, ToastsType, Options, Placement, Id } from './types'

import useSetState from '../useSetState'

const defaultComponents = {
  Toast: DefaultToast,
  ToastContainer
}

const ToastContext = createContext({})
const { Consumer, Provider } = ToastContext

const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

type Components = {
  Toast: FC<any>
  ToastContainer: FC<any>
}

type Props = {
  autoDismissTimeout: number
  autoDismiss: boolean
  children: ReactElement
  components: Components
  placement: Placement
  portalTargetSelector?: string
  transitionDuration: number
}

type State = { toasts: ToastsType }

type Context = {
  add: AddFn
  remove: RemoveFn
  removeAll: () => void
  update: UpdateFn
  toasts: Array<Object>
}

const ToastProvider: FC<Props> = ({
  autoDismiss = false,
  autoDismissTimeout = 5000,
  components = defaultComponents,
  placement = 'top-right',
  portalTargetSelector,
  transitionDuration = 220,
  children
}) => {
  const [state, setState] = useSetState({ toasts: [] })

  const { Toast, ToastContainer } = { ...defaultComponents, ...components }
  const toasts = Object.freeze(state.toasts)

  const hasToasts = Boolean(toasts.length)

  const add = (content: Node, options: any = {}, cb: any = NOOP) => {
    const id = options.id ? options.id : generateUEID()
    const callback = () => cb(id)

    if (has(id)) {
      return
    }

    setState((prevState: any) => {
      const newToast = { content, id, ...options }
      const toasts = [...state.toasts, newToast]

      return { toasts }
    }, callback)

    // consumer may want to do something with the generated ID (and not use the callback)
    return id
  }

  const has = (id: string) => {
    if (!state.toasts.length) {
      return false
    }

    return Boolean(state.toasts.filter((t: any) => t.id === id).length)
  }

  const remove = (id: Id, cb: any = NOOP) => {
    const callback = () => cb(id)

    if (!has(id)) {
      return
    }

    const newToasts = state.toasts.filter((t: any) => t.id !== id)

    setState((prevState: any) => {
      const toasts = prevState.toasts.filter((t: any) => t.id !== id)
      return { toasts }
    }, callback)
  }

  const onDismiss = (id: Id, cb: any = NOOP) => {
    return () => {
      cb(id)
      remove(id)
    }
  }

  const removeAll = () => {
    if (!state.toasts.length) {
      return
    }

    state.toasts.forEach((t: any) => remove(t.id))
  }

  const update = (id: Id, options: any = {}, cb: any = NOOP) => {
    const callback = () => cb(id)

    if (!has(id)) {
      return
    }

    // update the toast stack
    setState((prevState: any) => {
      const old = prevState.toasts
      const i = old.findIndex((t: any) => t.id === id)
      const updatedToast = { ...old[i], ...options }
      const toasts = [...old.slice(0, i), updatedToast, ...old.slice(i + 1)]

      return { toasts }
    }, callback)
  }

  return (
    <Provider value={{ add, remove, removeAll, update, toasts }}>
      {children}

      <ToastContainer placement={placement} hasToasts={hasToasts} />
    </Provider>
  )
}
