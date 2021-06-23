// Dependencies
import styled, { CSSObject } from 'styled-components'

// Types
import { generateCss, generateStyles, themeCssVars } from '../../theme'
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

// Styles
const checkboxColorStyles = () => generateStyles(StatusColors, BASE_CLASS_NAME, getColorCss)

const checkedStyles = `
  &.${BASE_CLASS_NAME}-checked {
    width: 12px;
    height: 6px;
    border-width: 3px;
    border-top: none;
    border-right: none;
    transform: rotate(-45deg);
  }
`

export const CheckboxBase = styled.div`
  width: 14px;
  height: 14px;
  position: relative;
`
export const CheckboxChild = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  ${checkboxColorStyles()}
  transition: 0.2s all;
  ${checkedStyles}
`
