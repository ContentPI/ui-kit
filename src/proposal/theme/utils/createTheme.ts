interface CommonProps {
  values: Record<string, any>
  prefix?: string
}

export const generateVarNames = ({ values, prefix = '-' }: CommonProps) => {
  const vars: any[] = []
  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'object') {
      vars.push([key, generateVarNames({ values: value, prefix: `${prefix}-${key}` })])
    } else {
      vars.push([key, `var(${prefix}-${key})`])
    }
  }

  return Object.fromEntries(vars)
}

export const convertToCssVars = ({ values, prefix = '-' }: CommonProps) => {
  const vars: any[] = []
  for (const [key, value] of Object.entries(values)) {
    if (typeof value === 'object') {
      const nestedVars = convertToCssVars({ values: value, prefix: `${prefix}-${key}` })
      for (const [nestedKey, nestedValue] of Object.entries(nestedVars)) {
        vars.push([nestedKey, `${nestedValue}`])
      }
    } else {
      vars.push([`${prefix}-${key}`, `${value};`])
    }
  }
  return Object.fromEntries(vars)
}

export const getThemeVars = (themeName: string, theme: any): string => {
  const cssVars = convertToCssVars({ values: theme })
  const themeVars = Object.entries(cssVars).map(e => e.join(':'))
  const cleanThemeCss = themeVars.join('')

  return `body[data-theme="${themeName}"]{${cleanThemeCss}}`
}

export const generateThemeVars = (themes: Record<string, any>) => {
  const themeNames = Object.keys(themes)
  let allCss = ''

  themeNames.forEach(name => {
    const themeCssVars = getThemeVars(name, themes[name])
    allCss += themeCssVars
  })

  return allCss
}
