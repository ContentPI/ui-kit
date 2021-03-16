import { Palette } from '../types'
import colors from './colors'

const {
  alabaster,
  barleyWhite,
  blackSqueeze,
  caribbeanGreen,
  cerulean,
  cherub,
  codGray,
  congressBlue,
  easternBlue,
  gallery,
  greenHaze,
  iceberg,
  iron,
  lighterCerulean,
  lipstick,
  mako,
  mineShaft,
  mySin,
  onahau,
  outerSpace,
  pacificBlue,
  paleSky,
  shuttleGray,
  transparent,
  violetRed,
  webOrange,
  white,
  whiteLilac,
  zanah
} = colors

export const palette: Palette = {
  background: {
    paper: white,
    default: whiteLilac
  },
  primary: {
    alternativeText: congressBlue,
    contrastText: white,
    dark: cerulean,
    light: onahau,
    main: lighterCerulean
  },
  secondary: {
    alternativeText: mineShaft,
    contrastText: white,
    dark: paleSky,
    light: iron,
    main: shuttleGray
  },
  info: {
    alternativeText: mineShaft,
    contrastText: white,
    dark: easternBlue,
    light: iceberg,
    main: pacificBlue
  },
  success: {
    alternativeText: mineShaft,
    contrastText: white,
    dark: greenHaze,
    light: zanah,
    main: caribbeanGreen
  },
  warning: {
    alternativeText: mineShaft,
    contrastText: white,
    dark: webOrange,
    light: barleyWhite,
    main: mySin
  },
  danger: {
    alternativeText: mineShaft,
    contrastText: white,
    dark: lipstick,
    light: cherub,
    main: violetRed
  },
  dark: {
    alternativeText: gallery,
    contrastText: white,
    dark: codGray,
    light: outerSpace,
    main: outerSpace
  },
  light: {
    alternativeText: outerSpace,
    contrastText: mako,
    dark: iron,
    light: alabaster,
    main: blackSqueeze
  },
  link: {
    alternativeText: mineShaft,
    contrastText: lighterCerulean,
    dark: transparent,
    light: outerSpace,
    main: transparent
  }
}
