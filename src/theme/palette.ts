import { Palette, Style } from '../types'
import colors from './colors'

const {
  alabaster,
  barleyWhite,
  black,
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

export const palette = (style: Style): Palette => {
  const assignColor = (colorA: string, colorB: string) => (style === 'light' ? colorA : colorB)

  return {
    background: {
      paper: assignColor(white, black),
      default: assignColor(whiteLilac, black)
    },
    primary: {
      alternativeText: assignColor(congressBlue, black),
      contrastText: assignColor(white, black),
      dark: assignColor(cerulean, black),
      light: assignColor(onahau, black),
      main: assignColor(lighterCerulean, black)
    },
    secondary: {
      alternativeText: assignColor(mineShaft, black),
      contrastText: assignColor(white, black),
      dark: assignColor(paleSky, black),
      light: assignColor(iron, black),
      main: assignColor(shuttleGray, black)
    },
    info: {
      alternativeText: assignColor(mineShaft, black),
      contrastText: assignColor(white, black),
      dark: assignColor(easternBlue, black),
      light: assignColor(iceberg, black),
      main: assignColor(pacificBlue, black)
    },
    success: {
      alternativeText: assignColor(mineShaft, black),
      contrastText: assignColor(white, black),
      dark: assignColor(greenHaze, black),
      light: assignColor(zanah, black),
      main: assignColor(caribbeanGreen, black)
    },
    warning: {
      alternativeText: assignColor(mineShaft, black),
      contrastText: assignColor(white, black),
      dark: assignColor(webOrange, black),
      light: assignColor(barleyWhite, black),
      main: assignColor(mySin, black)
    },
    danger: {
      alternativeText: assignColor(mineShaft, black),
      contrastText: assignColor(white, black),
      dark: assignColor(lipstick, black),
      light: assignColor(cherub, black),
      main: assignColor(violetRed, black)
    },
    dark: {
      alternativeText: assignColor(gallery, black),
      contrastText: assignColor(white, black),
      dark: assignColor(codGray, black),
      light: assignColor(outerSpace, black),
      main: assignColor(outerSpace, black)
    },
    light: {
      alternativeText: assignColor(outerSpace, black),
      contrastText: assignColor(mako, black),
      dark: assignColor(iron, black),
      light: assignColor(alabaster, black),
      main: assignColor(blackSqueeze, black)
    },
    link: {
      alternativeText: assignColor(mineShaft, black),
      contrastText: assignColor(lighterCerulean, black),
      dark: assignColor(transparent, black),
      light: assignColor(outerSpace, black),
      main: assignColor(transparent, black)
    }
  }
}
