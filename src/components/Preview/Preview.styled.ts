// Dependencies
import styled from 'styled-components'

// Colors
import colors from '../../theme/colors'

const { white, grandis, easternBlue, greenHaze, slateGray, mineShaft, iron, outerSpace } = colors

export const StyledPreview = styled.div`
  background-color: ${white};
  border: 1px solid ${mineShaft};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1024px;
  margin: 0 auto;
`

export const StyledPreviewArea = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 30px;
`

export const StyledPreviewAreaWrapper = styled.div`
  border: 1px solid red;
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
  height: auto;
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
