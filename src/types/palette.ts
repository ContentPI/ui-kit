type ColorIntensity = {
  a: string
  b: string
  c: string
  d?: string
  e?: string
  f?: string
  g?: string
  h?: string
  i?: string
  j?: string
  k?: string
  l?: string
}

type ColorProps = {
  color: string
  bg: string
  bc: string
  hover?: string
  outlined?: {
    color?: string
    bg?: string
    bc?: string
    hover?: string
  }
}

export type Palette = {
  white: string
  black: string
  blue: ColorIntensity
  gray: ColorIntensity
  green: ColorIntensity
  orange: ColorIntensity
  red: ColorIntensity
}

export type AlertPalette = {
  danger: ColorProps
  dark: ColorProps
  info: ColorProps
  light: ColorProps
  link: ColorProps
  primary: ColorProps
  secondary: ColorProps
  success: ColorProps
  warning: ColorProps
}

export type ButtonPalette = {
  danger: ColorProps
  dark: ColorProps
  info: ColorProps
  light: ColorProps
  link: ColorProps
  primary: ColorProps
  secondary: ColorProps
  success: ColorProps
  warning: ColorProps
}
