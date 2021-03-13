import { FontWeight } from './fontWeight'
import { FontSize } from './fontSize'
import { AlertPalette, ButtonPalette } from './palette'

export type Style = 'light' | 'dark'

export interface Theme {
  global: {
    font: {
      size: FontSize
      weight: FontWeight
    }
  }
  style: {
    light: {
      alert: AlertPalette
      button: ButtonPalette
    }
    dark: {
      alert: AlertPalette
      button: ButtonPalette
    }
  }
}
