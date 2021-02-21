import React, { FC, ComponentPropsWithoutRef } from 'react'
import { cxGenerator } from '@contentpi/utils'
import Spinner from '../Spinner'
import { Size, Variant, Color, Shape } from '../../types'
import { ButtonBase, LinkButtonBase, BASE_CLASS_NAME } from './Button.styled'

interface Props extends ComponentPropsWithoutRef<'button'> {
  color?: Color
  href?: string
  shape?: Shape
  size?: Size
  variant?: Variant
  disabled?: boolean
  isLoading?: boolean
  loadingText?: string
}

const Button: FC<Props> = props => {
  const {
    color = 'light',
    children,
    href = undefined,
    disabled = undefined,
    isLoading = undefined,
    loadingText = undefined,
    shape = '',
    size = 'md',
    variant = 'contained',
    ...btnProps
  } = props
  let buttonText: any = children
  const buttonData = [size, variant, color, shape]

  if (isLoading || disabled) {
    buttonData.push('disabled')
  }

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: buttonData
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
      href
    }

    return (
      <LinkButtonBase className={classNames} {...linkBtnProps} disabled={isLoading || disabled}>
        <a {...linkBtnProps}>{buttonText}</a>
      </LinkButtonBase>
    )
  }

  return (
    <ButtonBase className={classNames} {...btnProps}>
      {buttonText}
    </ButtonBase>
  )
}

export default Button
