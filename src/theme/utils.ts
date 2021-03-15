import { forEach } from '@contentpi/lib'
import { Style, Color, Colors, ColorProps } from '../types'
import { buttonPalette, alertPalette } from './cssVariables'

export const getAlertColorsVars = () => {
  const styles: any = {}

  Colors.forEach((color: Color) => {
    styles[color] = {
      color: alertPalette[color].color,
      bg: alertPalette[color].bg,
      bc: alertPalette[color].bc,
      hover: {
        color: alertPalette[color].hover?.color
      }
    }
  })

  return styles
}

export const getButtonColorsVars = () => {
  const styles: any = {}

  Colors.forEach((color: Color) => {
    styles[color] = {
      color: buttonPalette[color].color,
      bg: buttonPalette[color].bg,
      bc: buttonPalette[color].bc,
      hover: {
        color: buttonPalette[color].hover?.color,
        bg: buttonPalette[color].hover?.bg,
        bc: buttonPalette[color].hover?.bc
      },
      outlined: {
        color: buttonPalette[color].outlined?.color,
        bg: buttonPalette[color].outlined?.bg,
        bc: buttonPalette[color].outlined?.bc,
        hover: {
          color: buttonPalette[color].outlined?.hover?.color,
          bg: buttonPalette[color].outlined?.hover?.bg,
          bc: buttonPalette[color].outlined?.hover?.bc
        }
      }
    }
  })

  return styles
}

export const v = (variable: any) => (variable ? `var(--${variable})` : '')

export const getClass = (BASE_CLASS_NAME: string, className: string) =>
  `${BASE_CLASS_NAME}-${className}`

const createCSSVars = (node: any, cssVars: any, isAssignation = false, nestedKey?: string) => {
  for (const key in node) {
    if (node.hasOwnProperty(key)) {
      const newKey = !nestedKey ? `--${key}` : `${nestedKey}-${key}`

      const value = node[key]

      if (typeof value === 'object') {
        createCSSVars(value, cssVars, isAssignation, newKey)
      } else {
        cssVars[newKey] = isAssignation ? `${value};` : `var(--${value});`
      }
    }
  }
}

export const getCSSVars = (vars: any, isAssignation = false) => {
  const cssVars = {}

  createCSSVars(vars, cssVars, isAssignation)

  return JSON.stringify(cssVars).replace(/\{?}?"?,?/g, '')
}

export const getRootVars = (vars: any): string => `:root {${getCSSVars(vars, true)}}`

export const getStyleVars = (styleName: Style, style: any): string => {
  const { alert, button } = style

  const defineCSSVariables = (alertPalette: ColorProps, buttonPalette: ColorProps) => ({
    '--alert-color': v(alertPalette.color),
    '--alert-bg': v(alertPalette.bg),
    '--alert-bc': v(alertPalette.bc),
    '--alert-hover-color': v(alertPalette.hover?.color),
    '--button-bg': v(buttonPalette.bg),
    '--button-bc': v(buttonPalette.bc),
    '--button-color': v(buttonPalette.color),
    '--button-hover-color': v(buttonPalette.hover?.color),
    '--button-hover-bg': v(buttonPalette.hover?.bg),
    '--button-hover-bc': v(buttonPalette.hover?.bc),
    '--button-outlined-color': v(buttonPalette.outlined?.color),
    '--button-outlined-bg': v(buttonPalette.outlined?.bg),
    '--button-outlined-bc': v(buttonPalette.outlined?.bc),
    '--button-outlined-hover-color': v(buttonPalette.outlined?.hover?.color),
    '--button-outlined-hover-bg': v(buttonPalette.outlined?.hover?.bg),
    '--button-outlined-hover-bc': v(buttonPalette.outlined?.hover?.bc)
  })

  const cssVars: any = {
    danger: defineCSSVariables(alert.danger, button.danger),
    dark: defineCSSVariables(alert.dark, button.dark),
    info: defineCSSVariables(alert.info, button.info),
    light: defineCSSVariables(alert.light, button.light),
    link: defineCSSVariables(alert.link, button.link),
    primary: defineCSSVariables(alert.primary, button.primary),
    secondary: defineCSSVariables(alert.secondary, button.secondary),
    success: defineCSSVariables(alert.success, button.success),
    warning: defineCSSVariables(alert.warning, button.warning)
  }

  let definitions = ''

  forEach(cssVars, (color: string) => {
    definitions += `.theme__${styleName} .context__${color} {`

    forEach(cssVars[color], (cssVar: string) => {
      definitions += `${cssVar}: ${cssVars[color][cssVar]};`
    })

    definitions += '}'
  })

  return definitions
}
