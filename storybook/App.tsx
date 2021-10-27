// Dependencies
import React, { FC, useState, useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
// import Switcher from '../src/components/Switcher'
import Sidebar from './Sidebar'
import Content from './Content'

// Stories
import components from './stories'

// Styles
import GlobalStyles from '../src/components/GlobalStyles'
import { StyledWrapper, StyledApp, BodyStyles } from './App.styled'

const App: FC = () => {
  const [showCode, setShowCode] = useState<boolean | number>(false)
  const [isRtl, setIsRtl] = useState(false)

  const handleShowCode = (code: number) => {
    if (showCode !== code) {
      setShowCode(code)
    } else {
      setShowCode(false)
    }
  }

  const handleRtl = () => {
    const dir = !isRtl ? 'rtl' : 'ltr'
    document.documentElement.dir = dir

    setIsRtl(!isRtl)
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
          <Switch>
            <Route
              path="/:currentComponent"
              exact
              children={(props: any) => (
                <>
                  <Sidebar components={components} {...props} />
                  <StyledApp>
                    <span className="rtl">
                      {/* <Switcher
                        label="Switch to RTL"
                        checked={isRtl}
                        onChange={() => handleRtl()}
                      /> */}
                    </span>

                    <Content
                      currentComponent={components[props.match?.params.currentComponent]}
                      handleShowCode={handleShowCode}
                      showCode={showCode}
                    />
                  </StyledApp>
                </>
              )}
            />
            <Route
              children={(props: any) => (
                <>
                  <Sidebar components={components} {...props} />
                  <StyledApp>
                    <span className="rtl">
                      {/* <Switcher
                        label="Switch to RTL"
                        checked={isRtl}
                        onChange={() => handleRtl()}
                      /> */}
                    </span>
                    <Content
                      currentComponent={components.button}
                      handleShowCode={handleShowCode}
                      showCode={showCode}
                    />
                  </StyledApp>
                </>
              )}
            />
          </Switch>
        </Router>
      </StyledWrapper>
    </>
  )
}

export default App
