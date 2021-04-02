// Dependencies
import styled from 'styled-components'

// Theme
import { themeCssVars, calc, CalcType } from '@theme'

// Base Class Name
export const BASE_CLASS_NAME = 'paper'

export const PaperBase = styled.div`
  width: max-content;
  border-radius: ${calc(CalcType.spacing, 2)};
  background-color: ${themeCssVars.global?.background.paper};
`