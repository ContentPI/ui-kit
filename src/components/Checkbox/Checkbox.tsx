import React, { useState, FC } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { StatusColor, StatusColors } from '../../types'
import { BASE_CLASS_NAME, CheckboxBase, CheckboxChild } from './Checkbox.styled'

export interface IProps {
  color?: StatusColor
}

export const Props = {
  color: StatusColors
}

export const initialProps = {
  color: 'danger'
}

const Checkbox: FC<IProps> = props => {
  const { color = StatusColor.primary } = props
  const [checked, setChecked] = useState('')
  const checkboxData = [color, checked]

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: checkboxData
  })

  return (
    <CheckboxBase onClick={() => (checked ? setChecked('') : setChecked('checked'))}>
      <CheckboxChild className={classNames} />
    </CheckboxBase>
  )
}

export default Checkbox
