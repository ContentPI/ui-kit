// Dependencies
import styled, { css } from 'styled-components'

// Contants
import { Color, Size, Variant } from '../../types'

// Theme
import { v } from '../../theme'

export const COMPONENT_CLASS_NAME = 'btn'

// Functions
const getClass = (className: string) => `${COMPONENT_CLASS_NAME}-${className}`

const getButtonColorStyles = (color: Color, variant?: Variant) => {
  const outlined = variant === 'outlined' ? '-outlined-' : '-'
  return css`
    color: ${v(`${color}${outlined}color`)};
    background-color: ${v(`${color}${outlined}bg`)};
    border-color: ${v(`${color}${outlined}bc`)};
    &:hover {
      color: ${v(`${color}${outlined}hover-color`)};
      background-color: ${v(`${color}${outlined}hover-bg`)};
      border-color: ${v(`${color}${outlined}hover-bc`)};
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
    ${getColorStyles(Color.Danger)}
    ${getColorStyles(Color.Danger)}
    ${getColorStyles(Color.Info)}
    ${getColorStyles(Color.Light)}
    ${getColorStyles(Color.Primary)}
    ${getColorStyles(Color.Secondary)}
    ${getColorStyles(Color.Success)}
    ${getColorStyles(Color.Warning)}
  }

  &.${getClass('outlined')} {
    ${getColorStyles(Color.Danger, Variant.Outlined)}
    ${getColorStyles(Color.Danger, Variant.Outlined)}
    ${getColorStyles(Color.Info, Variant.Outlined)}
    ${getColorStyles(Color.Light, Variant.Outlined)}
    ${getColorStyles(Color.Primary, Variant.Outlined)}
    ${getColorStyles(Color.Secondary, Variant.Outlined)}
    ${getColorStyles(Color.Success, Variant.Outlined)}
    ${getColorStyles(Color.Warning, Variant.Outlined)}
  }
`

const buttonSizeStyles = css`
  margin-right: 5px;

  &.${getClass(Size.Small)} {
    padding: 2px 12px;
    font-size: 12px;
    line-height: 1.25rem;
    border-radius: 3px;
  }

  &.${getClass(Size.Medium)} {
    padding: 9px 18px;
    font-size: 13px;
    line-height: 1.25rem;
    border-radius: 4px;
  }

  &.${getClass(Size.Large)} {
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
  &.${COMPONENT_CLASS_NAME} {
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
  &.${COMPONENT_CLASS_NAME}-disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`

export const ButtonBase = styled.button`
  ${buttonStyle}
  ${buttonSizeStyles}
  ${buttonVariantStyles}
`
