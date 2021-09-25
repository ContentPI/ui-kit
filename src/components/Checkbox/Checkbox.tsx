import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { StatusColor } from '../../types'
import { CheckboxBase, CheckboxChild, BASE_CLASS_NAME } from './Checkbox.styled'

interface ICheckboxProps {
  color?: StatusColor
  checked?: boolean
}

const Checkbox: FC<ICheckboxProps> = props => {
  const { color = StatusColor.primary, checked = false } = props
  const checkedClass = checked ? 'checked' : ''
  const checkedData = [color, checkedClass]

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: checkedData
  })
  return (
    <CheckboxBase>
      <CheckboxChild className={classNames} />
    </CheckboxBase>
  )
}

export default Checkbox
