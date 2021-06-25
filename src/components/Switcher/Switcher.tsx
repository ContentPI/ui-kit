// Dependencies
import React, { FC, ChangeEvent, MouseEvent } from 'react'

// Styles
import {
  StyledSwitcher,
  StyledLabel,
  StyledInput,
  StyledRoundSpan,
  StyledSquareSpan,
  StyledText
} from './Switcher.styled'

interface IProps {
  label?: string
  checked?: boolean
  type?: string
  readOnly?: boolean
  onChange?(e: ChangeEvent<HTMLInputElement>): void
  onClick?(e: MouseEvent<HTMLInputElement>): void
}

const Switcher: FC<IProps> = ({ label = '', type, readOnly, onChange, checked = false }) => (
  <>
    <StyledSwitcher>
      <StyledLabel>
        <StyledInput type="checkbox" onChange={onChange} checked={checked} readOnly={readOnly} />
        {type === 'round' ? (
          <StyledRoundSpan className="slider" />
        ) : (
          <StyledSquareSpan className="slider" />
        )}
      </StyledLabel>
      &nbsp;
      <StyledText>{label}</StyledText>
    </StyledSwitcher>
  </>
)

export default Switcher
