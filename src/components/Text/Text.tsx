// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Types
import { StatusColor, Typography, TypographyTag } from '@Types'

// Styles
import { TextBase, BASE_CLASS_NAME } from './Text.styled'

interface TextProps {
  color?: StatusColor
  variant?: Typography
  component?: keyof JSX.IntrinsicElements
}

const Text: FC<TextProps> = props => {
  const {
    children,
    color = StatusColor.primary,
    variant = Typography.paragraph1,
    component = undefined,
    ...btnProps
  } = props
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color, variant]
  })

  const cpmTag = component || TypographyTag[variant]

  return (
    <TextBase as={cpmTag} className={classNames} {...btnProps}>
      {children}
    </TextBase>
  )
}

export default Text
