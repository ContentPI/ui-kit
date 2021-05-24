// Dependencies
import React, { FC, useState } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Components
import { Input, TextArea, Text } from '@components'

// Types
import { StatusColor } from '@types'
import { IProps as InputProps } from '../Input'
import { ITextAreaProps } from '../TextArea'

// Styles
import { TextFieldBase, TextFieldHelpersWrapper, BASE_CLASS_NAME } from './TextField.styled'

interface ITextFieldBaseProps {
  label?: string
  helperText?: string
  error?: boolean
  fullWidth?: boolean
  textArea?: boolean
  minLength?: number
  maxLength?: number
}

interface TextFieldInputProps extends ITextFieldBaseProps, InputProps {}
interface TextFieldAreaProps extends ITextFieldBaseProps, ITextAreaProps {}

type ILength = {
  min?: number | undefined
  max?: number | undefined
}

interface IValidateLength {
  length: ILength
  value: string | number | undefined
}

const ValidateLength = ({ length, value }: IValidateLength): string | null => {
  const { min, max } = length

  if (min) {
    if (value !== '' && String(value).length < min) {
      return `Min length ${min} characters`
    }
  }

  if (max) {
    if (value !== '' && String(value).length > max) {
      return `Max length ${max} characters`
    }
  }

  return null
}

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
    minLength = undefined,
    maxLength = undefined,
    value = '',
    ...restProps
  } = props
  const isInput = !textArea && type
  const status: StatusColor | undefined = error ? 'danger' : undefined
  const fullWidthClass = fullWidth ? 'full-width' : ''
  const helperTextClass = helperText ? 'helper-text' : ''
  const [inputValue, setInputValue] = useState(value)
  const formatValue = String(inputValue)
  const errorMsg = ValidateLength({
    length: {
      min: minLength,
      max: maxLength
    },
    value: formatValue
  })

  const statusColor: StatusColor | undefined = errorMsg || error ? 'danger' : status

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [fullWidthClass, helperTextClass]
  })

  return (
    <TextFieldBase className={classNames}>
      {label && (
        <Text variant="label" status={statusColor}>
          {label}
        </Text>
      )}

      {isInput ? (
        <Input
          status={status}
          fullWidth={fullWidth}
          type={type}
          onChange={e => setInputValue(e.target.value)}
          {...restProps}
        />
      ) : (
        <TextArea status={status} fullWidth={fullWidth} {...restProps} />
      )}

      {(maxLength || errorMsg || helperText) && (
        <TextFieldHelpersWrapper>
          <Text variant="caption1" color="secondary" status={statusColor}>
            {errorMsg || helperText}
          </Text>
          {maxLength && (
            <Text variant="caption1" color="secondary" status={statusColor}>
              {maxLength && `${formatValue.length}/${maxLength}`}
            </Text>
          )}
        </TextFieldHelpersWrapper>
      )}
    </TextFieldBase>
  )
}

export default TextField
