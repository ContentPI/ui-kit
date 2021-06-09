import { ITypography } from '../types'

const globalFontFamily = "'Poppins'"

const typography: ITypography = {
  htmlFontSize: 16,
  fontFamily: globalFontFamily,
  fontSize: 16,
  h1: {
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: '48px',
    letterSpacing: '0.75px'
  },
  h2: {
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: '40px',
    letterSpacing: '0.75px'
  },
  h3: {
    fontWeight: 700,
    fontSize: '1.875rem',
    lineHeight: '48px',
    letterSpacing: '0.75px'
  },
  h4: {
    fontWeight: 700,
    fontSize: '1.625rem',
    lineHeight: '32px',
    letterSpacing: '0.75px'
  },
  h5: {
    fontWeight: 700,
    fontSize: '1.375rem',
    lineHeight: '32px',
    letterSpacing: '0.75px'
  },
  h6: {
    fontWeight: 700,
    fontSize: '1.125rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: '0.938rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  subtitle2: {
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  },
  paragraph1: {
    fontWeight: 400,
    fontSize: '0.938rem',
    lineHeight: '20px',
    letterSpacing: '0.75px'
  },
  paragraph2: {
    fontWeight: 400,
    fontSize: '0.813rem',
    lineHeight: '16px',
    letterSpacing: '0.75px'
  },
  caption1: {
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: '16px',
    letterSpacing: '0.75px'
  },
  caption2: {
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '18px'
  },
  label: {
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: '24px',
    letterSpacing: '0.75px'
  }
}

export default typography
