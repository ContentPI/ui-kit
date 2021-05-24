// Dependencies
import styled from 'styled-components'

// Colors
import { colors } from '../../theme/colors'

const { white, grandis, easternBlue, greenHaze, slateGray, mineShaft, iron, outerSpace } = colors

export const StyledPreview = styled.div`
  background-color: ${white};
  border: 1px solid ${mineShaft};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
  position: relative;

  h1 {
    margin: 0;
    padding: 0;
    background-color: ${mineShaft};
    color: white;
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    position: absolute;
    padding-top: 10px;
    padding-bottom: 9px;
    widht: 500px;
    display: block;
    left: 0;
    right: 230px;
    z-index: 1;
  }
`

export const StyledPreviewArea = styled.div`
  height: 50vh;
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 30px;
`

export const StyledPreviewProps = styled.div`
  border-left: 1px solid ${mineShaft};
  background-color: ${white};
  width: 30%;

  h2 {
    margin: 0;
    padding: 0;
    background-color: ${mineShaft};
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

    li {
      p {
        margin: 0;
        background-color: ${iron};
        padding-left: 10px;
        font-size: 14px;
        color: ${outerSpace};
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
  color: ${white};
  background: ${mineShaft};
  min-height: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0;

  .red {
    color: ${easternBlue};
  }

  .green {
    color: ${greenHaze};
  }

  .white {
    color: ${slateGray};
  }
`

export const StyledYellow = styled.span`
  color: ${grandis};
`

export const StyledWhite = styled.span`
  color: ${slateGray};
`
