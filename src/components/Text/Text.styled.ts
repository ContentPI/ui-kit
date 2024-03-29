// Dependencies
import styled from 'styled-components'

// Types
import { FontSize } from '../../types'

// Types
import { Alignment, FontWeight } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'text'

export const Text = styled.p({
  [`&.${BASE_CLASS_NAME}`]: {
    fontWeight: FontWeight.normal,
    margin: 0,
  },
  [`&.${BASE_CLASS_NAME}-left`]: {
    textAlign: Alignment.left,
  },
  [`&.${BASE_CLASS_NAME}-center`]: {
    textAlign: Alignment.center,
  },
  [`&.${BASE_CLASS_NAME}-right`]: {
    textAlign: Alignment.right,
  },
  fontSize: FontSize.regular,
  fontWeight: FontWeight.bold,
  lineHeight: '20px',
  color: 'black',
})
