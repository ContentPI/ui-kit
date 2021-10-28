// Dependencies
import styled, { CSSObject } from 'styled-components'

// Utils
import { getClass, themeCssVars } from '../../theme'

// Types
import { Alignment, Color, Colors, Shape, FontSize, FontWeight } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'alert'

// Functions
const getAlertColorStyles = (colorType: Color) => {
  const {
    alert: { dark, main, contrastText },
  } = themeCssVars.palette[colorType]

  const cssProps: CSSObject = {
    backgroundColor: main,
    borderColor: dark,
    color: contrastText,

    a: {
      color: contrastText,
      fontWeight: FontWeight.bold,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }

  return cssProps
}

// Alert colors
const alertColors = Colors.map((color: Color) => ({
  [`&.${BASE_CLASS_NAME}-${Color[color]}`]: {
    ...getAlertColorStyles(Color[color]),
  },
}))

const alertColorStyles: CSSObject = Object.assign({}, ...alertColors)

// Alert Shapes
const alertShapes: CSSObject = {
  borderRadius: '0.25rem',
  [`&.${getClass(BASE_CLASS_NAME, Shape.round)}`]: {
    borderRadius: '1rem',
  },
  [`&.${getClass(BASE_CLASS_NAME, Shape.square)}`]: {
    borderRadius: 0,
  },
}

// Alert Alignment
const alertAlignment: CSSObject = {
  textAlign: Alignment.left,
  [`&.${getClass(BASE_CLASS_NAME, Alignment.center)}`]: {
    textAlign: Alignment.center,
  },
  [`&.${getClass(BASE_CLASS_NAME, Alignment.right)}`]: {
    textAlign: Alignment.right,
  },
}

// Alert component
export const Alert = styled.button({
  border: '1px solid transparent',
  borderRadius: '0.25rem',
  fontSize: FontSize.regular,
  marginBottom: '1rem',
  padding: '0.75rem 1.25rem',
  position: 'relative',
  width: '100%',
  ...alertShapes,
  ...alertColorStyles,
  ...alertAlignment,
})
