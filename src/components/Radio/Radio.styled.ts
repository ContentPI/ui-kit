// Dependencies
import styled, { CSSObject } from 'styled-components'

// Theme
import { generateCss, generateStyles, themeCssVars } from '../../theme'

// Types
import { StatusColor, StatusColors } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'radio'

// Functions
const getBorderCss = (colorType: StatusColor) => {
  const { main } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {
    border: `1px solid ${main}`
  }

  return generateCss(cssProps)
}

const getBallCss = (colorType: StatusColor) => {
  const { main } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {
    background: main
  }

  return generateCss(cssProps)
}

const radioBorderStyles = () => generateStyles(StatusColors, BASE_CLASS_NAME, getBorderCss)
const radioBallStyles = () => generateStyles(StatusColors, BASE_CLASS_NAME, getBallCss)

// Styles
export const radioBaseStyles = `
  background: ${themeCssVars.global?.background.paper};
`

export const selectedStyles = `
  &.${BASE_CLASS_NAME}-checked {
    opacity: 1;
  }
`

export const RadioBase = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 100%;
  position: relative;
  margin-top: 3rem;

  ${radioBaseStyles}
  ${radioBorderStyles()}
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
  ${radioBallStyles()}
  ${selectedStyles}
`
