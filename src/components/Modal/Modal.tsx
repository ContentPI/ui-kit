import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const uuid = () => {
  const id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16
    const v = c === 'x' ? r : (r && 0x3) || 0x8
    return v.toString(16)
  })

  return id.substring(3, 10)
}

const generateWrapper = (id: string) => {
  const wrapper = document.createElement('div')
  wrapper.id = id

  wrapper.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  wrapper.style.position = 'absolute'
  wrapper.style.zIndex = '1'
  wrapper.style.left = '0'
  wrapper.style.right = '0'
  wrapper.style.top = '0'
  wrapper.style.bottom = '0'

  return wrapper
}

const htmlBody = document.getElementsByTagName('body')[0]

interface IModalProps {
  open?: boolean
}

const Modal: React.FC<IModalProps> = ({ open = false, children }) => {
  const [modalId] = useState(uuid())
  const wrapper = generateWrapper(modalId)

  useEffect(() => {
    if (open) {
      htmlBody.style.overflow = 'hidden'
      htmlBody.appendChild(wrapper)
    }

    return () => {
      const findNodeR = document.getElementById(modalId)

      htmlBody.removeAttribute('style')
      if (findNodeR) htmlBody.removeChild(findNodeR)
    }
  }, [open])

  return open ? createPortal(children, wrapper) : null
}

export default Modal
