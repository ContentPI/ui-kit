import { Theme, Style, FontWeight, FontSize } from '../types'
import { getStyleVars, getRootVars } from './utils'
import { palette } from './palette'

const defaultTheme: Theme = {
  global: {
    font: {
      size: FontSize,
      weight: FontWeight
    }
  },
  style: {
    light: palette('light'),
    dark: palette('dark')
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
