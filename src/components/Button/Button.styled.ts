// Dependencies
import styled, { css } from 'styled-components'

// Contants
import { Color, Colors, Size, Variant } from '../../types'

// Theme
import { v } from '../../theme'

export const BASE_CLASS_NAME = 'btn'

// Functions
const getClass = (className: string) => `${BASE_CLASS_NAME}-${className}`

const getButtonColorStyles = (color: Color, variant?: Variant) => {
  const outlined = variant === 'outlined' ? '-outlined-' : '-'

  return `
    color: ${v(`${BASE_CLASS_NAME}-${color}${outlined}color`)};
    background-color: ${v(`${BASE_CLASS_NAME}-${color}${outlined}bg`)};
    border-color: ${v(`${BASE_CLASS_NAME}-${color}${outlined}bc`)};
    &:hover {
      color: ${v(`${BASE_CLASS_NAME}-${color}${outlined}hover-color`)};
      background-color: ${v(`${BASE_CLASS_NAME}-${color}${outlined}hover-bg`)};
      border-color: ${v(`${BASE_CLASS_NAME}-${color}${outlined}hover-bc`)};
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
    font-size: 12px;
    line-height: 1.25rem;
    border-radius: 3px;
  }

  &.${getClass(Size.medium)} {
    padding: 7px 12px;
    font-size: 13px;
    line-height: 1.25rem;
    border-radius: 3px;
    min-width: 60px;
  }

  &.${getClass(Size.large)} {
    padding: 13px 24px;
    font-size: 15px;
    line-height: 1.25rem;
    border-radius: 5px;
  }

  &.${getClass(Size.xLarge)} {
    padding: 13px 32px;
    font-size: 18px;
    line-height: 2rem;
    border-radius: 5px;
  }
`

const buttonStyle = css`
  &.${BASE_CLASS_NAME} {
    -webkit-appearance: button;
    background-color: transparent;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    display: inline-block;
    font-weight: 400;
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
  ${buttonStyle}
  ${buttonSizeStyles}
  ${buttonVariantStyles}
`
