import { Theme, Style, FontWeight, FontSize } from '../types'
import { getStyleVars, getRootVars, getButtonColorsVars, getAlertColorsVars } from './utils'
import { palette } from './palette'

const alertVars = getAlertColorsVars()
const buttonVars = getButtonColorsVars()

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
          color: 'white',
          bg: 'blue-i',
          bc: 'blue-j',
          hover: {
            bg: 'blue-a'
          }
        },
        secondary: {
          color: 'gray-a',
          bg: 'gray-m',
          bc: 'gray-n',
          hover: {
            bg: 'gray-f'
          }
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
