// Dependencies
import React, { FC } from 'react'

// Components
import { Input, Text } from '@components'

// Types
import { StatusColor } from '@types'
import { InputProps } from '../Input'

// Styles
import { TextFieldBase } from './TextField.styled'

interface iProps extends InputProps {
  label?: string
  helperText?: string
  error?: boolean
}

const TextField: FC<iProps> = props => {
  const { label, helperText, error, ...restProps } = props

  const status: StatusColor | undefined = error ? 'danger' : undefined

  return (
    <TextFieldBase>
      {label && (
        <Text variant="subtitle2" status={status}>
          {label}
        </Text>
      )}
      <Input status={status} {...restProps} />
      {helperText && (
        <Text variant="caption1" color="textSecondary" status={status}>
          {helperText}
        </Text>
      )}
    </TextFieldBase>
  )
}

export default TextField
