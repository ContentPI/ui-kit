// Dependencies
import styled from 'styled-components'

// Theme
import { themeCssVars, calc } from '../../theme'

// Types
import { CalcType } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'paper'

export const PaperBase = styled.div`
  width: max-content;
  padding: ${calc(CalcType.spacing, 6)};
  border-radius: ${calc(CalcType.spacing, 2)};
  background-color: #fff;
`
