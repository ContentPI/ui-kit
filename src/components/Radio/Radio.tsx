import React, { useState, FC } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { StatusColor, StatusColors } from '../../types'
import { RadioBase, RadioBall, BASE_CLASS_NAME } from './Radio.styled'

export interface IProps {
  color?: StatusColor
}

export const Props = {
  color: StatusColors
}

export const initialProps = {
  color: 'danger'
}

const Radio: FC<IProps> = props => {
  const { color = StatusColor.primary } = props
  const [showBall, setShowBall] = useState('')
  const radioData = [color, showBall]

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: radioData
  })

  return (
    <RadioBase className={classNames} onClick={() => setShowBall('show')}>
      <RadioBall className={classNames} />
    </RadioBase>
  )
}

export default Radio
