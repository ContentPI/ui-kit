import { Theme, Style, FontWeight, FontSize } from '../types'
import { getStyleVars, getRootVars, getButtonColorsVars, getAlertColorsVars } from './utils'
import { palette } from './palette'

const alertVars = getAlertColorsVars()
const buttonVars = getButtonColorsVars()
console.log({ alertVars })
const defaultTheme: Theme = {
  global: {
    font: {
      size: FontSize,
      weight: FontWeight
    }
  },
  style: {
    light: {
      alert: {
        ...alertVars
      },
      button: {
        ...buttonVars
      }
    },
    dark: {
      alert: {
        ...alertVars,
        primary: {
          ...alertVars.primary,
          bg: 'gray-j',
          bc: 'black'
        }
      },
      button: {
        ...buttonVars
      }
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
