// Dependencies
import styled from 'styled-components'

// Theme
import { calc, CalcType } from '@theme'

// Components
import { InputWrapper } from '../Input/Input.styled'

// Base Class Name
export const BASE_CLASS_NAME = 'textField'

export const TextFieldBase = styled.div`
  margin-bottom: ${calc(CalcType.spacing, 4)};

  & > ${InputWrapper} {
    margin: ${calc(CalcType.padding, [2, 0])};
  }
`
