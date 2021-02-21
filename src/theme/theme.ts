import breakpoints from './breakpoints'
import { Theme, Style } from '../types'
import { getStyleVars, getRootVars, getButtonColorsVars } from './utils'
import { palette } from './palette'

const defaultTheme: Theme = {
  breakpoints: breakpoints(),
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
  console.log('STYLEVARS====', styleVars)
  return getRootVars(palette) + styleVars
}

export default defaultTheme
