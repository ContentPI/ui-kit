// Dependencies
import styled, { css, CSSObject } from 'styled-components'

// Theme
import { themeCssVars, generateCss, generateStyles } from '../../theme'

// Types
import {
  IHeading,
  FontWeight,
  StatusColor,
  StatusColors,
  TextAlign,
  TextAligns,
  TextColor,
  TextColors,
  Typography,
  Typographys
} from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'typography'

// Functions
const getVariantCss = (variant: Typography) => {
  const cssProps: IHeading = {}
  const { typography } = themeCssVars

  cssProps.fontSize = typography?.[variant]?.fontSize
  cssProps.fontWeight = typography?.[variant].fontWeight
  cssProps.lineHeight = typography?.[variant].lineHeight

  if (variant === Typography.label) {
    cssProps.textTransform = typography?.[variant].textTransform
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

const getAlignCss = (align: TextAlign) => {
  const cssProps: CSSObject = {
    textAlign: align
  }

  return generateCss(cssProps)
}

const textVariantStyles = () => generateStyles(Typographys, BASE_CLASS_NAME, getVariantCss)
const textStatusColorStyles = () => generateStyles(StatusColors, BASE_CLASS_NAME, getStatusColorCss)
const textColorStyles = () => generateStyles(TextColors, BASE_CLASS_NAME, getColorCss)
const textAlignStyles = () => generateStyles(TextAligns, BASE_CLASS_NAME, getAlignCss)

export const TextBase = styled.p`
  &.${BASE_CLASS_NAME} {
    font-weight: ${FontWeight.bold};
    margin: 0;
    display: flex;
    align-items: center;
  }
  ${textVariantStyles()}
  ${textColorStyles()}
  ${textStatusColorStyles()}
  ${textAlignStyles()}
`
