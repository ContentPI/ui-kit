// Dependencies
import styled from 'styled-components'

// Contants
import { Color, Colors, Size, Shape, Variant, FontSize, FontWeight } from '../../types'

// Theme
import { getClass } from '../../theme'
import variables from '../../theme/cssVariables'

// Base Class Name
export const BASE_CLASS_NAME = 'button'

// Functions
const getColors = (colorType: Color, variant?: Variant) => {
  const { dark, main, contrastText } = variables[colorType]
  const isOutlined = variant === 'outlined'
  const color = isOutlined ? main : contrastText
  const backgroundColor = isOutlined ? 'transparent' : main

  return `
    color: ${color};
    background-color: ${backgroundColor};
    ${isOutlined ? `border-color: ${main};` : ''}

    &:hover {
      color: ${contrastText};
      background-color: ${dark};
      ${isOutlined ? `border-color: ${dark};` : ''}

      a {
        color: ${contrastText};
      }
    }

    a {
      color: ${color};
      &:hover {
        color: ${contrastText};
      }
    }
  `
}

const getColorStyles = (variant?: Variant) => {
  let styles = ''

  Colors.forEach((color: Color) => {
    styles += `
      &.${getClass(BASE_CLASS_NAME, color)} {
        ${getColors(color, variant)}
      }
    `
  })

  return styles
}

// Styles
const buttonVariantStyles = `
  &.${getClass(BASE_CLASS_NAME, 'contained')} {
    ${getColorStyles()}
  }
  &.${getClass(BASE_CLASS_NAME, 'outlined')} {
    ${getColorStyles(Variant.outlined)}
  }
`

const buttonSizeStyles = `
  margin-right: 5px;

  &.${getClass(BASE_CLASS_NAME, Size.small)} {
    padding: 2px 12px;
    font-size: ${FontSize.small}px;
    line-height: 1.25rem;
    a {
      font-size: ${FontSize.small}px;
    }
  }
  &.${getClass(BASE_CLASS_NAME, Size.medium)} {
    padding: 7px 12px;
    font-size: ${FontSize.small + 1}px;
    line-height: 1.25rem;
  }
  &.${getClass(BASE_CLASS_NAME, Size.large)} {
    padding: 13px 24px;
    font-size: ${FontSize.small + 3}px;
    line-height: 1.25rem;
    a {
      font-size: ${FontSize.small + 3}px;
    }
  }
  &.${getClass(BASE_CLASS_NAME, Size.xLarge)} {
    padding: 13px 32px;
    font-size: ${FontSize.medium + 2}px;
    line-height: 2rem;
    a {
      font-size: ${FontSize.medium + 2}px;
    }
  }
`

const buttonShapeStyles = `
  border-radius: 3px;
  &.${getClass(BASE_CLASS_NAME, Shape.round)} {
    border-radius: 30px;
  }
  &.${getClass(BASE_CLASS_NAME, Shape.square)} {
    border-radius: 0px;
  }
`

const buttonStyle = `
  &.${BASE_CLASS_NAME} {
    -webkit-appearance: button;
    background-color: transparent;
    border: 1px solid transparent;
    display: inline-block;
    font-weight: ${FontWeight.semibold};
    text-align: center;
    user-select: none;
    vertical-align: middle;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:focus {
      outline: none;
    }
    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
  &.${BASE_CLASS_NAME}-disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

export const StyledButton = styled.button`
  position: relative;
  img {
    position: absolute;
    top: 8px;
    left: 6px;
  }
  ${buttonStyle}
  ${buttonSizeStyles}
  ${buttonVariantStyles}
  ${buttonShapeStyles}
`

export const StyledLinkButton = styled.span`
  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    img {
      position: absolute;
      top: 2px;
      left: -6px;
    }
  }
  ${buttonStyle}
  ${buttonSizeStyles}
  ${buttonVariantStyles}
  ${buttonShapeStyles}
`
