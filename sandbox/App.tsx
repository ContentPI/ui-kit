// Dependencies
import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import { Button as MyBtn } from '@Components'
import { theme } from '@Theme'

// Components

// Theme
console.log({ theme })

const GlobalStyle = createGlobalStyle``

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 500px;
  width: 1024px;
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

const App: FC = () => {
  return (
    <>
      <GlobalStyle />

      <StyledApp>
        <h1>Components</h1>
        <MyBtn>Btn</MyBtn>
        <MyBtn>Btn</MyBtn>
        <MyBtn>Btn</MyBtn>
      </StyledApp>
    </>
  )
}

export default App
