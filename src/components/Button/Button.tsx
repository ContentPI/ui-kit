// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { ButtonBase, COMPONENT_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  propa?: any
  // size?: ButtonSizes
  // variant?: ButtonVariants
  // TODO: Falta agregar colores dinamicos
  // color?: Colors
}

const Button: FC<iProps> = props => {
  const { children, ...btnProps } = props
  const classNames = cxGenerator({
    ccn: COMPONENT_CLASS_NAME,
    data: []
  })

  return (
    <ButtonBase className={classNames} {...btnProps}>
      {children}
    </ButtonBase>
  )
}

export default Button
