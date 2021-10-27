// Dependencies
import styled, { CSSObject } from 'styled-components'

// Utils
import { getClass, themeCssVars } from '../../theme'

// Types
import { ButtonVariant, Color, Colors, Shape, FontWeight, FontSize, Size } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'btn'

// Functions
const getButtonVariantStyles = (colorType: Color, variant: ButtonVariant) => {
  const { dark, main, contrastText } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {}

  switch (variant) {
    case ButtonVariant.contained:
      cssProps.backgroundColor = main
      cssProps.color = contrastText
      cssProps['&:hover'] = {
        backgroundColor: dark,
        color: contrastText,
      }
      cssProps['&:hover a'] = {
        color: contrastText,
      }
      break
    case ButtonVariant.outlined:
      cssProps.backgroundColor = 'transparent'
      cssProps.borderColor = main
      cssProps.color = main
      cssProps['&:hover'] = {
        color: contrastText,
        backgroundColor: main,
      }
      break
    case ButtonVariant.text:
      cssProps.backgroundColor = 'white'
      break
  }

  return cssProps
}

// Button Variants
const containedVariants = Colors.map((color: Color) => ({
  [`&.${BASE_CLASS_NAME}-${Color[color]}`]: {
    ...getButtonVariantStyles(Color[color], ButtonVariant.contained),
  },
}))

const outlinedVariants = Colors.map((color: Color) => ({
  [`&.${BASE_CLASS_NAME}-${Color[color]}`]: {
    ...getButtonVariantStyles(Color[color], ButtonVariant.outlined),
  },
}))

const buttonVariants: CSSObject = {
  [`&.${BASE_CLASS_NAME}-${ButtonVariant.contained}`]: Object.assign({}, ...containedVariants),
  [`&.${BASE_CLASS_NAME}-${ButtonVariant.outlined}`]: Object.assign({}, ...outlinedVariants),
}

// Button Sizes
const buttonSizes: CSSObject = {
  fontSize: FontSize.regular,
  lineHeight: '16px',
  [`&.${BASE_CLASS_NAME}-${Size.xSmall}`]: {
    img: {
      left: '4px',
      top: '-1px',
      "*[dir='rtl'] &": {
        right: '4px',
      },
    },
    fontSize: FontSize.small,
    lineHeight: '14px',
    padding: '0.2rem 0.7rem',
  },
  [`&.${BASE_CLASS_NAME}-${Size.small}`]: {
    img: {
      left: '10px',
      top: '7px',
      "*[dir='rtl'] &": {
        right: '10px',
      },
    },
    padding: '0.27rem 0.8rem',
  },
  [`&.${BASE_CLASS_NAME}-${Size.medium}`]: {
    padding: '0.5rem 1rem',
  },
  [`&.${BASE_CLASS_NAME}-${Size.large}`]: {
    img: {
      top: '15px',
      left: '14px',
      "*[dir='rtl'] &": {
        right: '14px',
      },
    },
    padding: '0.75rem 1.1rem',
  },
  [`&.${BASE_CLASS_NAME}-${Size.xLarge}`]: {
    img: {
      top: '15px',
      left: '14px',
      "*[dir='rtl'] &": {
        right: '14px',
      },
    },
    padding: '1rem 1.5rem',
  },
}

// Button Styles
const buttonStyles: CSSObject = {
  [`&.${BASE_CLASS_NAME}`]: {
    border: '1px solid transparent',
    fontWeight: FontWeight.normal,
    textAlign: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
  },
  [`&.${BASE_CLASS_NAME}-disabled`]: {
    pointerEvents: 'none',
    opacity: 0.5,
  },
  [`&.${BASE_CLASS_NAME}-full-width`]: {
    display: 'block',
    width: '100%',
  },
  '&:not(:disabled)': {
    cursor: 'pointer',
  },
}

// Button Shapes
const buttonShapes: CSSObject = {
  borderRadius: '0.25rem',
  [`&.${getClass(BASE_CLASS_NAME, Shape.round)}`]: {
    borderRadius: '1rem',
  },
  [`&.${getClass(BASE_CLASS_NAME, Shape.square)}`]: {
    borderRadius: 0,
  },
}

export const Button = styled.button({
  position: 'relative',
  img: {
    position: 'absolute',
    left: '11px',
    top: '7px',
    ["*[dir='rtl'] &"]: {
      right: '14px',
    },
  },
  ...buttonShapes,
  ...buttonSizes,
  ...buttonStyles,
  ...buttonVariants,
})

export const LinkButton = styled.span({
  marginRight: '5px',
  a: {
    color: 'inherit',
    display: 'inline-block',
    position: 'relative',
    textDecoration: 'none',
    img: {
      position: 'absolute',
      top: '-1px',
      left: '-6px',
      "*[dir='rtl'] &": {
        right: '-6px',
      },
    },
  },
  ...buttonShapes,
  ...buttonSizes,
  ...buttonStyles,
  ...buttonVariants,
})
