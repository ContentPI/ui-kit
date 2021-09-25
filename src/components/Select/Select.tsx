// Dependencies
import React, { FC, ReactElement, useState, useEffect, useRef, MutableRefObject } from 'react'
import { cx } from '@contentpi/lib'

// Types
import { StatusColor } from '../../types'

// Components
import Icon from '../Icon'

// Styles
import { StyledSelect } from './Select.styled'

type Option = {
  option: string
  value: any
  selected?: boolean
}

interface IProps {
  className?: string
  children?: ReactElement
  id?: string
  name?: string
  noWrapper?: boolean
  label?: string
  onClick(e: any): any
  options?: Option[]
  style?: any
  color?: StatusColor
  top?: string
}

const Select: FC<IProps> = props => {
  const {
    label = '',
    options = null,
    onClick,
    color = StatusColor.primary,
    className = '',
    top = false
  } = props

  const [open, setOpen] = useState(false)
  const [selectedOption, setValue] = useState({ option: '', value: '' })
  const node = useRef() as MutableRefObject<HTMLInputElement>

  const handleClickOutside = (e: any) => {
    if (node.current.contains(e.target)) {
      return
    }

    setOpen(false)
  }

  const handleOpenOnClick = () => setOpen(!open)

  const selectOption = (option: string, value: string) => {
    if (option) {
      setValue({
        option,
        value
      })

      onClick({ option, value })

      if (open) {
        setOpen(false)
      }
    }
  }

  if (!options) {
    return <div />
  }

  const renderList = () => {
    return (
      <ul style={{ display: open ? 'block' : 'none' }}>
        {options.map(
          ({ option, value, selected }: { option: string; value: string; selected: boolean }) => {
            if (selected && selectedOption.value === '') {
              selectOption(option, value)
            }

            return (
              <li
                key={`option-${value}`}
                onClick={(): void => selectOption(option, value)}
                style={{
                  background: `${
                    selectedOption.value === value ? `var(--palette-${color}-dark)` : ''
                  }`,
                  color: `${
                    selectedOption.value === value ? `var(--palette-${color}-contrastText)` : ''
                  }`
                }}
              >
                {option}
              </li>
            )
          }
        )}
      </ul>
    )
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div ref={node} style={{ marginTop: '5px', marginBottom: '20px' }}>
      <StyledSelect {...props} color={color} className={cx('select', className)}>
        {top && renderList()}

        <a onClick={handleOpenOnClick}>
          <div>{selectedOption.option || label}</div>
          <div>
            &nbsp;
            <Icon type={`fas fa-caret-${!top ? 'down' : 'up'}`} />
          </div>
        </a>

        {!top && renderList()}
      </StyledSelect>
    </div>
  )
}

export default Select
