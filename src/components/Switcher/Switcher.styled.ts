import styled from 'styled-components'
import { colors } from '../../theme'

export const StyledSwitcher = styled.div`
  display: inline-block;
  line-height: 34px;
`

export const StyledText = styled.span`
  padding-left: 15px;
  font-size: 15px;
  color: ${colors.mineShaft};
`

export const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

export const StyledInput = styled.input`
  opacity: 0;
  width: 0px;
  height: 0px;
  &:checked + .slider {
    background-color: ${colors.dodgerBlue};
  }
  &:focus + .slider {
    box-shadow: 0 0 1px ${colors.dodgerBlue};
  }
  &:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`

export const StyledSquareSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.silver};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${colors.white};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`

export const StyledRoundSpan = styled(StyledSquareSpan)`
  border-radius: 34px;
  &:before {
    border-radius: 50%;
  }
`
