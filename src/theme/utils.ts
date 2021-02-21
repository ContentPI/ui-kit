import { Style, Color } from '../types'
import { buttonPalette } from './cssVariables'

export const getButtonColorsVars = () => {
  const styles: any = {}

  Object.keys(Color).forEach((color: Color) => {
    styles[color] = {
      color: buttonPalette[color].color,
      bg: buttonPalette[color].bg,
      bc: buttonPalette[color].bc,
      hover: {
        color: buttonPalette[color].color,
        bg: buttonPalette[color].hover,
        bc: buttonPalette[color].hover
      }
    }
  })

  return styles
}

export const v = (variable: string) => `var(--${variable})`

export const createCSSVars = (node: any, prefix = '-', isAssignation = false): any => {
  const vars: any = {}

  for (const [key, value] of Object.entries(node)) {
    if (typeof value === 'object') {
      const nested = createCSSVars(value, `${prefix}-${key}`, isAssignation)

      for (const [nestedKey, nestedValue] of Object.entries(nested)) {
        if (typeof nestedValue === 'object') {
          const nested2 = createCSSVars(nestedValue, `${prefix}-${nestedKey}`, isAssignation)

          for (const [nestedKey2, nestedValue2] of Object.entries(nested2)) {
            vars[nestedKey2] = `${nestedValue2}`
          }
        } else {
          vars[nestedKey] = `${nestedValue}`
        }
      }
    } else {
      vars[`${prefix}-${key}`] = isAssignation ? `${value};` : `var(--${value});`
    }
  }

  return vars
}

export const getCSSVars = (vars: any, prefix = '-', isAssignation = false) =>
  JSON.stringify(createCSSVars(vars, prefix, isAssignation)).replace(/\{?}?"?,?/g, '')

export const getRootVars = (vars: any): string => `:root {${getCSSVars(vars, '-', true)}}`

export const getStyleVars = (styleName: Style, style: any): string =>
  `body[data-theme="${styleName}"]{${getCSSVars(style)}}`
