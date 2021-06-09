import { IPalette, IGlobal } from '../types'
import { colors } from './colors'

const {
  brightTurquoise,
  caribbeanGreen,
  cerulean,
  cherub,
  congressBlue,
  easternBlue,
  grandis,
  graySuit,
  greenHaze,
  iceberg,
  lighterCerulean,
  lipstick,
  mineShaft,
  mirage,
  onahau,
  oxfordBlue,
  pacificBlue,
  periwinkleGray,
  saffron,
  shark,
  slateGray,
  turquoise,
  violetRed,
  vulcan,
  webOrange,
  white
} = colors

export const dark: IGlobal = {
  background: {
    paper: white,
    main: vulcan,
    light: mirage,
    dark: shark
  },
  palette: {
    text: {
      primary: white,
      secondary: white,
      disabled: white,
      hint: white,
      placeholder: white
    }
  }
}

const palette: IPalette = {
  primary: {
    alternativeText: congressBlue,
    main: lighterCerulean,
    light: onahau,
    dark: cerulean,
    contrastText: white
  },
  info: {
    alternativeText: mineShaft,
    main: pacificBlue,
    light: iceberg,
    dark: easternBlue,
    contrastText: white
  },
  success: {
    alternativeText: brightTurquoise,
    main: caribbeanGreen,
    light: turquoise,
    dark: greenHaze,
    contrastText: white
  },
  warning: {
    alternativeText: mineShaft,
    main: saffron,
    light: grandis,
    dark: webOrange,
    contrastText: white
  },
  danger: {
    alternativeText: mineShaft,
    main: violetRed,
    light: cherub,
    dark: lipstick,
    contrastText: white
  },
  text: {
    primary: oxfordBlue,
    secondary: slateGray,
    disabled: slateGray,
    hint: periwinkleGray,
    placeholder: graySuit
  }
}

export default palette
