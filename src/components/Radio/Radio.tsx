import React, { useState } from 'react'
import { RadioBase, RadioBall } from './Radio.styled'

const Radio = () => {
  const [showBall, setShowBall] = useState('')

  return (
    <RadioBase onClick={() => setShowBall('show')}>
      <RadioBall className={showBall} />
    </RadioBase>
  )
}

export default Radio
