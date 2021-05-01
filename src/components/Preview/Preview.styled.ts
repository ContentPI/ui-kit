// Dependencies
import styled from 'styled-components'

// Colors
import colors from '../../theme/colors'

const { alabaster, white, grandis, easternBlue, greenHaze, slateGray, mineShaft } = colors

export const StyledPreview = styled.div`
  background-color: ${alabaster};
  border: 1px solid ${mineShaft};
  display: flex;
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

export const StyledPreviewProps = styled.div`
  border-left: 1px solid ${mineShaft};
  background-color: ${white};
  width: 30%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-left: 10px;
  }
`

export const StyledPreviewCode = styled.pre`
  font-family: 'Ubuntu Mono', sans-serif;
  color: ${white};
  background: ${mineShaft};
  align-self: center;
  position: absolute;
  bottom: -16px;
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-bottom: 20px;

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
