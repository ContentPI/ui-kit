// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { classNamesGenerator } from '@contentpi/utils'
import { Size, Variant, Color } from '../../types'
import { ButtonBase, COMPONENT_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  size?: Size
  variant?: Variant
  color?: Color
  href?: string
}

const Button: FC<iProps> = props => {
  const { children, size = 'md', variant = 'contained', color = 'light', ...btnProps } = props
  const buttonText: any = children

  const classNames = classNamesGenerator({
    cpn: 'Button',
    ccn: COMPONENT_CLASS_NAME,
    data: [size, variant, color]
  })

  return (
    <ButtonBase className={classNames} {...btnProps}>
      {buttonText}
    </ButtonBase>
  )
}

export default Button
