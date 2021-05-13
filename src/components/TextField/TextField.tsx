// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Components
import { Input, TextArea, Text } from '@components'

// Types
import { StatusColor } from '@types'
import { IProps as InputProps } from '../Input'
import { ITextAreaProps } from '../TextArea'

// Styles
import { TextFieldBase, BASE_CLASS_NAME } from './TextField.styled'

interface ITextFieldBaseProps {
  label?: string
  helperText?: string
  error?: boolean
  fullWidth?: boolean
  textArea?: boolean
}

interface TextFieldInputProps extends ITextFieldBaseProps, InputProps {}
interface TextFieldAreaProps extends ITextFieldBaseProps, ITextAreaProps {}

export const Props = {
  label: '',
  helperText: '',
  placeholder: '',
  type: '',
  error: false,
  fullWidth: false,
  textArea: false
}

export const initialProps = {
  type: 'text'
}

const TextField: FC<TextFieldInputProps & TextFieldAreaProps> = props => {
  const {
    label,
    helperText,
    error,
    fullWidth = false,
    textArea = false,
    type = 'text',
    ...restProps
  } = props
  const isInput = !textArea && type
  const status: StatusColor | undefined = error ? 'danger' : undefined
  const fullWidthClass = fullWidth ? 'full-width' : ''
  const helperTextClass = helperText ? 'helper-text' : ''

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [fullWidthClass, helperTextClass]
  })

  return (
    <TextFieldBase className={classNames}>
      {label && (
        <Text variant="label" status={status}>
          {label}
        </Text>
      )}

      {isInput ? (
        <Input status={status} fullWidth={fullWidth} type={type} {...restProps} />
      ) : (
        <TextArea status={status} fullWidth={fullWidth} {...restProps} />
      )}

      {helperText && (
        <Text variant="caption1" color="secondary" status={status}>
          {helperText}
        </Text>
      )}
    </TextFieldBase>
  )
}

export default TextField
