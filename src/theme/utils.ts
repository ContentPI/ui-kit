import { css, CSSObject } from 'styled-components'

import { themeCssVars } from '@theme'
import Theme from '@types'

export const getClass = (BASE_CLASS_NAME: string, className: string) =>
  `${BASE_CLASS_NAME}-${className}`

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
  const cssVars: Record<string, any> = {}
  createCSSVars(vars, cssVars, isAssignation)

  const cleanCss = Object.keys(cssVars)
    .map((key: string) => {
      const value = cssVars[key]
      return `${key}:${value}`
    })
    .join('')

  return cleanCss
}

export const getRootVars = (vars: any): string => `:root {${getCSSVars(vars, true)}}`

export const getStyleVars = (styleName: string, style: any): string =>
  `body[data-theme="${styleName}"]{${getCSSVars(style, true)}}`

interface CommonProps {
  values: Theme
  prefix?: string
}

export const generateVarNames = ({ values, prefix = '-' }: CommonProps): Theme => {
  const vars: any[] = []
  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'object') {
      vars.push([key, generateVarNames({ values: value, prefix: `${prefix}-${key}` })])
    } else {
      vars.push([key, `var(${prefix}-${key})`])
    }
  }
  const themeObject = Object.fromEntries(vars)
  const themeVars: Theme = { ...values, ...themeObject }

  return themeVars
}

export const generateThemeVars = (themes: Record<string, any>) => {
  const themeNames = Object.keys(themes)
  let allCss = ''

  themeNames.forEach(name => {
    const themeCssVars = getStyleVars(name, themes[name])
    allCss += themeCssVars
  })

  return allCss
}

const _calc = (unit: string, multiply: number) => `calc(${unit} * ${multiply})`
// const calc = (type,object) => {}

export const calcSpace = (number: number) => _calc(String(themeCssVars.shape?.unitBase), number)

// TODO: fix padding props (top,right,bottom,left)
export const calcPadding = (left: number, top?: number, right?: number, bottom?: number) => {
  const padding = []
  if (left) padding.push(calcSpace(left))
  if (top) padding.push(calcSpace(top))
  if (right) padding.push(calcSpace(right))
  if (bottom) padding.push(calcSpace(bottom))

  return padding.join(' ')
}

export const generateCss = (cssStyles: CSSObject) => css(cssStyles).join('')

export const generateStyles = (
  data: string[],
  baseName: string,
  cb: (...args: any[]) => string
) => {
  const styles = data
    .map((name: string) => {
      return `
      &.${getClass(baseName, name)} {
        ${cb(name)}
      }
    `
    })
    .join('')

  return styles
}
