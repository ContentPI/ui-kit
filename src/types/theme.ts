import { FontWeight } from './fontWeight'
import { FontSize } from './fontSize'
import { Palette } from './palette'

export type Style = 'light' | 'dark'

export interface Theme {
  global: {
    font: {
      size: FontSize
      weight: FontWeight
    }
  }
  style: {
    light: Palette
    dark: Palette
  }
}
