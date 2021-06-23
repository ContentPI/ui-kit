// Dependencies
import React, { FC, useState, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Sidebar from './Sidebar'
import Content from './Content'

// Stories
import components from './stories'

// Styles
import GlobalStyles from '../src/components/GlobalStyles'
import { StyledWrapper, StyledApp, BodyStyles } from './App.styled'

const App: FC = () => {
  const [showCode, setShowCode] = useState<boolean | number>(false)

  const handleShowCode = (code: number) => {
    if (showCode !== code) {
      setShowCode(code)
    } else {
      setShowCode(false)
    }
  }

  useEffect(() => {
    Prism.highlightAll()
  }, [showCode])

  return (
    <>
      <GlobalStyles />
      <BodyStyles />
      <StyledWrapper>
        <Router>
          <Sidebar components={components} />
          <StyledApp>
            <Switch>
              <Route
                path="/:currentComponent"
                exact
                children={(props: any) => (
                  <Content
                    currentComponent={components[props.match?.params.currentComponent]}
                    handleShowCode={handleShowCode}
                    showCode={showCode}
                  />
                )}
              />
              <Route
                children={() => (
                  <Content
                    currentComponent={components.button}
                    handleShowCode={handleShowCode}
                    showCode={showCode}
                  />
                )}
              />
            </Switch>
          </StyledApp>
        </Router>
      </StyledWrapper>
    </>
  )
}

export default App
