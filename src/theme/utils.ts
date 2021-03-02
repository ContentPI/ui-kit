import { Style, Color, Colors } from '../types'
import { buttonPalette } from './cssVariables'

export const getButtonColorsVars = () => {
  const styles: any = {}

  Colors.forEach((color: Color) => {
    styles[color] = {
      color: buttonPalette[color].color,
      bg: buttonPalette[color].bg,
      bc: buttonPalette[color].bc,
      hover: {
        color: buttonPalette[color].color,
        bg: buttonPalette[color].hover,
        bc: buttonPalette[color].hover
      },
      outlined: {
        color: buttonPalette[color].outlined.color,
        bg: buttonPalette[color].outlined.bg,
        bc: buttonPalette[color].outlined.bc,
        hover: {
          color: buttonPalette[color].outlined.color,
          bg: buttonPalette[color].outlined.hover,
          bc: buttonPalette[color].outlined.hover
        }
      }
    }
  })

  return styles
}

export const v = (variable: string) => `var(--${variable})`

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

export const getStyleVars = (styleName: Style, style: any): string =>
  `body[data-theme="${styleName}"]{${getCSSVars(style)}}`
