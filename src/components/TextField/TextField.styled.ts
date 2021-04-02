// Dependencies
import styled from 'styled-components'

// Theme
import { calc, CalcType } from '@theme'

// Components
import { InputWrapper } from '../Input/Input.styled'

// Base Class Name
export const BASE_CLASS_NAME = 'textField'

export const TextFieldBase = styled.div`
  & > ${InputWrapper} {
    margin-top: ${calc(CalcType.spacing, 2)};
  }

  &.${BASE_CLASS_NAME}-full-width {
    width: 100%;
  }

  &.${BASE_CLASS_NAME}-helper-text {
    & > :last-child {
      margin-top: ${calc(CalcType.spacing, 2)};
    }
  }
`