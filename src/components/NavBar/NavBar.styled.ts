// Dependencies
import styled, { CSSObject } from 'styled-components'

// Theme
import { themeCssVars, calc, generateCss, generateStyles } from '../../theme'

// Types
import { BackgroundColor, BackgroundColors, CalcType } from '../../types'

// Components
import Text from '../Text'

// Base Class Name
export const BASE_CLASS_NAME = 'navbar'

// Functions
const getBackgroundColorCss = (color: BackgroundColor) => {
  const backgroundColor = themeCssVars.global?.background[color]
  const cssProps: CSSObject = {
    backgroundColor
  }

  return generateCss(cssProps)
}

const textColorStyles = () => {
  const styles = generateStyles(BackgroundColors, BASE_CLASS_NAME, getBackgroundColorCss)
  return styles
}

export const NavBarBase = styled.header`
  &.${BASE_CLASS_NAME} {
    display: flex;
    align-items: center;
    align-self: flex-start;

    width: 100%;
    padding: ${calc(CalcType.padding, [3, 6])};
    box-sizing: border-box;
  }

  ${textColorStyles()}
`

export const NavBarButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  display: flex;
  align-items: center;

  margin-right: ${calc(CalcType.spacing, 7)};
`

export const NavBarTitle = styled(Text)`
  flex-grow: 1;
`

export const NavBarActions = styled.div`
  display: flex;
  margin-right: ${calc(CalcType.spacing, 6)};

  & > * {
    margin-right: ${calc(CalcType.spacing, 6)};
  }

  & > :last-child {
    margin-right: 0;
  }
`

export const NavBarUserWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const NavBarUserInfo = styled.div`
  margin-left: ${calc(CalcType.spacing, 3)};
`
