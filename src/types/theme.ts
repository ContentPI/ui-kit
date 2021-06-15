import { IBreakpoints } from './breakpoints'
import { IGlobal } from './global'
import { IPalette } from './palette'
import { IShapeTheme } from './shape'
import { ITypography } from './typography'

export interface Theme {
  breakpoints?: IBreakpoints
  global?: IGlobal
  palette: IPalette
  shape?: IShapeTheme
  typography?: ITypography
}
