import { Breakpoints } from '../theme/breakpoints'
import { FontWeight } from './fontWeight'
import { FontSize } from './fontSize'

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

type ButtonColor = {
  color: string
  bg: string
  bc: string
  hover: string
  outlined: {
    color: string
    bg: string
    bc: string
    hover: string
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

export type ButtonPalette = {
  danger: ButtonColor
  dark: ButtonColor
  info: ButtonColor
  light: ButtonColor
  link: ButtonColor
  primary: ButtonColor
  secondary: ButtonColor
  success: ButtonColor
  warning: ButtonColor
}

export type Style = 'light' | 'dark'

export interface Theme {
  breakpoints: Breakpoints
  global: {
    font: {
      size: FontSize
      weight: FontWeight
    }
  }
  style: {
    light: {
      btn: any
    }
    dark: {
      btn: any
    }
  }
}
