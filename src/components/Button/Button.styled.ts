// Dependencies
import styled, { css, CSSObject } from 'styled-components'

// Theme
import { themeCssVars, calcSpace, calcPadding } from '@Theme'

// Types
import {
  ButtonSize,
  ButtonSizes,
  ButtonVariant,
  ButtonVariants,
  StatusColor,
  StatusColors
} from '@Types'

// Base Class Name
export const BASE_CLASS_NAME = 'button'

const getClass = (BASE_CLASS_NAME: string, className: string) => `${BASE_CLASS_NAME}-${className}`

// Functions
const getVariantCss = (colorType: StatusColor, variant: ButtonVariant) => {
  const { dark, main, contrastText } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {}

  switch (variant) {
    case ButtonVariant.contained:
      cssProps.color = contrastText
      cssProps.backgroundColor = main
      cssProps.borderColor = main

      cssProps['&:hover'] = {
        backgroundColor: dark
      }

      break
    case ButtonVariant.outlined:
      cssProps.color = main
      cssProps.backgroundColor = 'transparent'
      cssProps.borderColor = main

      cssProps['&:hover'] = {
        color: contrastText,
        backgroundColor: main
      }
      break
    case ButtonVariant.text:
      cssProps.backgroundColor = '#fff'
      break
  }

  const cssVariant = css(cssProps)
  return cssVariant.join('')
}

const getSizesCss = (size: ButtonSize) => {
  const cssProps: CSSObject = {
    fontFamily: "'Poppins'",
    fontWeight: 600,
    letterSpacing: '0.75px',
    borderRadius: calcSpace(2)
  }

  switch (size) {
    case ButtonSize.tiny:
      cssProps.padding = `${calcPadding(1.5, 3)}`
      cssProps.fontSize = '10px'
      cssProps.lineHeight = '12px'
      break
    case ButtonSize.small:
      cssProps.padding = `${calcPadding(2, 4)}`
      cssProps.fontSize = '12px'
      cssProps.lineHeight = '16px'
      break
    case ButtonSize.medium:
      cssProps.padding = `${calcPadding(3, 5)}`
      cssProps.fontSize = '14px'
      cssProps.lineHeight = '16px'
      break
    case ButtonSize.large:
      cssProps.padding = `${calcPadding(3.5, 5)}`
      cssProps.fontSize = '16px'
      cssProps.lineHeight = '20px'
      break
    case ButtonSize.giant:
      cssProps.padding = `${calcPadding(4, 6)}`
      cssProps.fontSize = '18px'
      cssProps.lineHeight = '24px'
      break
  }

  const cssVariant = css(cssProps)
  return cssVariant.join('')
}

const getVariantStyles = (variant: ButtonVariant) => {
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
const buttonVariantStyles = () => {
  let styles = ''
  ButtonVariants.forEach((variant: ButtonVariant) => {
    styles += `
      &.${getClass(BASE_CLASS_NAME, variant)} {
        ${getVariantStyles(variant)}
      }
    `
  })

  return styles
}

const buttonSizesStyles = () => {
  let styles = ''
  ButtonSizes.forEach((size: ButtonSize) => {
    styles += `
      &.${getClass(BASE_CLASS_NAME, size)} {
        ${getSizesCss(size)}
      }
    `
  })

  return styles
}

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
  ${buttonVariantStyles()}
  ${buttonSizesStyles()}
`
