// Dependencies
import styled, { CSSObject } from 'styled-components'

// Theme
import { generateCss, generateStyles, themeCssVars } from '../../theme'

// Types
import { StatusColor, StatusColors } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'checkbox'

// Functions
const getColorCss = (colorType: StatusColor) => {
  const { main } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {
    borderColor: main
  }

  return generateCss(cssProps)
}

const checkboxColorStyles = () => generateStyles(StatusColors, BASE_CLASS_NAME, getColorCss)

export const CheckboxBase = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
`
export const CheckboxChild = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  ${checkboxColorStyles}
  transition: all .2s ease-out;

  &.checkbox-checked {
    width: 12px;
    height: 6px;
    border-width: 3px;
    border-top: none;
    border-right: none;
    left: 1px;
    top: 4px;
    transform: rotate(-45deg);
  }
`
