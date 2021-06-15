import { IBreakpoints } from './breakpoints'
import { IGlobal } from './global'
import { IPalette, IPaletteGlobal } from './palette'
import { IShapeTheme } from './shape'
import { ITypography } from './typography'

export * from './breakpoints'
export * from './calc'
export * from './color'
export * from './fontSize'
export * from './fontWeight'
export * from './global'
export * from './palette'
export * from './shape'
export * from './size'
export * from './theme'
export * from './typography'
export * from './utils'
export * from './variant'

export interface CustomTheme {
  global: IGlobal
  palette?: IPaletteGlobal
}

export default interface Theme {
  breakpoints?: IBreakpoints
  global?: IGlobal
  palette: IPalette
  shape?: IShapeTheme
  typography?: ITypography
}
