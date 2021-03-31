// Dependencies
import React, { FC, ComponentPropsWithoutRef, useState } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Icons
import { Eye, EyeOff } from 'react-feather'

// Types
import { StatusColor } from '@types'

// Styles
import { InputWrapper, InputBase, BASE_CLASS_NAME, InputIcon } from './Input.styled'

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  status?: StatusColor
  leftIcon?: React.ElementType
  rightIcon?: React.ElementType
}

const Input: FC<InputProps> = props => {
  const { status = '', type = 'text', leftIcon, rightIcon, ...restProps } = props

  const [hasFocus, setHasFocus] = useState(false)
  const [showValue, setShowValue] = useState(false)

  const isPassword = type === 'password'
  const inputType = showValue ? 'text' : type
  const focusClass = hasFocus ? 'focus' : ''

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [status, focusClass]
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
        <InputIcon className="left">
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
          <InputIcon className="right pointer" as="button" onClick={handleShowPassword}>
            <RightIcon {...iconProps} />
          </InputIcon>
        ) : (
          <InputIcon className="right">
            <RightIcon {...iconProps} />
          </InputIcon>
        ))}
    </InputWrapper>
  )
}

export default Input
