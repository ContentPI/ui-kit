// Dependencies
import styled, { css, CSSObject } from 'styled-components'

// Theme
import { themeCssVars, calcSpace, calcPadding } from '@Theme'

// Types
import { Typography, Typographys } from '@Types'

// Base Class Name
export const BASE_CLASS_NAME = 'text'

const getClass = (BASE_CLASS_NAME: string, className: string) => `${BASE_CLASS_NAME}-${className}`

// Functions
const getVariantCss = (variant: Typography) => {
  const cssProps: CSSObject = {}

  switch (variant) {
    case Typography.h1:
      cssProps.fontSize = '36px'
      cssProps.lineHeight = '48px'

      break
    case Typography.h2:
      cssProps.fontSize = '32px'
      cssProps.lineHeight = '40px'

      break
    case Typography.h3:
      cssProps.fontSize = '30px'
      cssProps.lineHeight = '40px'

      break
    case Typography.h4:
      cssProps.fontSize = '26px'
      cssProps.lineHeight = '32px'

      break
    case Typography.h5:
      cssProps.fontSize = '22px'
      cssProps.lineHeight = '32px'

      break
    case Typography.h6:
      cssProps.fontSize = '18px'
      cssProps.lineHeight = '24px'

      break
    case Typography.subtitle1:
      cssProps.fontSize = '15px'
      cssProps.lineHeight = '24px'

      break
    case Typography.subtitle2:
      cssProps.fontSize = '13px'
      cssProps.lineHeight = '24px'

      break
    case Typography.paragraph1:
      cssProps.fontWeight = 'normal'
      cssProps.fontSize = '15px'
      cssProps.lineHeight = '20px'

      break
    case Typography.paragraph2:
      cssProps.fontWeight = 'normal'
      cssProps.fontSize = '13px'
      cssProps.lineHeight = '16px'

      break
    case Typography.caption1:
      cssProps.fontWeight = 'normal'
      cssProps.fontSize = '12px'
      cssProps.lineHeight = '16px'

      break
    case Typography.caption2:
      cssProps.fontWeight = 600
      cssProps.fontSize = '12px'
      cssProps.lineHeight = '16px'

      break
    case Typography.label:
      cssProps.fontSize = '12px'
      cssProps.lineHeight = '16px'
      cssProps.textTransform = 'uppercase'

      break
  }

  const cssVariant = css(cssProps)
  return cssVariant.join('')
}

const textVariantStyles = () => {
  let styles = ''
  Typographys.forEach((variant: Typography) => {
    styles += `
      &.${getClass(BASE_CLASS_NAME, variant)} {
        ${getVariantCss(variant)}
      }
    `
  })

  return styles
}

console.log(textVariantStyles())

export const TextBase = styled.p`
  &.${BASE_CLASS_NAME} {
    font-family: 'Poppins';
    font-weight: bold;
    margin: 0;
    letter-spacing: 0.75px;
  }
  ${textVariantStyles()}
`
