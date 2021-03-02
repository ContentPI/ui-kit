import { Breakpoints } from '../theme/breakpoints'
import { FontWeight } from './fontWeight'
import { FontSize } from './fontSize'
import { ButtonPalette } from './palette'

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
      button: ButtonPalette
    }
    dark: {
      button: ButtonPalette
    }
  }
}
