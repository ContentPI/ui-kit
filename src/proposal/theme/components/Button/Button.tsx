// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { Colors } from './types'
import { ButtonBase, COMPONENT_CLASS_NAME, ButtonSizes, ButtonVariants } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  size?: ButtonSizes
  variant?: ButtonVariants
  // TODO: Falta agregar colores dinamicos
  color?: Colors
}

const Button: FC<iProps> = props => {
  const { children, size = 'md', variant = 'contained', color = 'light', ...btnProps } = props
  const classNames = cxGenerator({
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant, color]
  })

  return (
    <ButtonBase className={classNames} {...btnProps}>
      {children}
    </ButtonBase>
  )
}

export default Button
