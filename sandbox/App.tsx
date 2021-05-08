// Dependencies
import React, { FC } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Preview from '../src/components/Preview'
import Button, {
  Props as buttonProps,
  initialProps as buttonInitialProps
} from '../src/components/Button'
import Input from '../src/components/Input'

import inputProps, { initialProps as inputInitialProps } from '../src/components/Input/Input.props'

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
      props: buttonProps,
      initialProps: buttonInitialProps
    },
    {
      component: Input,
      props: inputProps,
      initialProps: inputInitialProps
    }
  ]

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Router>
          <Switch>
            <Route
              path="/:currentComponent"
              exact
              children={(props: any) => (
                <Preview
                  componentIndex={props.match?.params.currentComponent || 0}
                  currentComponent={components[props.match?.params.currentComponent || 0]}
                  components={components}
                />
              )}
            />
            <Route
              children={(props: any) => (
                <Preview
                  componentIndex={props.match?.params.currentComponent || 0}
                  currentComponent={components[props.match?.params.currentComponent || 0]}
                  components={components}
                />
              )}
            />
          </Switch>
        </Router>
      </StyledApp>
    </>
  )
}

export default PreviewApp
