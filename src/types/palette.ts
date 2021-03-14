type ColorIntensity = {
  alabaster?: string
  azalea?: string
  barleyWhite?: string
  blackSqueeze?: string
  blueRibbon?: string
  boulder?: string
  caribbeanGreen?: string
  cerulean?: string
  cherub?: string
  cloudBurst?: string
  codGray?: string
  colonialWhite?: string
  congressBlue?: string
  darkerBlueRibbon?: string
  darkerCerulean?: string
  darkerIron?: string
  darkerOuterSpace?: string
  darkerRedRibbon?: string
  darkerWebOrange?: string
  deepSeaGreen?: string
  easternBlue?: string
  emperor?: string
  frenchPass?: string
  fringyFlower?: string
  gray?: string
  greenHaze?: string
  iceberg?: string
  iron?: string
  jade?: string
  linkWater?: string
  mako?: string
  mineShaft?: string
  mySin?: string
  mystic?: string
  onahau?: string
  outerSpace?: string
  pacificBlue?: string
  paleSky?: string
  parsley?: string
  periwinkleGray?: string
  persianPlum?: string
  powderBlue?: string
  radicalRed?: string
  redRibbon?: string
  scienceBlue?: string
  shuttleGray?: string
  webOrange?: string
  yukonGold?: string
  zanah?: string
}

type ColorProps = {
  color: string
  bg: string
  bc: string
  hover?: {
    bc?: string
    bg?: string
    color?: string
  }
  outlined?: {
    color?: string
    bg?: string
    bc?: string
    hover?: {
      bc?: string
      bg?: string
      color?: string
    }
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
