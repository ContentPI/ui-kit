import { IBreakpoints } from './breakpoints'
import { IPalette } from './palette'
import { ITypography } from './typography'

export interface Theme {
  breakpoints?: IBreakpoints
  palette: IPalette
  typography?: ITypography
}
