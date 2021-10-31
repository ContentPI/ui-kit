// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator, cx } from '@contentpi/lib'

// Types
import { Color } from '../../types'

// Styles
import {
  Checkbox,
  CheckboxWrapper,
  CheckboxChild,
  CheckboxText,
  BASE_CLASS_NAME,
} from './Checkbox.styled'

interface IProps extends ComponentPropsWithoutRef<'input'> {
  color?: Color
  checked?: boolean
  label?: string
  name?: string
  onClick?: any
  value?: string
}

const CheckboxComponent: FC<IProps> = ({ label, color = Color.primary, ...checkboxProps }) => {
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color],
  })

  return (
    <CheckboxWrapper data-component="Checkbox">
      <>
        <CheckboxText>{label}</CheckboxText>
        <Checkbox {...checkboxProps} type="checkbox" />
        <CheckboxChild className={cx(classNames, 'checkmark')} />
      </>
    </CheckboxWrapper>
  )
}

export default CheckboxComponent
