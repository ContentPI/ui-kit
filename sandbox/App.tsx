// Dependencies
import React, { FC } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Preview from '../src/components/Preview'
import GlobalStyles from '../src/components/GlobalStyles'

import Button, {
  Props as buttonProps,
  initialProps as buttonInitialProps
} from '../src/components/Button'

import Input, {
  Props as inputProps,
  initialProps as inputInitialProps
} from '../src/components/Input'

import TextArea, {
  Props as textAreaProps,
  initialProps as textAreaInitialProps
} from '../src/components/TextArea'

import TextField, {
  Props as textFieldProps,
  initialProps as textFieldInitialProps
} from '../src/components/TextField'

import RenderIf, {
  Props as renderIfProps,
  initialProps as renderIfInitialProps
} from '../src/components/RenderIf'

import Pagination, {
  Props as paginationProps,
  initialProps as paginationInitialProps
} from '../src/components/Pagination'

import Switcher, {
  Props as switcherProps,
  initialProps as switcherInitialProps
} from '../src/components/Switcher'

import Breadcrumb, { initialProps as BreadcrumbInitialProps } from '../src/components/Breadcrumb'

import Badge, {
  Props as badgeProps,
  initialProps as BadgeInitialProps
} from '../src/components/Badge'

import Table from '../src/components/Table'

import Radio, {
  Props as radioProps,
  initialProps as radioInitialProps
} from '../src/components/Radio'

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  background-color: #fff;
  margin: 0 auto;

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
    },
    {
      component: TextArea,
      props: textAreaProps,
      initialProps: textAreaInitialProps
    },
    {
      component: TextField,
      props: textFieldProps,
      initialProps: textFieldInitialProps
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
    },
    {
      component: Switcher,
      props: switcherProps,
      initialProps: switcherInitialProps
    },
    {
      component: Breadcrumb,
      props: {},
      initialProps: BreadcrumbInitialProps
    },
    {
      component: Badge,
      props: badgeProps,
      initialProps: BadgeInitialProps
    },
    {
      component: Radio,
      props: radioProps,
      initialProps: radioInitialProps
    },
    {
      component: Table,
      props: {},
      initialProps: {}
    }
  ]

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Switch>
            <Route
              path="/:currentComponent"
              exact
              children={(props: any) => (
                <Preview
                  currentComponent={components[props.match?.params.currentComponent || 0]}
                  components={components}
                />
              )}
            />
            <Route
              children={(props: any) => (
                <Preview
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
