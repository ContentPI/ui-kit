// Dependencies
import styled, { CSSObject } from 'styled-components'

// Types
import { generateCss, generateStyles, themeCssVars, calc } from '../../theme'
import { StatusColor, StatusColors, CalcType } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'badge'

// Functions
const getColorCss = (colorType: StatusColor) => {
  const { main } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {
    color: main,
    border: `1px solid ${main}`,
    padding: `${calc(CalcType.padding, [0.5, 2])}`
  }

  return generateCss(cssProps)
}

const badgeColorStyles = () => generateStyles(StatusColors, BASE_CLASS_NAME, getColorCss)

// Styles
export const BadgeBase = styled.div`
  display: inline-block;
  border-radius: 3px;
  border: 1px solid inherit;
  font-size: 14px;
  line-height: 16px;

  ${badgeColorStyles()}
`
