// Dependencies
import styled, { css, CSSObject } from 'styled-components'

// Theme
import { themeCssVars, calcSpace, calcPadding, generateCss, generateStyles } from '@theme'

// Types
import {
  ButtonSize,
  ButtonSizes,
  ButtonVariant,
  ButtonVariants,
  StatusColor,
  StatusColors
} from '@types'

// Base Class Name
export const BASE_CLASS_NAME = 'button'

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

  return generateCss(cssProps)
}

const getSizesCss = (size: ButtonSize) => {
  const cssProps: CSSObject = {
    fontFamily: 'Poppins',
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

  return generateCss(cssProps)
}

const getVariantStyles = (variant: ButtonVariant) => {
  const styles = generateStyles(StatusColors, BASE_CLASS_NAME, (color: StatusColor) =>
    getVariantCss(color, variant)
  )
  return styles
}

// Styles
const buttonVariantStyles = () => {
  const styles = generateStyles(ButtonVariants, BASE_CLASS_NAME, getVariantStyles)
  return styles
}

const buttonSizesStyles = () => {
  const styles = generateStyles(ButtonSizes, BASE_CLASS_NAME, getSizesCss)
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
