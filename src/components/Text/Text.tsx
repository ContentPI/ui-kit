// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { StatusColor, Typography, TypographyTag, TextColor, TextAlign } from '../../types'

// Styles
import { TextBase, BASE_CLASS_NAME } from './Text.styled'

export interface TextProps {
  align?: TextAlign
  className?: string
  color?: TextColor
  component?: keyof JSX.IntrinsicElements
  status?: StatusColor
  variant?: Typography
}

const Text: FC<TextProps> = props => {
  const {
    align = TextAlign.left,
    children,
    className,
    color = TextColor.textPrimary,
    component = undefined,
    status = '',
    variant = Typography.paragraph1,
    ...restProps
  } = props

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [status || color, variant, align],
    className
  })

  const cpmTag = component || TypographyTag[variant]

  return (
    <TextBase as={cpmTag} className={classNames} {...restProps}>
      {children}
    </TextBase>
  )
}

export default Text
