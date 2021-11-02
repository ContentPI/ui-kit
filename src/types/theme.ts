import { IBreakpoints } from './breakpoints'
import { IPalette } from '../theme/palette'
import { ITypography } from './typography'

export interface Theme {
  breakpoints?: IBreakpoints
  palette: IPalette
  typography?: ITypography
}
