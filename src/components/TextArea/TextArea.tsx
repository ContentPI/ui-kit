// Dependencies
import React, { FC, ComponentPropsWithoutRef, useState } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { StatusColor } from '../../types'

// Styles
import { InputWrapper, InputBase, BASE_CLASS_NAME } from '../Input/Input.styled'

export interface ITextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
  fullWidth?: boolean
  status?: StatusColor
}

const TextArea: FC<ITextAreaProps> = props => {
  const { status = '', fullWidth = false, ...restProps } = props

  const [hasFocus, setHasFocus] = useState(false)

  const focusClass = hasFocus ? 'focus' : ''
  const fullWidthClass = fullWidth ? 'full-width' : ''

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [status, focusClass, fullWidthClass]
  })

  return (
    <InputWrapper className={classNames}>
      <InputBase
        as="textarea"
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        {...restProps}
      />
    </InputWrapper>
  )
}

export default TextArea
