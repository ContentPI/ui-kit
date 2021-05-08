// Dependencies
import React, { FC, ReactElement } from 'react'

interface IProps {
  children: ReactElement
  isTrue: boolean
}

export const Props = {
  children: '',
  isTrue: false
}

export const initialProps = {
  children: 'Content',
  isTrue: false
}

const RenderIf: FC<IProps> = ({ children, isTrue }) => {
  if (isTrue) {
    return <>{children}</>
  }

  return null
}

export default RenderIf
