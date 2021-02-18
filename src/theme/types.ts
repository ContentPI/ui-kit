import { Breakpoints } from './breakpoints'

export type Palette = {
  white: string
  black: string
  danger: {
    100: string
    200: string
    300: string
  }
  dark: {
    100: string
    200: string
    300: string
  }
  info: {
    100: string
    200: string
    300: string
  }
  light: {
    100: string
    200: string
    300: string
  }
  primary: {
    100: string
    200: string
    300: string
  }
  secondary: {
    100: string
    200: string
    300: string
  }
  success: {
    100: string
    200: string
    300: string
  }
  warning: {
    100: string
    200: string
    300: string
  }
  gray: {
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
}

export type FontWeight = {
  100: number
  400: number
  500: number
  600: number
  900: number
}

export type Style = 'light' | 'dark'

export interface Theme {
  breakpoints: Breakpoints
  style: {
    light: any
    dark: any
  }
}
