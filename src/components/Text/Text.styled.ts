// Dependencies
import styled, { css, CSSObject } from 'styled-components'

// Theme
import { themeCssVars, generateCss, generateStyles } from '@theme'

// Types
import {
  Typography,
  Typographys,
  StatusColor,
  StatusColors,
  TextColor,
  TextColors,
  IHeading
} from '@types'

// Base Class Name
export const BASE_CLASS_NAME = 'typography'

// Functions
const getVariantCss = (variant: Typography) => {
  const cssProps: IHeading = {}

  switch (variant) {
    case Typography.h1:
      cssProps.fontSize = themeCssVars.typography?.h1.fontSize
      cssProps.fontWeight = themeCssVars.typography?.h1.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.h1.lineHeight

      break
    case Typography.h2:
      cssProps.fontSize = themeCssVars.typography?.h2.fontSize
      cssProps.fontWeight = themeCssVars.typography?.h2.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.h2.lineHeight

      break
    case Typography.h3:
      cssProps.fontSize = themeCssVars.typography?.h3.fontSize
      cssProps.fontWeight = themeCssVars.typography?.h3.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.h3.lineHeight

      break
    case Typography.h4:
      cssProps.fontSize = themeCssVars.typography?.h4.fontSize
      cssProps.fontWeight = themeCssVars.typography?.h4.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.h4.lineHeight

      break
    case Typography.h5:
      cssProps.fontSize = themeCssVars.typography?.h5.fontSize
      cssProps.fontWeight = themeCssVars.typography?.h5.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.h5.lineHeight

      break
    case Typography.h6:
      cssProps.fontSize = themeCssVars.typography?.h6.fontSize
      cssProps.fontWeight = themeCssVars.typography?.h6.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.h6.lineHeight

      break
    case Typography.subtitle1:
      cssProps.fontSize = themeCssVars.typography?.subtitle1.fontSize
      cssProps.fontWeight = themeCssVars.typography?.subtitle1.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.subtitle1.lineHeight

      break
    case Typography.subtitle2:
      cssProps.fontSize = themeCssVars.typography?.subtitle2.fontSize
      cssProps.fontWeight = themeCssVars.typography?.subtitle2.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.subtitle2.lineHeight

      break
    case Typography.paragraph1:
      cssProps.fontSize = themeCssVars.typography?.paragraph1.fontSize
      cssProps.fontWeight = themeCssVars.typography?.paragraph1.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.paragraph1.lineHeight

      break
    case Typography.paragraph2:
      cssProps.fontSize = themeCssVars.typography?.paragraph2.fontSize
      cssProps.fontWeight = themeCssVars.typography?.paragraph2.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.paragraph2.lineHeight

      break
    case Typography.caption1:
      cssProps.fontSize = themeCssVars.typography?.caption1.fontSize
      cssProps.fontWeight = themeCssVars.typography?.caption1.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.caption1.lineHeight

      break
    case Typography.caption2:
      cssProps.fontSize = themeCssVars.typography?.caption2.fontSize
      cssProps.fontWeight = themeCssVars.typography?.caption2.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.caption2.lineHeight

      break
    case Typography.label:
      cssProps.fontSize = themeCssVars.typography?.label.fontSize
      cssProps.fontWeight = themeCssVars.typography?.label.fontWeight
      cssProps.lineHeight = themeCssVars.typography?.label.lineHeight
      cssProps.textTransform = themeCssVars.typography?.label.textTransform

      break
  }

  const cssStyles = css`
    font-size: ${cssProps.fontSize};
    font-weight: ${cssProps.fontWeight};
    line-height: ${cssProps.lineHeight};
    ${cssProps.textTransform &&
    css`
      text-transform: ${cssProps.textTransform};
    `}
  `.join('')

  return cssStyles
}

const getColorCss = (colorType: TextColor) => {
  const color = themeCssVars.palette.text[colorType]
  const cssProps: CSSObject = {
    color
  }

  return generateCss(cssProps)
}

const getStatusColorCss = (colorType: StatusColor) => {
  const { main } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {
    color: main
  }

  return generateCss(cssProps)
}

const textVariantStyles = () => {
  const styles = generateStyles(Typographys, BASE_CLASS_NAME, getVariantCss)
  return styles
}

const textStatusColorStyles = () => {
  const styles = generateStyles(StatusColors, BASE_CLASS_NAME, getStatusColorCss)
  return styles
}

const textColorStyles = () => {
  const styles = generateStyles(TextColors, BASE_CLASS_NAME, getColorCss)
  return styles
}

export const TextBase = styled.p`
  &.${BASE_CLASS_NAME} {
    font-family: 'Poppins';
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.75px;
  }
  ${textVariantStyles()}
  ${textColorStyles()}
  ${textStatusColorStyles()}
`
