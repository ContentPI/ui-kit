// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { ButtonVariant, Color, Size, Variant, Shape } from '../../types'

// Components
import Spinner from '../Spinner'

// Styles
import { Button, LinkButton, BASE_CLASS_NAME } from './Button.styled'

interface IProps extends ComponentPropsWithoutRef<'button'> {
  color?: Color
  fullWidth?: boolean
  size?: Size
  variant?: ButtonVariant
  href?: string
  shape?: Shape
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
}

const ButtonComponent: FC<IProps> = ({
  color = Color.primary,
  children,
  href = undefined,
  disabled = undefined,
  isLoading = undefined,
  loadingText = undefined,
  shape = Shape.regular,
  size = Size.medium,
  variant = Variant.contained,
  fullWidth = false,
  ...btnProps
}) => {
  let buttonText: any = children
  const fullWidthClass = fullWidth ? 'full-width' : ''
  const classes = [variant, size, shape, fullWidthClass, color]

  if (isLoading || disabled) {
    classes.push('disabled')
  }

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: classes,
  })

  if (isLoading) {
    buttonText = (
      <>
        <Spinner spinner="rolling" style={{ width: '18px' }} /> &nbsp;&nbsp;&nbsp; {loadingText}
      </>
    )
  }

  if (href) {
    const linkBtnProps: any = {
      href,
    }

    return (
      <LinkButton
        data-component="LinkButton"
        className={classNames}
        {...linkBtnProps}
        disabled={isLoading || disabled}
      >
        <a {...linkBtnProps}>{buttonText}</a>
      </LinkButton>
    )
  }

  return (
    <Button
      data-component="Button"
      className={classNames}
      {...btnProps}
      disabled={isLoading || disabled}
    >
      {buttonText}
    </Button>
  )
}

export default ButtonComponent
