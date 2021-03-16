type Colors = {
  alternativeText: string
  contrastText: string
  dark: string
  light: string
  main: string
}

type Background = {
  paper: string
  default: string
}

export type Palette = {
  background: Background
  primary: Colors
  secondary: Colors
  info: Colors
  success: Colors
  warning: Colors
  danger: Colors
  dark: Colors
  light: Colors
  link: Colors
}
