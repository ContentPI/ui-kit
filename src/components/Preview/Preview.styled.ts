// Dependencies
import styled from 'styled-components'

// Colors
import colors from '../../theme/colors'

const { alabaster, iron, white } = colors

export const StyledPreview = styled.div`
  background-color: ${alabaster};
  border: 1px solid ${iron};
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
`

export const StyledPreviewArea = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledPreviewProps = styled.div`
  border-left: 1px solid ${iron};
  background-color: ${white};
  width: 30%;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-left: 10px;
  }
`
