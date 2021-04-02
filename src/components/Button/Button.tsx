// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { ButtonVariant, ButtonSize, StatusColor } from '@types'

// Styles
import { ButtonBase, BASE_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  color?: StatusColor
  fullWidth?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
}

const Button: FC<iProps> = props => {
  const {
    children,
    color = StatusColor.primary,
    fullWidth = false,
    size = ButtonSize.md,
    variant = ButtonVariant.contained,
    ...btnProps
  } = props

  const fullWidthClass = fullWidth ? 'full-width' : ''

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, variant, size, fullWidthClass]
  })

  return (
    <ButtonBase className={classNames} {...btnProps}>
      {children}
    </ButtonBase>
  )
}

export default Button
