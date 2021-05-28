// Dependencies
import styled from 'styled-components'

export const StyledFile = styled.div`
  height: 40px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    .button {
      background-color: #22272a;
    }
  }
`

export const StyledInput = styled.input`
  font-size: 200px;
  cursor: pointer;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const StyledButton = styled.button`
  display: inline-block;
  cursor: pointer;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 1;
  border-radius: 5px;
  border: 1px solid #22272a;
  background-color: #22272a;
  color: white;
`

export const StyledInformation = styled.div`
  color: #999;
  font-size: 12px;
  margin-top: 9px;
`

export const StyledSpan = styled.span`
  color: #ccc;
  font-size: 10px;
  margin-top: 2px;
`

export const StyledDiv = styled.div`
  margin-top: -20px;
`

export const StyledGoodExt = styled.span`
  color: #22272a;
`

export const StyledInvalidExt = styled.span`
  color: red;
`
