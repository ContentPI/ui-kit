import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const BodyStyles = createGlobalStyle`
  body {
    background-image: url("http://learntechsystems.com/wp-content/uploads/2021/06/bg.png") !important;
    background-position: left;
    background-repeat: repeat-y;
    background-color: #fff !important;
  }
`

export const StyledWrapper = styled.div`
  display: flex;
`

export const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  margin-left: 20px;
  padding-bottom: 500px;
  width: 850px;
  h2 {
    font-weight: 600;
    margin: 0;
  }
  button {
    margin-right: 5px;
  }
`

export const StyledBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
  padding: 20px;

  .block {
    min-width: 100%;
    font-size: 14px;
    strong {
      display: inline-block;
      margin-top: 5px;
      border-radius: 5px;
      font-weight: 500;
      padding: 5px;
      background: #000;
      color: #fff;
    }
  }
  .render {
    margin-top: 20px;
  }
  pre {
    margin-top: 25px;
    min-width: 750px;
  }
`

export const StyledShowCode = styled.div`
  margin-top: 18px;
  font-size: 12px;
  width: 100px;
  cursor: pointer;
`

export const StyledPre = styled.pre`
  display: none;
  border: 1px solid #eee;
  border-radius: 10px;
  background: #333;
  &.show {
    display: block;
  }
`
