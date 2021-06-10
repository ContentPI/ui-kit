import { Theme } from '../types'
import palette, { dark } from './palette'
import global from './global'
import typography from './typography'
import unit from './unit'
import { generateVarNames, generateThemeVars, getRootVars } from './utils'

export const theme: Theme = {
  global,
  palette,
  typography,
  unit
}

export const themeCssVars = generateVarNames({ values: theme })
export const themeRootVars = getRootVars(theme)
export const themeVariants = generateThemeVars({
  dark
})

export default theme
