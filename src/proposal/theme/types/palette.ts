export interface IBackground {
  paper: string
  default: string
}

export interface ITextColors {
  primary: string
  secondary: string
  disabled: string
  hint: string
}

export interface IColor {
  main: string
  light: string
  dark: string
  contrastText: string
}

export default interface IPalette {
  background: IBackground
  primary: IColor
  secondary: IColor
  info: IColor
  success: IColor
  warning: IColor
  danger: IColor
  text: ITextColors
  divider: string
}
