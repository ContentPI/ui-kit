// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { StatusColor, Typography, TypographyTag, TextColor, TextAlign } from '@types'

// Styles
import { TextBase, BASE_CLASS_NAME } from './Text.styled'

interface TextProps {
  align?: TextAlign
  color?: TextColor
  component?: keyof JSX.IntrinsicElements
  status?: StatusColor
  variant?: Typography
}

const Text: FC<TextProps> = props => {
  const {
    children,
    align = TextAlign.left,
    color = TextColor.textPrimary,
    component = undefined,
    status = '',
    variant = Typography.paragraph1,
    ...restProps
  } = props
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, status, variant, align]
  })

  const cpmTag = component || TypographyTag[variant]

  return (
    <TextBase as={cpmTag} className={classNames} {...restProps}>
      {children}
    </TextBase>
  )
}

export default Text
