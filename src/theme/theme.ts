import breakpoints from './breakpoints'
import { Theme, Style } from './types'
import { getStyleVars, getRootVars } from './utils'
import palette from './palette'

const getColors = (type: string) => ({
  color: 'white',
  bg: `${type}-100`,
  bc: `${type}-300`,
  hover: {
    color: 'white',
    bg: `${type}-300`,
    bc: `${type}-300`
  },
  outlined: {
    color: `${type}-100`,
    bg: 'white',
    bc: `${type}-200`,
    hover: {
      color: 'white',
      bg: `${type}-100`,
      bc: `${type}-200`
    }
  }
})

const defaultTheme: Theme = {
  breakpoints: breakpoints(),
  style: {
    light: {
      danger: getColors('danger'),
      dark: getColors('dark'),
      info: getColors('info'),
      light: getColors('light'),
      primary: getColors('primary'),
      secondary: getColors('secondary'),
      success: getColors('success'),
      warning: getColors('warning')
    },
    dark: {
      danger: getColors('danger'),
      dark: getColors('dark'),
      info: getColors('info'),
      light: getColors('light'),
      primary: getColors('primary'),
      secondary: getColors('secondary'),
      success: getColors('success'),
      warning: getColors('warning')
    }
  }
}

export const getThemeVars = (): string => {
  const availableStyles = Object.keys(defaultTheme.style)
  let styleVars = ''

  availableStyles.forEach((style: Style) => {
    styleVars += getStyleVars(style, defaultTheme.style[style])
  })

  return getRootVars(palette) + styleVars
}

export default defaultTheme
