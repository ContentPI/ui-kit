// Dependencies
import React, { FC, useEffect, useState, memo } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx.min'
import styled, { createGlobalStyle } from 'styled-components'

// Components
import Icon from '../src/components/Icon'

// Theme
import { getThemeVars } from '../src/theme'

// Data
import { buttons, CodeBlock } from './data'

const componentsToRender = [...buttons]

export const Toggle: FC = () => {
  const [theme, setTheme] = useState('light')
  const nextTheme = theme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  return <button onClick={() => setTheme(nextTheme)}>Change to {nextTheme} mode</button>
}

const cssVars = getThemeVars()

const GlobalStyle = createGlobalStyle`
  ${cssVars}
`

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

const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .block {
    min-width: 100%;
    strong {
      border-radius: 5px;
      font-weight: 500;
      padding: 4px;
      background: #eee;
    }
  }
  pre {
    min-width: 750px;
  }
`
const StyledShowCode = styled.div`
  margin-top: 18px;
  cursor: pointer;
`

const StyledPre = styled.pre`
  display: none;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #333;
  &.show {
    display: block;
  }
`

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
    if (showCode >= 0) {
      Prism.highlightAll()
    }
  }, [showCode])

  const CodeBlock = memo(({ title, prop, description, render, code, i }: any) => {
    return (
      <StyledBlock key={`block-${i}`}>
        <div className="block">
          <h3>{title}</h3>
          <p>
            {prop ? (
              <>
                <strong>{prop}</strong>:
              </>
            ) : (
              ''
            )}{' '}
            {description}
          </p>

          {render}

          <StyledPre className={showCode === i ? 'show' : ''}>
            <code className="language-jsx">{code}</code>
          </StyledPre>
        </div>
        <div>
          <StyledShowCode onClick={() => handleShowCode(i)} title="View Code">
            <Icon type="code" library="feather" />
          </StyledShowCode>
        </div>
      </StyledBlock>
    )
  })

  return (
    <>
      <GlobalStyle />

      <StyledApp>
        <Toggle />
        <h1>Components</h1>
        {componentsToRender.map((props: CodeBlock, i: number) => (
          <CodeBlock key={`code-${i}`} {...props} i={i} />
        ))}
      </StyledApp>
    </>
  )
}

export default App
