// Dependencies
import React, { FC, useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

// Components
import Preview from '../src/components/Preview'
import Button from '../src/components/Button'

// Props
import buttonProps, {
  initialProps as buttonInitialProps
} from '../src/components/Button/Button.props'

// Theme
import { themeVariants, themeRootVars } from '../src/theme'

const GlobalStyle = createGlobalStyle`
  ${themeRootVars}
  ${themeVariants}
`

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 500px;
  h2 {
    font-weight: 600;
    margin: 0;
  }
  button {
    margin-right: 5px;
  }
  .spinners {
    display: flex;
    justify-content: space-between;
    background: #34495e;
    padding: 20px;
  }
`

const PreviewApp: FC = () => {
  const components = [
    {
      component: Button,
      props: buttonProps
    }
  ]

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Preview components={components} initialProps={buttonInitialProps} />
      </StyledApp>
    </>
  )
}

export default PreviewApp
