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
          bg: 'azureRadiance',
          bc: 'azureRadiance',
          hover: {
            color: 'onahau'
          }
        },
        secondary: {
          color: 'white',
          bg: 'paleSky',
          bc: 'paleSky',
          hover: {
            color: 'iron'
          }
        },
        info: {
          color: 'white',
          bg: 'easternBlue',
          bc: 'easternBlue',
          hover: {
            color: 'iceberg'
          }
        },
        success: {
          color: 'white',
          bg: 'eucalyptus',
          bc: 'eucalyptus',
          hover: {
            color: 'zanah'
          }
        },
        warning: {
          color: 'white',
          bg: 'amber',
          bc: 'amber',
          hover: {
            color: 'barleyWhite'
          }
        },
        danger: {
          color: 'white',
          bg: 'punch',
          bc: 'punch',
          hover: {
            color: 'cherub'
          }
        },
        dark: {
          color: 'white',
          bg: 'black',
          bc: 'black',
          hover: {
            color: 'darkerIron'
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
