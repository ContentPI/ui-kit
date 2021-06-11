// Dependencies
import styled from 'styled-components'

// Theme
import { themeCssVars } from 'src/theme'

// Base Class Name
export const BASE_CLASS_NAME = 'radio'

// Styles
export const radioBaseStyles = `
  background: ${themeCssVars.global?.background.paper};
  border: 1px solid ${themeCssVars.palette.primary.main};
`

export const radioBallStyles = `
  background: ${themeCssVars.palette.primary.main}
`

export const RadioBase = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  position: relative;
  margin-top: 3rem;

  ${radioBaseStyles}
`

export const RadioBall = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  top: 3px;
  left: 3px;
  border-radius: 100%;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  &.show {
    opacity: 1;
  }

  ${radioBallStyles}
`
