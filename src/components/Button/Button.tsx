// Dependencies
import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { ButtonVariant, ButtonSize, Color, Size, Variant, Shape } from '../../types'

// Components
import Spinner from '../Spinner'

// Styles
import { Button, LinkButton, BASE_CLASS_NAME } from './Button.styled'

export interface IProps extends ComponentPropsWithoutRef<'button'> {
  color?: Color
  fullWidth?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  href?: string
  shape?: Shape
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Btn: FC<IProps> = props => {
  const {
    color = Color.primary,
    children,
    href = undefined,
    disabled = undefined,
    isLoading = undefined,
    loadingText = undefined,
    shape = '',
    size = Size.medium,
    variant = Variant.contained,
    fullWidth = false,
    ...btnProps
  } = props

  let buttonText: any = children
  const fullWidthClass = fullWidth ? 'full-width' : ''
  const buttonData = [color, size, variant, shape, fullWidthClass]

  if (isLoading || disabled) {
    buttonData.push('disabled')
  }

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: buttonData,
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
      <LinkButton className={classNames} {...linkBtnProps} disabled={isLoading || disabled}>
        <a {...linkBtnProps}>{buttonText}</a>
      </LinkButton>
    )
  }

  return (
    <Button className={classNames} {...btnProps} disabled={isLoading || disabled}>
      {buttonText}
    </Button>
  )
}

export default Btn
