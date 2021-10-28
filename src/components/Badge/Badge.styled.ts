// Dependencies
import styled, { CSSObject } from 'styled-components'

// Utils
import { getClass, themeCssVars } from '../../theme'

// Types
import { Color, Colors, Shape, FontSize, FontWeight } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'badge'

// Functions
const getBadgeColorStyles = (colorType: Color) => {
  const {
    button: { dark, main, contrastText },
  } = themeCssVars.palette[colorType]

  const cssProps: CSSObject = {
    backgroundColor: main,
    borderColor: dark,
    color: contrastText,
  }

  return cssProps
}

// Badge colors
const badgeColors = Colors.map((color: Color) => ({
  [`&.${BASE_CLASS_NAME}-${Color[color]}`]: {
    ...getBadgeColorStyles(Color[color]),
  },
}))

const badgeColorStyles: CSSObject = Object.assign({}, ...badgeColors)

// Badge Shapes
const badgeShapes: CSSObject = {
  borderRadius: '0.25rem',
  [`&.${getClass(BASE_CLASS_NAME, Shape.round)}`]: {
    borderRadius: '1rem',
  },
  [`&.${getClass(BASE_CLASS_NAME, Shape.square)}`]: {
    borderRadius: 0,
  },
}

// Styles
export const Badge = styled.span({
  border: '1px solid inherit',
  borderRadius: '0.25rem',
  display: 'inline-block',
  fontSize: '75%',
  fontWeight: FontWeight.normal,
  lineHeight: 1,
  padding: '0.3em 0.45em',
  verticalAlign: 'baseline',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  ...badgeColorStyles,
  ...badgeShapes,
})
