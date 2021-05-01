// Dependencies
import styled, { CSSObject } from 'styled-components'

// Theme
import { themeCssVars, calc, getClass, generateCss, generateStyles } from '@theme'

// Types
import {
  ButtonSize,
  ButtonSizes,
  ButtonVariant,
  ButtonVariants,
  StatusColor,
  StatusColors,
  CalcType,
  Shape,
  FontWeight
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
      cssProps.backgroundColor = 'white'
      break
  }

  return generateCss(cssProps)
}

const getSizesCss = (size: ButtonSize) => {
  const cssProps: CSSObject = {
    fontWeight: 600,
    letterSpacing: '0.75px',
    borderRadius: calc(CalcType.spacing, 2)
  }

  switch (size) {
    case ButtonSize.small:
      cssProps.padding = `${calc(CalcType.padding, [2, 4])}`
      cssProps.fontSize = '12px'
      cssProps.lineHeight = '16px'
      break

    case ButtonSize.medium:
      cssProps.padding = `${calc(CalcType.padding, [3, 5])}`
      cssProps.fontSize = '14px'
      cssProps.lineHeight = '16px'
      break

    case ButtonSize.large:
      cssProps.padding = `${calc(CalcType.padding, [3.5, 5])}`
      cssProps.fontSize = '16px'
      cssProps.lineHeight = '20px'
      break

    case ButtonSize.xLarge:
      cssProps.padding = `${calc(CalcType.padding, [4, 6])}`
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
const buttonVariantStyles = () => generateStyles(ButtonVariants, BASE_CLASS_NAME, getVariantStyles)
const buttonSizesStyles = () => generateStyles(ButtonSizes, BASE_CLASS_NAME, getSizesCss)

const buttonShapeStyles = `
  border-radius: 3px;

  &.${getClass(BASE_CLASS_NAME, Shape.round)} {
    border-radius: 30px;
  }

  &.${getClass(BASE_CLASS_NAME, Shape.square)} {
    border-radius: 0px;
  }
`

export const buttonStyle = `
  user-select: none;
  font-weight: ${FontWeight.semibold};
  border: 1px solid transparent;
  text-align: center;
  vertical-align: middle;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:not(:disabled) {
    cursor: pointer;
  }

  &.${BASE_CLASS_NAME}-disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  &.${BASE_CLASS_NAME}-full-width {
    width: 100%;
  }
`

export const StyledButton = styled.button`
  position: relative;
  img {
    position: absolute;
    top: 11px;
    left: 14px;
  }
  ${buttonStyle}
  ${buttonVariantStyles()}
  ${buttonSizesStyles()}
  ${buttonShapeStyles}
`

export const StyledLinkButton = styled.span`
  margin-right: 5px;

  a {
    color: inherit;
    position: relative;
    display: inline-block;
    text-decoration: none;
    img {
      position: absolute;
      top: -1px;
      left: -6px;
    }
  }
  ${buttonStyle}
  ${buttonVariantStyles()}
  ${buttonSizesStyles()}
  ${buttonShapeStyles}
`
