// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { StatusColor, Typography, TypographyTag, TextColor } from '@types'

// Styles
import { TextBase, BASE_CLASS_NAME } from './Text.styled'

interface TextProps {
  color?: TextColor
  component?: keyof JSX.IntrinsicElements
  status?: StatusColor
  variant?: Typography
}

const Text: FC<TextProps> = props => {
  const {
    children,
    color = TextColor.textPrimary,
    component = undefined,
    status = '',
    variant = Typography.paragraph1,
    ...btnProps
  } = props
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, status, variant]
  })

  const cpmTag = component || TypographyTag[variant]

  return (
    <TextBase as={cpmTag} className={classNames} {...btnProps}>
      {children}
    </TextBase>
  )
}

export default Text
