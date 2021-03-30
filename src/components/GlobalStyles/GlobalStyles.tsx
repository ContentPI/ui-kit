import { css, createGlobalStyle } from 'styled-components'

// Theme
import { themeRootVars, themeVariants } from '@theme'

// Fonts
import Poppins400WoffEot from '../../fonts/poppins-v15-latin-regular.eot'
import Poppins400WoffTwo from '../../fonts/poppins-v15-latin-regular.woff2'
import Poppins400Woff from '../../fonts/poppins-v15-latin-regular.woff'
import Poppins400Ttf from '../../fonts/poppins-v15-latin-regular.ttf'
import Poppins400Svg from '../../fonts/poppins-v15-latin-regular.svg'

import Poppins500WoffEot from '../../fonts/poppins-v15-latin-500.eot'
import Poppins500WoffTwo from '../../fonts/poppins-v15-latin-500.woff2'
import Poppins500Woff from '../../fonts/poppins-v15-latin-500.woff'
import Poppins500Ttf from '../../fonts/poppins-v15-latin-500.ttf'
import Poppins500Svg from '../../fonts/poppins-v15-latin-500.svg'

import Poppins600WoffEot from '../../fonts/poppins-v15-latin-600.eot'
import Poppins600WoffTwo from '../../fonts/poppins-v15-latin-600.woff2'
import Poppins600Woff from '../../fonts/poppins-v15-latin-600.woff'
import Poppins600Ttf from '../../fonts/poppins-v15-latin-600.ttf'
import Poppins600Svg from '../../fonts/poppins-v15-latin-600.svg'

import Poppins700WoffEot from '../../fonts/poppins-v15-latin-700.eot'
import Poppins700WoffTwo from '../../fonts/poppins-v15-latin-700.woff2'
import Poppins700Woff from '../../fonts/poppins-v15-latin-700.woff'
import Poppins700Ttf from '../../fonts/poppins-v15-latin-700.ttf'
import Poppins700Svg from '../../fonts/poppins-v15-latin-700.svg'

import Poppins800WoffEot from '../../fonts/poppins-v15-latin-800.eot'
import Poppins800WoffTwo from '../../fonts/poppins-v15-latin-800.woff2'
import Poppins800Woff from '../../fonts/poppins-v15-latin-800.woff'
import Poppins800Ttf from '../../fonts/poppins-v15-latin-800.ttf'
import Poppins800Svg from '../../fonts/poppins-v15-latin-800.svg'

const fontStyles = css`
  /* poppins-regular - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    src: url('${Poppins400WoffEot}'); /* IE9 Compat Modes */
    src: local(''), url('${Poppins400WoffEot}') format('embedded-opentype'),
      /* IE6-IE8 */ url('${Poppins400WoffTwo}') format('woff2'),
      /* Super Modern Browsers */ url('${Poppins400Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins400Ttf}') format('truetype'),
      /* Safari, Android, iOS */ url('${Poppins400Svg}') format('svg'); /* Legacy iOS */
  }

  /* poppins-500 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    src: url('${Poppins500WoffEot}'); /* IE9 Compat Modes */
    src: local(''), url('${Poppins500WoffEot}') format('embedded-opentype'),
      /* IE6-IE8 */ url('${Poppins500WoffTwo}') format('woff2'),
      /* Super Modern Browsers */ url('${Poppins500Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins500Ttf}') format('truetype'),
      /* Safari, Android, iOS */ url('${Poppins500Svg}') format('svg'); /* Legacy iOS */
  }
  /* poppins-600 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    src: url('${Poppins600WoffEot}'); /* IE9 Compat Modes */
    src: local(''), url('${Poppins600WoffEot}') format('embedded-opentype'),
      /* IE6-IE8 */ url('${Poppins600WoffTwo}') format('woff2'),
      /* Super Modern Browsers */ url('${Poppins600Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins600Ttf}') format('truetype'),
      /* Safari, Android, iOS */ url('${Poppins600Svg}') format('svg'); /* Legacy iOS */
  }
  /* poppins-700 - latin */
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    src: url('${Poppins700WoffEot}'); /* IE9 Compat Modes */
    src: local(''), url('${Poppins700WoffEot}') format('embedded-opentype'),
      /* IE6-IE8 */ url('${Poppins700WoffTwo}') format('woff2'),
      /* Super Modern Browsers */ url('${Poppins700Woff}') format('woff'),
      /* Modern Browsers */ url('${Poppins700Ttf}') format('truetype'),
      /* Safari, Android, iOS */ url('${Poppins700Svg}') format('svg'); /* Legacy iOS */
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
`

const GlobalStyles = createGlobalStyle`
  ${htmlReset}
  ${fontStyles}
  
  ${themeRootVars}
  ${themeVariants}
`

export default GlobalStyles
