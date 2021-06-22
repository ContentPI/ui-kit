import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const BodyStyles = createGlobalStyle`
  body {
    background-image: url("https://doc-0c-1g-docs.googleusercontent.com/docs/securesc/iprdrqsb6adh9fio2kkesco3ek4a0ee1/jm1vc4o5u9klnh80r1gqe693lhlaviuj/1624405050000/15210038916844597607/15210038916844597607/1RSnrLd-iSBue1pegk_UKvx8vTL5slAao?e=view&authuser=0") !important;
    background-position: left;
    background-repeat: repeat-y;
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
  width: 800px;
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
    strong {
      border-radius: 5px;
      font-weight: 500;
      padding: 4px;
      background: #eee;
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
