// Dependencies
import styled from 'styled-components'

// Contants
import { Color, Colors, Size, Shape, Variant, FontSize, FontWeight } from '../../types'

// Theme
import { v } from '../../theme'

// Base Class Name
export const BASE_CLASS_NAME = 'button'

// Functions
const getClass = (className: string) => `${BASE_CLASS_NAME}-${className}`

const getButtonColorStyles = (colorType: Color, variant?: Variant) => {
  const outlined = variant === 'outlined' ? '-outlined-' : '-'
  const color = `${BASE_CLASS_NAME}-${colorType}${outlined}color`
  const bg = `${BASE_CLASS_NAME}-${colorType}${outlined}bg`
  const bc = `${BASE_CLASS_NAME}-${colorType}${outlined}bc`
  const hover = {
    color: `${BASE_CLASS_NAME}-${colorType}${outlined}hover-color`,
    bg: `${BASE_CLASS_NAME}-${colorType}${outlined}hover-bg`,
    bc: `${BASE_CLASS_NAME}-${colorType}${outlined}hover-bc`
  }

  return `
    color: ${v(color)};
    background-color: ${v(bg)};
    border-color: ${v(bc)};

    &:hover {
      color: ${v(outlined ? 'white' : hover.color)};
      background-color: ${v(hover.bg)};
      border-color: ${v(hover.bc)};

      a {
        color: ${v(outlined ? 'white' : hover.color)};
      }
    }

    a {
      color: ${v(color)};
      &:hover {
        color: ${v(outlined ? 'white' : hover.color)};
      }
    }
  `
}

const getColorStyles = (variant?: Variant) => {
  let styles = ''

  Colors.forEach((color: Color) => {
    styles += `
      &.${getClass(color)} {
        ${getButtonColorStyles(color, variant)}
      }
    `
  })

  return styles
}

// Styles
const buttonVariantStyles = `
  &.${getClass('contained')} {
    ${getColorStyles()}
  }

  &.${getClass('outlined')} {
    ${getColorStyles(Variant.outlined)}
  }
`

const buttonSizeStyles = `
  margin-right: 5px;

  &.${getClass(Size.small)} {
    padding: 2px 12px;
    font-size: ${FontSize.small}px;
    line-height: 1.25rem;

    a {
      font-size: ${FontSize.small}px;
    }
  }

  &.${getClass(Size.medium)} {
    padding: 7px 12px;
    font-size: ${FontSize.small + 1}px;
    line-height: 1.25rem;
  }

  &.${getClass(Size.large)} {
    padding: 13px 24px;
    font-size: ${FontSize.small + 3}px;
    line-height: 1.25rem;

    a {
      font-size: ${FontSize.small + 3}px;
    }
  }

  &.${getClass(Size.xLarge)} {
    padding: 13px 32px;
    font-size: ${FontSize.medium + 2}px;
    line-height: 2rem;

    a {
      font-size: ${FontSize.medium + 2}px;
    }
  }
`

const buttonShapeStyles = `
  border-radius: 5px;

  &.${getClass(Shape.round)} {
    border-radius: 30px;
  }

  &.${getClass(Shape.square)} {
    border-radius: 0px;
  }
`

const buttonStyle = `
  &.${BASE_CLASS_NAME} {
    -webkit-appearance: button;
    background-color: transparent;
    border: 1px solid transparent;
    display: inline-block;
    font-weight: ${FontWeight.normal};
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

export const ButtonBase = styled.button`
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
export const LinkButtonBase = styled.span`
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
