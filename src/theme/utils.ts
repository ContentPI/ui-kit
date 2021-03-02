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

const flatVars = (res: any, key: any, val: any, pre = '-', isAssignation = false): any => {
  const prefix = [pre, key].filter(v => v).join('-')

  return typeof val === 'object'
    ? Object.keys(val).reduce(
        (prev, curr) => flatVars(prev, curr, val[curr], prefix, isAssignation),
        res
      )
    : Object.assign(res, { [prefix]: isAssignation ? `${val};` : `var(--${val});` })
}

export const getCSSVars = (vars: any, prefix = '-', isAssignation = false) => {
  const variables = Object.keys(vars).reduce(
    (prev, curr) => flatVars(prev, curr, vars[curr], prefix, isAssignation),
    {}
  )

  return JSON.stringify(variables).replace(/\{?}?"?,?/g, '')
}

export const getRootVars = (vars: any): string => `:root {${getCSSVars(vars, '-', true)}}`

export const getStyleVars = (styleName: Style, style: any): string =>
  `body[data-theme="${styleName}"]{${getCSSVars(style)}}`
