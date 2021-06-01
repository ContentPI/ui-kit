import React, { FC, ReactElement } from 'react'
import styled from 'styled-components'

export interface IProps {
  content: ReactElement | string
  position: string
  duration: number
  color?: string
}

interface DProps {
  id: number | undefined
  onClose: () => void
}

export const Props = {
  content: '',
  color: ''
}

export const initialProps = {
  content: 'Some text here...',
  color: 'primary'
}

export const ToastsBox = styled.div`
  visibility: hidden;
  position: fixed;
  z-index: 1;

  &.show {
    visibility: visible;
    &.bottom {
      bottom: 30px;
    }

    &.top {
      top: 30px;
    }

    &.left {
      left: 20px;
    }

    &.right {
      right: 20px;
    }

    &.center {
      left: 50%;
      margin-left: -125px;
    }
  }
`

const StyledToast = styled.div`
  min-width: 250px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  margin-top: 10px;
`

const Dismiss: FC<DProps> = ({ onClose }) => {
  return <span onClick={onClose}>X</span>
}

const Toast: FC<IProps> = ({ content, color }) => {
  return <StyledToast>{content}</StyledToast>
}

export default Toast
