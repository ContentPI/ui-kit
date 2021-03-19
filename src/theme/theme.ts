import Theme from '../types'

// Utils
// import { generateVarNames, generateThemeVars } from '../proposal/theme/utils/createTheme'

export const theme: Theme = {
  palette: {
    background: {
      paper: '#fff',
      default: '#F3F5FA'
    },
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
      primary: '#1E1F22',
      secondary: '#768191',
      disabled: '#768191',
      hint: '#768191'
    },
    divider: 'rgba(0, 0, 0, 0.12)'
  },
  shape: {
    borderRadius: 4
  }
}

// export const themeCssVars = generateVarNames({ values: theme })
// export const colorCssVars = themeCssVars.palette
// export const generateTheme = generateThemeVars({
//   light: theme
// })

// console.log({
//   test: generateThemeVars({
//     light: theme,
//     dark: {
//       color: 'red',
//       bg: 'blue'
//     }
//   }),
//   data: generateVarNames({ values: theme })
// })

export default theme
