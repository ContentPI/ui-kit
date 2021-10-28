// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { AvatarVariant, Color } from '../../types'

// Styles
import { Avatar, BASE_CLASS_NAME } from './Avatar.styled'

interface IProps {
  color?: Color
  variant?: AvatarVariant
}

const AvatarComponent: FC<IProps> = ({
  children,
  color = Color.primary,
  variant = AvatarVariant.circle,
  ...restProps
}) => {
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, variant],
  })

  return (
    <Avatar className={classNames} {...restProps}>
      {children}
    </Avatar>
  )
}

export default AvatarComponent
