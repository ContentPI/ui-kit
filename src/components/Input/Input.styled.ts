// Dependencies
import styled, { CSSObject } from 'styled-components'

// Theme
import { themeCssVars, calc, generateCss, generateStyles } from '../../theme'

// Types
import { CalcType, StatusColor, StatusColors } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'input'

// Functions
const getColorCss = (colorType: StatusColor) => {
  const { main } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {
    borderColor: main,

    '&:hover': {
      borderColor: main
    }
  }

  return generateCss(cssProps)
}

const getColorStyles = () => {
  const styles = generateStyles(StatusColors, BASE_CLASS_NAME, (color: StatusColor) =>
    getColorCss(color)
  )

  return styles
}

export const InputWrapper = styled.div`
  width: 250px;
  padding: ${calc(CalcType.padding, [3.25, 4])};
  margin: ${calc(CalcType.spacing, [2, 0])};
  background: ${themeCssVars.global?.background.paper};
  border: 1px solid ${themeCssVars.palette.text.hint};
  box-sizing: border-box;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: ${calc(CalcType.spacing, 2)};
  &::placeholder {
    color: ${themeCssVars.palette.text.placeholder};
    opacity: 1;
  }
  &:hover {
    border-color: ${themeCssVars.palette.primary.main};
  }
  &.${BASE_CLASS_NAME}-focus {
    border-color: ${themeCssVars.palette.primary.main};
  }
  &.${BASE_CLASS_NAME}-full-width {
    width: 100%;
  }
  ${getColorStyles}
  display: flex;
  align-items: center;
`

export const InputBase = styled.input<any>`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 14px;
  font-family: inherit;
  line-height: 20px;
  outline: none;
  resize: none;
  ${getColorStyles}
`

export const InputIcon = styled.div`
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  height: ${calc(CalcType.spacing, 5)};
  width: ${calc(CalcType.spacing, 5)};

  &.icon-left {
    margin-left: 0;
    margin-right: ${calc(CalcType.spacing, 2)};
  }
  &.icon-right {
    margin-left: ${calc(CalcType.spacing, 2)};
    margin-right: 0;
  }
  &.pointer {
    cursor: pointer;
  }
  & > svg {
    color: ${themeCssVars.palette.text.secondary};
    min-height: 18px;
    min-width: 18px;
  }
`
