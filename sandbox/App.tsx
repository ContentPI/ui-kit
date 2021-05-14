// Dependencies
import React, { FC } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import GlobalStyles from '../src/components/GlobalStyles'
import Preview from '../src/components/Preview'

import Button, {
  Props as buttonProps,
  initialProps as buttonInitialProps
} from '../src/components/Button'

import Font, { initialProps as fontInitialProps } from '../src/components/Font'

import Input, {
  Props as inputProps,
  initialProps as inputInitialProps
} from '../src/components/Input'

import RenderIf, {
  Props as renderIfProps,
  initialProps as renderIfInitialProps
} from '../src/components/RenderIf'

import Pagination, {
  Props as paginationProps,
  initialProps as paginationInitialProps
} from '../src/components/Pagination'

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
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
      component: Font,
      props: {},
      initialProps: fontInitialProps
    },
    {
      component: Input,
      props: inputProps,
      initialProps: inputInitialProps
    },
    {
      component: RenderIf,
      props: renderIfProps,
      initialProps: renderIfInitialProps
    },
    {
      component: Pagination,
      props: paginationProps,
      initialProps: paginationInitialProps
    }
  ]

  return (
    <>
      <GlobalStyles />
      <h2>hello world</h2>
      <Font>
        <h2>hello world with custom font</h2>
      </Font>
      <StyledApp>
        <h2>hello world</h2>
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
