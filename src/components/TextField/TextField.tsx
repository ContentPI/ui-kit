// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Components
import { Input, Text } from '@components'

// Types
import { StatusColor } from '@types'
import { IProps as InputProps } from '../Input'

// Styles
import { TextFieldBase, BASE_CLASS_NAME } from './TextField.styled'

interface IProps extends InputProps {
  label?: string
  helperText?: string
  error?: boolean
  fullWidth?: boolean
}

const TextField: FC<IProps> = props => {
  const { label, helperText, error, fullWidth = false, ...restProps } = props

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

      <Input status={status} fullWidth={fullWidth} {...restProps} />

      {helperText && (
        <Text variant="caption1" color="secondary" status={status}>
          {helperText}
        </Text>
      )}
    </TextFieldBase>
  )
}

export default TextField
