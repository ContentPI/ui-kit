import { Breakpoints } from '../theme/breakpoints'

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

export type FontWeight = {
  lighter: number
  normal: number
  semibold: number
  bold: number
  heavy: number
}

export type Style = 'light' | 'dark'

export interface Theme {
  breakpoints: Breakpoints
  style: {
    light: any
    dark: any
  }
}
