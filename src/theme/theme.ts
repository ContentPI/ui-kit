import Theme, { IPalette, ITypography, IShape } from '@types'
import { generateVarNames, generateThemeVars } from './utils'

const globalFontFamily = "'Poppins'"

export const palette: IPalette = {
  primary: {
    main: '#00BDE5',
    light: '#00BDE5',
    dark: '#00BDE5',
    contrastText: '#fff'
  },
  info: {
    main: '#1CC8EE',
    light: '#82E9FF',
    dark: '#0096B7',
    contrastText: '#fff'
  },
  success: {
    main: '#00BA88',
    light: '#34EAB9',
    dark: '#00966D',
    contrastText: '#fff'
  },
  warning: {
    main: '#F4B740',
    light: '#FFD789',
    dark: '#946200',
    contrastText: '#fff'
  },
  danger: {
    main: '#ED2E7E',
    light: '#FF84B7',
    dark: '#C30052',
    contrastText: '#fff'
  },
  text: {
    textPrimary: '#1E1F22',
    textSecondary: '#768191',
    textDisabled: '#768191',
    textHint: '#768191'
  }
}
export const typography: ITypography = {
  htmlFontSize: 16,
  fontFamily: globalFontFamily,
  fontSize: 16,
  h1: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: '48px',
    letterSpacing: '0.75px'
  },
  h2: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: '40px',
    letterSpacing: '0.75px'
  },
  h3: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '1.875rem',
    lineHeight: '48px',
    letterSpacing: '0.75px'
  },
  h4: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '1.625rem',
    lineHeight: '32px',
    letterSpacing: '0.75px'
  },
  h5: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '1.375rem',
    lineHeight: '32px',
    letterSpacing: '0.75px'
  },
  h6: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '1.125rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  subtitle1: {
    fontFamily: globalFontFamily,
    fontWeight: 600,
    fontSize: '0.938rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  subtitle2: {
    fontFamily: globalFontFamily,
    fontWeight: 600,
    fontSize: '0.813rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  paragraph1: {
    fontFamily: globalFontFamily,
    fontWeight: 400,
    fontSize: '0.938rem',
    lineHeight: '20px',
    letterSpacing: '0.75px'
  },
  paragraph2: {
    fontFamily: globalFontFamily,
    fontWeight: 400,
    fontSize: '0.813rem',
    lineHeight: '16px',
    letterSpacing: '0.75px'
  },
  caption1: {
    fontFamily: globalFontFamily,
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '16px',
    letterSpacing: '0.75px'
  },
  caption2: {
    fontFamily: globalFontFamily,
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: '16px',
    letterSpacing: '0.75px'
  },
  label: {
    fontFamily: globalFontFamily,
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: '16px',
    letterSpacing: '0.75px',
    textTransform: 'uppercase'
  }
}
export const shape: IShape = {
  unitBase: '4px'
}

export const theme: Theme = {
  palette,
  typography,
  shape
}

export const themeCssVars = generateVarNames({ values: theme })

export const themesCss = generateThemeVars({
  light: theme,
  dark: theme
})

export default theme

// background: {
//   paper: '#fff',
//   main: '#F3F5FA',
//   light: '#FAFAFC',
//   dark: '#F7FAFE'
// },
// divider: 'rgba(0, 0, 0, 0.12)'
