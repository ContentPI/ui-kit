import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { Color } from '../../types'
import { BadgeBase, BASE_CLASS_NAME } from './Badge.styled'

export const initialProps = {
  children: 'Badge'
}

interface IBadgeProps {
  color?: Color
}

const Badge: FC<IBadgeProps> = props => {
  const { children, color = Color.primary } = props

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color]
  })

  return <BadgeBase className={classNames}>{children}</BadgeBase>
}

export default Badge
