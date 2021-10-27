// Dependencies
import styled from 'styled-components'

export const StyledPreview = styled.div`
  background-color: white;
  border: 1px solid #333;
  display: grid;
  grid-template-columns: 250px 1fr;
  width: 100%;
  height: 100vh;

  h1 {
    border-bottom: 1px solid #252525;
    padding-left: 1rem;
    font-size: 1.5rem;
    line-height: 36px;
    width: 100%;
  }
`
export const StyledMenu = styled.div`
  border-right: 1px solid #252525;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
`
export const StyledMenuItem = styled.a`
  padding: 1rem;
  border-bottom: 1px solid #eaeaea;
  color: #555;
  text-decoration: none;

  &:hover {
    color: blue;
  }
`
export const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 40px minmax(400px, 5fr) 2fr;
`

export const StyledPreviewArea = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 220px;
`

export const StyledComponentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 30px;
`

export const StyledPreviewProps = styled.div`
  border-left: 1px solid #333;
  background-color: white;

  h2 {
    margin: 0;
    padding: 0;
    background-color: #333;
    color: white;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  input {
    outline: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    max-height: 440px;
    overflow: auto;
    li {
      p {
        margin: 0;
        background-color: #666;
        padding-left: 10px;
        font-size: 14px;
        color: white;
      }

      div {
        padding-left: 10px;
        margin-bottom: 5px;
      }
    }
  }
`

export const StyledPreviewCode = styled.pre`
  font-family: 'Ubuntu Mono', sans-serif;
  color: white;
  background: #333;
  min-height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;

  .red {
    color: red;
  }

  .green {
    color: green;
  }

  .white {
    color: white;
  }
`

export const StyledYellow = styled.span`
  color: yellow;
`

export const StyledWhite = styled.span`
  color: #444;
`
