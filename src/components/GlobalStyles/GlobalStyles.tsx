import { css, createGlobalStyle } from 'styled-components'

// Theme
import { themeRootVars, themeCssVars, themeVariants } from '@theme'

const htmlReset = css`
  * {
    outline: none;
  }
  body {
    margin: 0;
    background-color: ${themeCssVars.global?.background.dark};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`

const GlobalStyles = createGlobalStyle`
  ${htmlReset}

  ${themeRootVars}
  ${themeVariants}
`

export default GlobalStyles
