// Dependencies
import styled, { css } from 'styled-components'

// Contants
import { Color, Size, Variant } from '../../types'

// Theme
import { v } from '../../theme'

export const BASE_CLASS_NAME = 'btn'

// Functions
const getClass = (className: string) => `${COMPONENT_CLASS_NAME}-${className}`
const getClass = (className: string) => `${BASE_CLASS_NAME}-${className}`

const getButtonColorStyles = (color: Color, variant?: Variant) => {
  const outlined = variant === 'outlined' ? '-outlined-' : '-'

  return css`
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

const getColorStyles = (color: Color, variant?: Variant) => css`
  &.${getClass(color)} {
    ${getButtonColorStyles(color, variant)}
  }
`

// Styles
const buttonVariantStyles = css`
  &.${getClass('contained')} {
    ${getColorStyles(Color.danger)}
    ${getColorStyles(Color.dark)}
    ${getColorStyles(Color.info)}
    ${getColorStyles(Color.light)}
    ${getColorStyles(Color.primary)}
    ${getColorStyles(Color.secondary)}
    ${getColorStyles(Color.success)}
    ${getColorStyles(Color.warning)}
  }

  &.${getClass('outlined')} {
    ${getColorStyles(Color.danger, Variant.outlined)}
    ${getColorStyles(Color.dark, Variant.outlined)}
    ${getColorStyles(Color.info, Variant.outlined)}
    ${getColorStyles(Color.light, Variant.outlined)}
    ${getColorStyles(Color.primary, Variant.outlined)}
    ${getColorStyles(Color.secondary, Variant.outlined)}
    ${getColorStyles(Color.success, Variant.outlined)}
    ${getColorStyles(Color.warning, Variant.outlined)}
  }
`

const buttonSizeStyles = css`
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
