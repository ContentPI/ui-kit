// Dependencies
import React, { FC, ComponentPropsWithoutRef, useState } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Icons
import { Eye, EyeOff } from 'react-feather'

// Types
import { StatusColor } from '../../types'

// Styles
import { InputWrapper, InputBase, BASE_CLASS_NAME, InputIcon } from './Input.styled'

export interface IProps extends ComponentPropsWithoutRef<'input'> {
  fullWidth?: boolean
  leftIcon?: React.ElementType
  rightIcon?: React.ElementType
  status?: StatusColor
}

const Input: FC<IProps> = props => {
  const { status = '', type = 'text', leftIcon, rightIcon, fullWidth = false, ...restProps } = props

  const [hasFocus, setHasFocus] = useState(false)
  const [showValue, setShowValue] = useState(false)

  const isPassword = type === 'password'
  const inputType = showValue ? 'text' : type
  const focusClass = hasFocus ? 'focus' : ''
  const fullWidthClass = fullWidth ? 'full-width' : ''

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [status, focusClass, fullWidthClass]
  })

  const handleShowPassword = () => {
    setShowValue(prev => !prev)
  }

  const iconProps = {
    size: 20
  }

  const LeftIcon = leftIcon
  const RightIcon = (isPassword && (showValue ? Eye : EyeOff)) || rightIcon

  return (
    <InputWrapper className={classNames}>
      {LeftIcon && (
        <InputIcon className="icon-left">
          <LeftIcon {...iconProps} />
        </InputIcon>
      )}
      <InputBase
        type={inputType}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
        {...restProps}
      />
      {RightIcon &&
        (isPassword ? (
          <InputIcon className="icon-right pointer" as="button" onClick={handleShowPassword}>
            <RightIcon {...iconProps} />
          </InputIcon>
        ) : (
          <InputIcon className="icon-right">
            <RightIcon {...iconProps} />
          </InputIcon>
        ))}
    </InputWrapper>
  )
}

export default Input
