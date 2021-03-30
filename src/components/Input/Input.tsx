// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { StatusColor } from '@types'

// Styles
import { InputBase, BASE_CLASS_NAME } from './Input.styled'

interface iProps extends ComponentPropsWithoutRef<'input'> {
  status?: StatusColor
}

const Input: FC<iProps> = props => {
  const { children, status = '', ...restProps } = props
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [status]
  })

  return (
    <InputBase className={classNames} {...restProps}>
      {children}
    </InputBase>
  )
}

export default Input
