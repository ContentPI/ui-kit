// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/utils'
import { Size, Variant, Color, Shape } from '../../types'
import { ButtonBase, BASE_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  color?: Color
  href?: string
  shape?: Shape
  size?: Size
  variant?: Variant
}

const Button: FC<iProps> = props => {
  const {
    color = 'light',
    children,
    shape = '',
    size = 'md',
    variant = 'contained',
    ...btnProps
  } = props
  const buttonText: any = children

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [size, variant, color, shape]
  })

  return (
    <ButtonBase className={classNames} {...btnProps}>
      {buttonText}
    </ButtonBase>
  )
}

export default Button
