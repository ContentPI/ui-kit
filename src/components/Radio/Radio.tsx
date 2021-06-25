import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { StatusColor, StatusColors } from '../../types'
import { RadioBase, RadioBall, BASE_CLASS_NAME } from './Radio.styled'

export interface IProps {
  color?: StatusColor,
  checked?: boolean
}

const Radio: FC<IProps> = props => {
  const { color = StatusColor.primary, checked = false } = props
  const checkedClass = checked ? 'checked' : ''
  const radioData = [color, checkedClass]

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: radioData
  })

  return (
    <RadioBase className={classNames}>
      <RadioBall className={classNames} />
    </RadioBase>
  )
}

export default Radio
