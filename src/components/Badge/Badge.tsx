import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { StatusColor, StatusColors } from 'src/types'
import { BadgeBase, BASE_CLASS_NAME } from './Badge.styled'

export const initialProps = {
  children: 'Badge',
  color: 'danger'
}

interface IBadgeProps {
  color?: StatusColor
}

export const Props = {
  children: '',
  color: StatusColors
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
