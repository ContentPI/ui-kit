export interface IBackground {
  paper: string
  main: string
  light: string
  dark: string
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

export interface IPalette {
  primary: IColor
  info: IColor
  success: IColor
  warning: IColor
  danger: IColor
  text: ITextColors
}
