import { IBreakpoints } from './breakpoints'
import { IGlobal } from './global'
import { IPalette } from './palette'
import { IUnit } from './unit'
import { ITypography } from './typography'

export interface Theme {
  breakpoints?: IBreakpoints
  global?: IGlobal
  palette: IPalette
  unit?: IUnit
  typography?: ITypography
}
