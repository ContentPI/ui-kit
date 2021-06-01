import React, { FC } from 'react'
import styled from 'styled-components'

// Components
import ToastProvider from '../src/components/Toast/ToastContext'
import Toaster from '../src/components/Toast/Toaster'
import useToast from '../src/components/Toast/useToast'

const StyledSandbox = styled.div`
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

const Sandbox: FC = () => {
  const { createToast } = useToast()

  return (
    <StyledSandbox>
      <h2>Toast</h2>

      <p>
        <a
          href="#"
          onClick={() => {
            createToast({
              content: 'Hola Carlos!...'
            })
          }}
        >
          Open Toast 1
        </a>
      </p>

      <p>
        <a
          href="#"
          onClick={() => {
            createToast({
              content: 'Hola criss..'
            })
          }}
        >
          Open Toast 2
        </a>
      </p>

      <Toaster />
    </StyledSandbox>
  )
}

const App: FC = () => {
  return (
    <ToastProvider maxToasts={5} position="top right" duration={2000}>
      <Sandbox />
    </ToastProvider>
  )
}

export default App
