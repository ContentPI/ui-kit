// Dependencies
import { css, CSSObject } from 'styled-components'

// Theme
import { themeCssVars } from './theme'

// Types
import { Theme, CalcType, Color, ButtonVariant } from '../types'

type CommonProps = {
  values: Theme
  prefix?: string
}

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
    .map((key: string) => `${key}:${cssVars[key]}`)
    .join('')

  return cleanCss
}

export const getRootVars = (vars: any): string => `:root {${getCSSVars(vars, true)}}`

export const getStyleVars = (styleName: string, style: any): string =>
  `body[data-theme="${styleName}"]{${getCSSVars(style, true)}}`

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

const _calc = (number: number) => `calc(4px * ${number})`

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
  cb: (...args: any[]) => string,
) => {
  const styles = data
    .map(
      (name: string) => `
      &.${getClass(baseName, name)} {
        ${cb(name)}
      }
    `,
    )
    .join('')

  return styles
}

export const getVariantCssProps = () => {
  const { primary, info, success, warning, danger } = themeCssVars.palette

  const getContainedProps = (palette: any) => ({
    color: palette.contrastText,
    backgroundColor: palette.main,
    hover: {
      backgroundColor: palette.dark,
      color: palette.contrastText,
    },
  })

  const getOutlinedProps = (palette: any) => ({
    color: palette.main,
    backgroundColor: 'transparent',
    hover: {
      backgroundColor: palette.contrastText,
      color: palette.main,
    },
  })

  const textProps = {
    backgroundColor: 'white',
  }

  const cssProps: any = {
    [Color.danger]: {
      [ButtonVariant.contained]: getContainedProps(danger),
      [ButtonVariant.outlined]: getOutlinedProps(danger),
      [ButtonVariant.text]: textProps,
      default: getContainedProps(danger),
    },
    [Color.info]: {
      [ButtonVariant.contained]: getContainedProps(info),
      [ButtonVariant.outlined]: getOutlinedProps(info),
      [ButtonVariant.text]: textProps,
      default: getContainedProps(info),
    },
    [Color.primary]: {
      [ButtonVariant.contained]: getContainedProps(primary),
      [ButtonVariant.outlined]: getOutlinedProps(primary),
      [ButtonVariant.text]: textProps,
      default: getContainedProps(primary),
    },
    [Color.success]: {
      [ButtonVariant.contained]: getContainedProps(success),
      [ButtonVariant.outlined]: getOutlinedProps(success),
      [ButtonVariant.text]: textProps,
      default: getContainedProps(success),
    },
    [Color.warning]: {
      [ButtonVariant.contained]: getContainedProps(warning),
      [ButtonVariant.outlined]: getOutlinedProps(warning),
      [ButtonVariant.text]: textProps,
      default: getContainedProps(warning),
    },
  }

  return cssProps
}

export const getColorStyles = (colorType: any, baseClassName: string, themeCssVars: any) => {
  const paletteType: any = themeCssVars.palette[colorType]
  const palette: any = paletteType[baseClassName] ?? paletteType.common

  return (cssProps: any) => {
    const css = { ...cssProps }

    if (css.backgroundColor) {
      css.backgroundColor = palette[cssProps.backgroundColor] ?? cssProps.backgroundColor
    }

    if (css.borderColor) {
      css.borderColor = palette[cssProps.borderColor] ?? cssProps.borderColor
    }

    if (css.color) {
      css.color = palette[cssProps.color] ?? cssProps.color
    }

    if (css['&:hover']) {
      css['&:hover'] = {
        ...css['&:hover'],
        backgroundColor:
          palette[cssProps['&:hover'].backgroundColor] ?? cssProps['&:hover'].backgroundColor,
        color: palette[cssProps['&:hover'].color] ?? cssProps['&:hover'].color,
      }
    }

    if (css['&:hover a']) {
      css['&:hover a'] = {
        ...css['&:hover a'],
        color: palette[cssProps['&:hover a'].color] ?? cssProps['&:hover a'].color,
      }
    }

    if (css.a) {
      css.a = {
        ...css.a,
        color: palette[cssProps.a.color] ?? cssProps.a.color,
      }
    }

    return css
  }
}

export const mapColorStyles = (
  colors: any,
  baseClassName: string,
  themeCssVars: any,
  cssProps: any,
) => {
  const cssArray = colors.map((color: Color) => ({
    [`&.${baseClassName}-${Color[color]}`]: {
      ...getColorStyles(Color[color], baseClassName, themeCssVars)(cssProps),
    },
  }))

  const cssObject = Object.assign({}, ...cssArray)
  console.log('cssObject===', cssObject)

  return cssObject
}
