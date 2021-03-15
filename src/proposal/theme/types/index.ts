import IBreakpoints from './breakpoints'
import ITypography from './typography'
import IShape from './shape'
import IPalette from './palette'

export default interface Theme {
  breakpoints?: IBreakpoints
  palette: IPalette
  typography?: ITypography
  shape: IShape
}
