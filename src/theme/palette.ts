import { Base, Blue, Gray, Green, Red, Yellow } from '../types/color'

export type ColorPalette = Base | Blue | Gray | Green | Red | Yellow

export type Palette = {
  main: ColorPalette
  light: ColorPalette
  dark: ColorPalette
  contrastText: ColorPalette
}

export const PrimaryPalette: Palette = {
  main: Green.V200,
  light: Green.V100,
  dark: Green.V400,
  contrastText: Base.WHITE,
}

export const SecondaryPalette: Palette = {
  main: Gray.V300,
  light: Gray.V200,
  dark: Gray.V400,
  contrastText: Base.WHITE,
}

export const SuccessPalette: Palette = {
  main: Green.V300,
  light: Green.V200,
  dark: Green.V400,
  contrastText: Base.WHITE,
}

export const InfoPalette: Palette = {
  main: Blue.V100,
  light: Blue.V100,
  dark: Blue.V200,
  contrastText: Base.WHITE,
}

export const WarningPalette: Palette = {
  main: Yellow.V100,
  light: Yellow.V100,
  dark: Yellow.V200,
  contrastText: Base.WHITE,
}

export const DangerPalette: Palette = {
  main: Red.V100,
  light: Red.V100,
  dark: Red.V200,
  contrastText: Base.WHITE,
}

export const LightPalette: Palette = {
  main: Gray.V100,
  light: Gray.V100,
  dark: Gray.V200,
  contrastText: Base.BLACK,
}

export const DarkPalette: Palette = {
  main: Gray.V600,
  light: Gray.V500,
  dark: Gray.V600,
  contrastText: Base.WHITE,
}

const palette = {
  primary: PrimaryPalette,
  secondary: SecondaryPalette,
  success: SuccessPalette,
  info: InfoPalette,
  warning: WarningPalette,
  danger: DangerPalette,
  light: LightPalette,
  dark: DarkPalette,
}

export default palette
