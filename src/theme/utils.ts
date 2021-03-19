// import { Style } from '../types'

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
  const cssVars = {}

  createCSSVars(vars, cssVars, isAssignation)

  return JSON.stringify(cssVars).replace(/\{?}?"?,?/g, '')
}

export const getRootVars = (vars: any): string => `:root {${getCSSVars(vars, true)}}`

// export const getStyleVars = (styleName: Style, style: any): string =>
//   `body[data-theme="${styleName}"]{${getCSSVars(style, true)}}`
