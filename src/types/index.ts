import { IBreakpoints } from './breakpoints'
import { IPalette } from '../theme/palette'
import { ITypography } from './typography'

export * from './alignment'
export * from './breakpoints'
export * from './calc'
export * from '../theme/color'
export * from './fontSize'
export * from './fontWeight'
export * from './global'
export * from '../theme/palette'
export * from './shape'
export * from './size'
export * from './theme'
export * from './typography'
export * from './utils'
export * from './variant'

export interface CustomTheme {
  palette?: IPalette
}

export default interface Theme {
  breakpoints?: IBreakpoints
  palette: IPalette
  typography?: ITypography
}
