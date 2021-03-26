import { IBreakpoints } from './breakpoints'
import { IGlobal } from './global'
import { IPalette } from './palette'
import { IShape } from './shape'
import { ITypography } from './typography'

export * from './breakpoints'
export * from './color'
export * from './global'
export * from './palette'
export * from './shape'
export * from './sizes'
export * from './typography'
export * from './utils'
export * from './variant'

export default interface Theme {
  breakpoints?: IBreakpoints
  global?: IGlobal
  palette: IPalette
  shape?: IShape
  typography?: ITypography
}
