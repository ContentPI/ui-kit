// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { AvatarVariant, Color } from '../../types'

// Styles
import { AvatarBase, BASE_CLASS_NAME } from './Avatar.styled'

interface IProps {
  color?: Color
  variant?: AvatarVariant
}

const Avatar: FC<IProps> = ({
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
    <AvatarBase className={classNames} {...restProps}>
      {children}
    </AvatarBase>
  )
}

export default Avatar
