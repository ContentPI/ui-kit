// Dependencies
import React, { FC } from 'react'
import styled from 'styled-components'

// Components
import Icon from '../src/components/Icon'

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
      <StyledApp>
        <h1>Icon</h1>
        <Icon type="fas fa-user" />
      </StyledApp>
    </>
  )
}

export default App
