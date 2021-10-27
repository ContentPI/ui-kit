// Dependencies
import styled, { CSSObject } from 'styled-components'

// Utils
import { getClass, generateCss, generateStyles, themeCssVars } from '../../theme'

// Types
import { ButtonVariant, ButtonVariants, Color, Colors, Shape, FontWeight } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'button'

// Functions
const getVariantCss = (colorType: Color, variant: ButtonVariant) => {
  const { dark, main, contrastText } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {}

  switch (variant) {
    case ButtonVariant.contained:
      cssProps.color = contrastText
      cssProps.backgroundColor = main
      cssProps['&:hover'] = {
        backgroundColor: dark,
        color: contrastText,
      }

      cssProps['&:hover a'] = {
        color: contrastText,
      }
      break
    case ButtonVariant.outlined:
      cssProps.color = main
      cssProps.backgroundColor = 'transparent'
      cssProps.borderColor = main
      cssProps['&:hover'] = {
        color: contrastText,
        backgroundColor: main,
      }
      break
    case ButtonVariant.text:
      cssProps.backgroundColor = 'white'
      break
  }

  return generateCss(cssProps)
}

const getVariantStyles = (variant: ButtonVariant) => {
  const styles = generateStyles(Colors, BASE_CLASS_NAME, (color: Color) =>
    getVariantCss(color, variant),
  )

  return styles
}

const buttonVariantStyles = generateStyles(ButtonVariants, BASE_CLASS_NAME, getVariantStyles)

// Button Sizes
const buttonSizes: CSSObject = {
  [`&.${BASE_CLASS_NAME}-xSmall`]: {
    img: {
      top: '-1px',
      left: '4px',

      "*[dir='rtl'] &": {
        right: '4px',
      },
    },
  },
  [`&.${BASE_CLASS_NAME}-small`]: {
    img: {
      top: '7px',
      left: '10px',

      "*[dir='rtl'] &": {
        right: '10px',
      },
    },
  },
  [`&.${BASE_CLASS_NAME}-large`]: {
    img: {
      top: '15px',
      left: '14px',

      "*[dir='rtl'] &": {
        right: '14px',
      },
    },
  },
}

// Button Styles
const buttonStyles: CSSObject = {
  [`&.${BASE_CLASS_NAME}`]: {
    userSelect: 'none',
    fontWeight: FontWeight.normal,
    border: '1px solid transparent',
    textAlign: 'center',
    verticalAlign: 'middle',
    transition: `color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out`,
  },
  '&:not(:disabled)': {
    cursor: 'pointer',
  },
  [`&.${BASE_CLASS_NAME}-disabled`]: {
    pointerEvents: 'none',
    opacity: 0.5,
  },
  [`&.${BASE_CLASS_NAME}-full-width`]: {
    display: 'block',
    width: '100%',
  },
}

// Button Shapes
const buttonShapes: CSSObject = {
  borderRadius: '3px',
  [`&.${getClass(BASE_CLASS_NAME, Shape.round)}`]: {
    borderRadius: '30px',
  },
  [`&.${getClass(BASE_CLASS_NAME, Shape.square)}`]: {
    borderRadius: '0px',
  },
}

export const Button = styled.button({
  position: 'relative',
  img: {
    position: 'absolute',
    top: '11px',
    left: '14px',

    ["*[dir='rtl'] &"]: {
      right: '14px',
    },
  },
  buttonVariantStyles,
  ...buttonSizes,
  ...buttonStyles,
  ...buttonShapes,
})

export const LinkButton = styled.span({
  marginRight: '5px',
  a: {
    color: 'inherit',
    position: 'relative',
    display: 'inline-block',
    textDecoration: 'none',
    img: {
      position: 'absolute',
      top: '-1px',
      left: '-6px',

      "*[dir='rtl'] &": {
        right: '-6px',
      },
    },
    buttonVariantStyles,
    ...buttonSizes,
    ...buttonStyles,
    ...buttonShapes,
  },
})
