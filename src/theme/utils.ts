import { css, CSSObject } from 'styled-components'

import { themeCssVars } from '@theme'
import Theme, { ValueOf } from '@types'

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

const _calc = (number: number) => `calc(${themeCssVars.shape?.unitBase} * ${number})`

export const CalcType = {
  spacing: 'spacing',
  padding: 'padding'
} as const

export type CalcType = ValueOf<typeof CalcType>
export const CalcTypes = Object.keys(CalcType)

export const calc = (type: CalcType, data: number | number[]) => {
  let calcData = ''

  switch (type) {
    case CalcType.spacing:
      if (typeof data === 'number') {
        calcData = _calc(data)
      }
      break

    case CalcType.padding:
      if (Array.isArray(data)) {
        const padding = []

        const top = data[0]
        const right = data[1]
        const bottom = data[2]
        const left = data[3]

        if (top === 0 || top) padding.push(_calc(top))
        if (right === 0 || right) padding.push(_calc(right))
        if (bottom === 0 || bottom) padding.push(_calc(bottom))
        if (left === 0 || left) padding.push(_calc(left))

        calcData = padding.join(' ')
      }

      break
  }

  return calcData
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
