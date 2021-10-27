// Dependencies
import { css, createGlobalStyle } from 'styled-components'

// Theme
import { themeRootVars, themeCssVars, themeVariants } from '../../theme'

// Fonts
import WorkSansBlackWoff from '../../fonts/worksans/worksans-black.woff'
import WorkSansBlackWoff2 from '../../fonts/worksans/worksans-black.woff2'
import WorkSansExtraBoldWoff from '../../fonts/worksans/worksans-extrabold.woff'
import WorkSansExtraBoldWoff2 from '../../fonts/worksans/worksans-extrabold.woff2'
import WorkSansBoldWoff from '../../fonts/worksans/worksans-bold.woff'
import WorkSansBoldWoff2 from '../../fonts/worksans/worksans-bold.woff2'
import WorkSansSemiboldWoff from '../../fonts/worksans/worksans-semibold.woff'
import WorkSansSemiboldWoff2 from '../../fonts/worksans/worksans-semibold.woff2'
import WorkSansMediumWoff from '../../fonts/worksans/worksans-medium.woff'
import WorkSansMediumWoff2 from '../../fonts/worksans/worksans-medium.woff2'
import WorkSansRegularWoff from '../../fonts/worksans/worksans-regular.woff'
import WorkSansRegularWoff2 from '../../fonts/worksans/worksans-regular.woff2'
import WorkSansLightWoff from '../../fonts/worksans/worksans-light.woff'
import WorkSansLightWoff2 from '../../fonts/worksans/worksans-light.woff2'
import WorkSansExtraLightWoff from '../../fonts/worksans/worksans-extralight.woff'
import WorkSansExtraLightWoff2 from '../../fonts/worksans/worksans-extralight.woff2'
import WorkSansThinWoff from '../../fonts/worksans/worksans-thin.woff'
import WorkSansThinWoff2 from '../../fonts/worksans/worksans-thin.woff2'

const fontStyles = css`
  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 900;
    src: url('${WorkSansBlackWoff}') format('woff'), url('${WorkSansBlackWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 800;
    src: url('${WorkSansExtraBoldWoff}') format('woff'),
      url('${WorkSansExtraBoldWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 700;
    src: url('${WorkSansBoldWoff}') format('woff'), url('${WorkSansBoldWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 600;
    src: url('${WorkSansSemiboldWoff}') format('woff'),
      url('${WorkSansSemiboldWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 500;
    src: url('${WorkSansMediumWoff}') format('woff'), url('${WorkSansMediumWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 400;
    src: url('${WorkSansRegularWoff}') format('woff'),
      url('${WorkSansRegularWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 300;
    src: url('${WorkSansLightWoff}') format('woff'), url('${WorkSansLightWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 200;
    src: url('${WorkSansExtraLightWoff}') format('woff'),
      url('${WorkSansExtraLightWoff2}') format('woff2');
  }

  @font-face {
    font-family: 'WorkSans';
    font-style: normal;
    font-weight: 100;
    src: url('${WorkSansThinWoff}') format('woff'), url('${WorkSansThinWoff2}') format('woff2');
  }
`

const htmlReset = css`
  * {
    outline: none;
  }
  body {
    font-family: 'WorkSans';
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
