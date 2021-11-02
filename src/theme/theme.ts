// Utils
import { generateVarNames, getRootVars, generateThemeVars } from './utils'

// Types
import Theme from '../types'

// Palette
import palette from './palette'

// Typescript
import typography from './typography'

// Custom Themes
import foo from './styles/foo'
import bar from './styles/bar'

const theme: Theme = {
  typography,
  palette,
}

export const themeCssVars = generateVarNames({ values: theme })
export const themeRootVars = getRootVars(theme)
export const customThemesCssVars = generateThemeVars({
  foo,
  bar,
})

export default theme
