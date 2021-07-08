import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { StatusColor } from '../../types'
import { BadgeBase, BASE_CLASS_NAME } from './Badge.styled'

interface IBadgeProps {
  color?: StatusColor
}

const Badge: FC<IBadgeProps> = props => {
  const { children, color = StatusColor.primary } = props

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color]
  })

  return <BadgeBase className={classNames}>{children}</BadgeBase>
}

export default Badge
