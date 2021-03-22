import { IBreakpoints } from './breakpoints'
import { IPalette } from './palette'
import { IShape } from './shape'
import { ITypography } from './typography'

export * from './breakpoints'
export * from './color'
export * from './palette'
export * from './shape'
export * from './sizes'
export * from './typography'
export * from './variant'

export default interface Theme {
  breakpoints?: IBreakpoints
  palette: IPalette
  typography?: ITypography
  shape?: IShape
}
