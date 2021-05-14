import React, { FC } from 'react'
import styled from 'styled-components'

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

export const initialProps = {
  children: 'Text with custom props'
}

const fontFamily = 'Poppins'

const FontWrapper = styled.div`
  @font-face {
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: 400;
    src: url('${Poppins400Woff}') format('woff'), url('${Poppins400Ttf}') format('truetype');
  }

  @font-face {
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: 500;
    src: url('${Poppins500Woff}') format('woff'), url('${Poppins500Ttf}') format('truetype');
  }

  @font-face {
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: 600;
    src: url('${Poppins600Woff}') format('woff'), url('${Poppins600Ttf}') format('truetype');
  }

  @font-face {
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: 700;
    src: url('${Poppins700Woff}') format('woff'), url('${Poppins700Ttf}') format('truetype');
  }

  @font-face {
    font-family: ${fontFamily};
    font-style: normal;
    font-weight: 800;
    src: url('${Poppins800Woff}') format('woff'), url('${Poppins800Ttf}') format('truetype');
  }

  font-family: ${fontFamily};
`
const Font: FC = ({ children }) => {
  return <FontWrapper>{children}</FontWrapper>
}

export default Font
