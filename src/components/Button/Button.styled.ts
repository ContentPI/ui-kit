// Dependencies
import styled, { css, CSSObject } from 'styled-components'

// Theme
import { themeCssVars } from '@Theme'

// Types
import { StatusColor, StatusColors, ButtonVariants, ButtonSize, ButtonSizes } from '@Types'

// Base Class Name
export const BASE_CLASS_NAME = 'button'

const getClass = (BASE_CLASS_NAME: string, className: string) => `${BASE_CLASS_NAME}-${className}`

// Functions
const getVariantCss = (colorType: StatusColor, variant: ButtonVariants) => {
  const { dark, main, contrastText } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {}

  switch (variant) {
    case ButtonVariants.contained:
      cssProps.color = contrastText
      cssProps.backgroundColor = main
      cssProps.borderColor = main

      cssProps['&:hover'] = {
        backgroundColor: dark
      }

      break
    case ButtonVariants.outlined:
      cssProps.color = main
      cssProps.backgroundColor = 'transparent'
      cssProps.borderColor = main

      cssProps['&:hover'] = {
        color: contrastText,
        backgroundColor: main
      }
      break
    case ButtonVariants.text:
      cssProps.backgroundColor = '#fff'
      break
  }

  const cssVariant = css(cssProps)
  return cssVariant.join('')
}

const unitBase = 4
const calc = (unit: number, multiply: number) => `${unitBase * multiply}px`
const space = (number: number) => calc(unitBase, number)

const getSizesCss = (size: ButtonSize) => {
  const cssProps: CSSObject = {}

  switch (size) {
    case ButtonSize.tiny:
      cssProps.padding = `${space(1.5)} ${space(3)}`
      cssProps.fontSize = '10px'
      cssProps.fontFamily = "'Poppins'"
      cssProps.fontWeight = 600
      cssProps.lineHeight = '12px'
      cssProps.letterSpacing = '0.75px'
      cssProps.borderRadius = space(2)
      break
    case ButtonSize.small:
      cssProps.padding = `${space(2)} ${space(4)}`
      cssProps.fontSize = '12px'
      cssProps.fontFamily = "'Poppins'"
      cssProps.fontWeight = 600
      cssProps.lineHeight = '16px'
      cssProps.letterSpacing = '0.75px'
      cssProps.borderRadius = space(2)
      break
    case ButtonSize.medium:
      cssProps.padding = `${space(3)} ${space(5)}`
      cssProps.fontSize = '14px'
      cssProps.fontFamily = "'Poppins'"
      cssProps.fontWeight = 600
      cssProps.lineHeight = '16px'
      cssProps.letterSpacing = '0.75px'
      cssProps.borderRadius = space(2)
      break
    case ButtonSize.large:
      cssProps.padding = `${space(3.5)} ${space(5)}`
      cssProps.fontSize = '16px'
      cssProps.fontFamily = "'Poppins'"
      cssProps.fontWeight = 600
      cssProps.lineHeight = '20px'
      cssProps.letterSpacing = '0.75px'
      cssProps.borderRadius = space(2)
      break
    case ButtonSize.giant:
      cssProps.padding = `${space(4)} ${space(6)}`
      cssProps.fontSize = '18px'
      cssProps.fontFamily = "'Poppins'"
      cssProps.fontWeight = 600
      cssProps.lineHeight = '24px'
      cssProps.letterSpacing = '0.75px'
      cssProps.borderRadius = space(2)
      break
  }

  const cssVariant = css(cssProps)
  return cssVariant.join('')
}

const getVariantStyles = (variant: ButtonVariants) => {
  let styles = ''
  StatusColors.forEach((color: StatusColor) => {
    styles += `
      &.${getClass(BASE_CLASS_NAME, color)} {
        ${getVariantCss(color, variant)}
      }
    `
  })

  return styles
}

// Styles
const buttonVariantStyles = `
  &.${getClass(BASE_CLASS_NAME, ButtonVariants.contained)} {
    ${getVariantStyles(ButtonVariants.contained)}
  }
  &.${getClass(BASE_CLASS_NAME, ButtonVariants.outlined)} {
    ${getVariantStyles(ButtonVariants.outlined)}
  }
`

const buttonSizesStyles = `
  &.${getClass(BASE_CLASS_NAME, ButtonSize.tiny)} {
    ${getSizesCss(ButtonSize.tiny)}
  }
  &.${getClass(BASE_CLASS_NAME, ButtonSize.small)} {
    ${getSizesCss(ButtonSize.small)}
  }
  &.${getClass(BASE_CLASS_NAME, ButtonSize.medium)} {
    ${getSizesCss(ButtonSize.medium)}
  }
  &.${getClass(BASE_CLASS_NAME, ButtonSize.large)} {
    ${getSizesCss(ButtonSize.large)}
  }
  &.${getClass(BASE_CLASS_NAME, ButtonSize.giant)} {
    ${getSizesCss(ButtonSize.giant)}
  }
`

export const ButtonBase = styled.button`
  &.${BASE_CLASS_NAME} {
    user-select: none;
    border: 1px solid transparent;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
  ${buttonVariantStyles}
  ${buttonSizesStyles}
`
