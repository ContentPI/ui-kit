import { FontWeight } from './fontWeight'
import { FontSize } from './fontSize'
import { ComponentPalette } from './palette'

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
      alert: ComponentPalette
      button: ComponentPalette
    }
    dark: {
      alert: ComponentPalette
      button: ComponentPalette
    }
  }
}
