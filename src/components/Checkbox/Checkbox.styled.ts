// Dependencies
import styled from 'styled-components'

// Types
import { themeCssVars, mapColorStyles, Gray } from '../../theme'
import { Colors, Shape } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'checkbox'

// Color
const colorStyles = mapColorStyles(Colors, BASE_CLASS_NAME, themeCssVars, {
  backgroundColor: 'main',
})

export const CheckboxWrapper = styled.label({
  userSelect: 'none',
  cursor: 'pointer',
  display: 'block',
  marginBottom: '12px',
  paddingLeft: '35px',
  position: 'relative',
  width: 'fit-content',
})

export const Checkbox = styled.input({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
  '&:checked ~ .checkmark': {
    ...colorStyles,
  },
  '&:checked ~ .checkmark:after': {
    display: 'block',
  },
})

export const CheckboxChild = styled.div({
  borderRadius: '0.1875rem',
  position: 'absolute',
  top: 0,
  left: 0,
  height: '22px',
  width: '22px',
  backgroundColor: Gray.V050,
  '&:after': {
    content: '',
    position: 'absolute',
    display: 'none',
  },
  [`&.${BASE_CLASS_NAME}-${Shape.round}`]: {
    borderRadius: '50%',
  },
  [`&.${BASE_CLASS_NAME}-${Shape.square}`]: {
    borderRadius: 0,
  },
})

export const CheckboxText = styled.span({
  height: '22px',
  display: 'inline-block',
  lineHeight: '22px',
})
