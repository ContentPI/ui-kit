import React, { FC, ReactElement } from 'react'
import { cxGenerator, cx } from '@contentpi/lib'

import { Alignment, Color, Shape } from '../../types'
import { StyledAlert, BASE_CLASS_NAME } from './Alert.styled'

interface Props {
  alignment?: Alignment
  children?: string | ReactElement
  color?: Color
  shape?: Shape
}

const Alert: FC<Props> = props => {
  const {
    children,
    alignment = Alignment.left,
    color = Color.primary,
    shape = Shape.square
  } = props

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [alignment, shape]
  })

  return (
    <StyledAlert {...props} className={cx(`context__${color}`, classNames)}>
      {children}
    </StyledAlert>
  )
}

export default Alert
