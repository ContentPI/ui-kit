import React, { FC } from 'react'

// Components
import { ToastsBox } from '../Toast'
import useToast from './useToast'

const Toaster: FC = () => {
  const { toasts, position } = useToast()

  return <ToastsBox className={`${position}`}>{toasts}</ToastsBox>
}

export default Toaster
