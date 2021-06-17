import React, { FC, ReactElement, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'

export interface IProps {
  content: ReactElement | string
  position: string
  duration: number
  id: string
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export const ToastsBox = styled.div`
  visibility: hidden;
  position: fixed;
  z-index: 1;
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
`

const StyledToast = styled.div`
  background-color: #eee;
  color: #333;
  border-radius: 2px;
  padding: 16px;
  margin-top: 10px;
  font-size: 14px;
  height: auto;
  box-shadow: rgb(0 0 0 / 18%) 0px 3px 8px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  word-wrap: break-word;

  &.fadeIn {
    animation: ${fadeIn} 1s linear;
  }

  &.fadeOut {
    animation: ${fadeOut} 1s linear;
  }

  &.success {
    background-color: #e3fcef;
    color: #006644;
  }

  &.error {
    background-color: #ffebe6;
    color: #bf2600;
  }

  &.warning {
    background-color: #fffae6;
    color: #ff8b00;
  }

  &.info {
    background-color: #e0edff;
    color: #505f79;
  }
`

const StyledLeft = styled.div`
  margin-right: 5px;
`
const StyledRight = styled.div`
  img {
    width: 10px;
    opacity: 0.3;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 768px) {
      width: 12px;
    }
  }
`

const Dismiss: FC<DProps> = ({ onClose }) => {
  return <span onClick={onClose}>X</span>
}

const Toast: FC<IProps> = ({ content, color, id }) => {
  console.log('key===', id)
  return (
    <StyledToast className={`fadeIn ${color ?? ''}`}>
      <StyledLeft>{content}</StyledLeft>
      <StyledRight>
        <img alt="Close" src={require('../../icons/close.svg')} />
      </StyledRight>
    </StyledToast>
  )
}

export default Toast
