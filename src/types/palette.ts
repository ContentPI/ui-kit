export interface ITextColor {
  primary: string
  secondary: string
  disabled: string
  hint: string
  placeholder?: string
}

export interface IColor {
  alternativeText: string
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
  text: ITextColor
}

export interface IPaletteGlobal {
  primary?: IColor
  info?: IColor
  success?: IColor
  warning?: IColor
  danger?: IColor
  text?: ITextColor
}
