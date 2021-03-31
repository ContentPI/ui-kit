import { css, createGlobalStyle } from 'styled-components'

// Theme
import { themeRootVars, themeCssVars, themeVariants } from '@theme'

// Fonts
import Poppins400Woff from '../../fonts/poppins-v15-latin-regular.woff'
import Poppins400Ttf from '../../fonts/poppins-v15-latin-regular.ttf'

import Poppins500Woff from '../../fonts/poppins-v15-latin-500.woff'
import Poppins500Ttf from '../../fonts/poppins-v15-latin-500.ttf'

import Poppins600Woff from '../../fonts/poppins-v15-latin-600.woff'
import Poppins600Ttf from '../../fonts/poppins-v15-latin-600.ttf'

import Poppins700Woff from '../../fonts/poppins-v15-latin-700.woff'
import Poppins700Ttf from '../../fonts/poppins-v15-latin-700.ttf'

import Poppins800Woff from '../../fonts/poppins-v15-latin-800.woff'
import Poppins800Ttf from '../../fonts/poppins-v15-latin-800.ttf'

const fontStyles = css`
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: 
      /* Super Modern Browsers */ url('${Poppins400Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins400Ttf}') format('truetype');
  }

  /* poppins-500 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: 
      /* Super Modern Browsers */ url('${Poppins500Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins500Ttf}') format('truetype');
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: 
      /* Super Modern Browsers */ url('${Poppins600Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins600Ttf}') format('truetype');
  }
  /* poppins-700 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: 
      /* Super Modern Browsers */ url('${Poppins700Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins700Ttf}') format('truetype');
  }
  /* poppins-800 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 800;
    src:
      /* Super Modern Browsers */ url('${Poppins800Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins800Ttf}') format('truetype');
  }
`

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
  ${fontStyles}
  
  ${themeRootVars}
  ${themeVariants}
`

export default GlobalStyles
