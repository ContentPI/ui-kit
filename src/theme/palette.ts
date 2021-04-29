import { IPalette, IGlobal } from '@types'
import colors from './colors'

const {
  alabaster,
  anakiwa,
  barleyWhite,
  black,
  bondiBlue,
  blackSqueeze,
  brightTurquoise,
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
  mirage,
  mineShaft,
  mySin,
  onahau,
  outerSpace,
  pacificBlue,
  paleSky,
  shark,
  shuttleGray,
  transparent,
  violetRed,
  vulcan,
  webOrange,
  white,
  whiteLilac,
  zanah,
  turquoise,
  saffron,
  grandis,
  chelseaGem,
  tickleMePink,
  oxfordBlue,
  slateGray,
  periwinkleGray,
  graySuit
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
    alternativeText: lighterCerulean,
    main: lighterCerulean,
    light: lighterCerulean,
    dark: lighterCerulean,
    contrastText: white
  },
  info: {
    alternativeText: brightTurquoise,
    main: brightTurquoise,
    light: anakiwa,
    dark: bondiBlue,
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
    alternativeText: saffron,
    main: saffron,
    light: grandis,
    dark: chelseaGem,
    contrastText: white
  },
  danger: {
    alternativeText: violetRed,
    main: violetRed,
    light: tickleMePink,
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
