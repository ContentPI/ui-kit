// Dependencies
import styled, { CSSObject } from 'styled-components'

// Theme
import { themeCssVars, calc, CalcType, generateCss, generateStyles } from '@theme'

// Types
import { StatusColor, StatusColors } from '@types'

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

export const InputBase = styled.input`
  width: 250px;
  padding: ${calc(CalcType.padding, [3.5, 4])};
  margin: ${calc(CalcType.spacing, [2, 0])};

  background: ${themeCssVars.global?.background.paper};
  border: 1px solid ${themeCssVars.palette.text.textHint};
  box-sizing: border-box;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: ${calc(CalcType.spacing, 2)};
  font-size: 14px;
  line-height: 20px;

  font-family: 'Poppins';

  &::placeholder {
    color: ${themeCssVars.palette.text.textPlaceholder};
    opacity: 1;
  }

  &:focus,
  :hover {
    border-color: ${themeCssVars.palette.primary.main};
  }

  ${getColorStyles}
`
