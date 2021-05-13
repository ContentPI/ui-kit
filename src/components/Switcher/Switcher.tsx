// Dependencies
import React, { FC, ReactElement, ChangeEvent, MouseEvent } from 'react'

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

export const Props = {
  label: '',
  checked: false,
  type: '',
  readOnly: false,
  onChange: () => null,
  onClick: () => null
}

export const initialProps = {
  label: 'Turn on',
  checked: false,
  type: 'round',
  onChange: () => console.log('Change'),
  onClick: () => console.log('Click')
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
