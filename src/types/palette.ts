export interface ITextColor {
  textPrimary: string
  textSecondary: string
  textDisabled: string
  textHint: string
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
