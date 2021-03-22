// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { ButtonVariant, ButtonSize, StatusColor } from '@Types'

// Styles
import { ButtonBase, BASE_CLASS_NAME } from './Button.styled'

interface iProps extends ComponentPropsWithoutRef<'button'> {
  color?: StatusColor
  size?: ButtonSize
  variant?: ButtonVariant
}

const Button: FC<iProps> = props => {
  const {
    children,
    color = StatusColor.primary,
    size = ButtonSize.medium,
    variant = ButtonVariant.contained,
    ...btnProps
  } = props
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, variant, size]
  })

  return (
    <ButtonBase className={classNames} {...btnProps}>
      {children}
    </ButtonBase>
  )
}

export default Button
