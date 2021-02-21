import breakpoints from './breakpoints'
import { Theme, Style, FontWeight, FontSize } from '../types'
import { getStyleVars, getRootVars, getButtonColorsVars } from './utils'
import { palette } from './palette'

const defaultTheme: Theme = {
  breakpoints: breakpoints(),
  global: {
    font: {
      size: FontSize,
      weight: FontWeight
    }
  },
  style: {
    light: {
      btn: getButtonColorsVars()
    },
    dark: {
      btn: getButtonColorsVars()
    }
  }
}

export const getThemeVars = (): string => {
  const availableStyles = Object.keys(defaultTheme.style)
  let styleVars = ''

  availableStyles.forEach((style: Style) => {
    styleVars += getStyleVars(style, defaultTheme.style[style])
  })

  return getRootVars(palette) + getRootVars(defaultTheme.global) + styleVars
}

export default defaultTheme
