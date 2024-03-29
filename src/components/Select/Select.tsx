// Dependencies
import React, { FC, ReactElement, useState, useEffect, useRef, MutableRefObject } from 'react'
import { cxGenerator } from '@contentpi/lib'
import { CSSObject } from 'styled-components'

// Types
import { Color, Size } from '../../types'

// Components
import Icon from '../Icon'

// Styles
import { Select, BASE_CLASS_NAME } from './Select.styled'

type Option = {
  option: string
  value: any
  selected?: boolean
}

interface IProps {
  children?: ReactElement
  className?: string
  color?: Color
  id?: string
  label?: string
  name?: string
  noWrapper?: boolean
  onClick(e: any): any
  options?: Option[]
  style?: any
  top?: string
  size?: Size
}

const SelectComponent: FC<IProps> = ({
  className = '',
  color = Color.primary,
  label = '',
  onClick,
  options = null,
  size = Size.small,
  ...selectProps
}) => {
  const classes = [color]

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: classes,
  })

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
        value,
      })

      onClick({ option, value })

      if (open) {
        setOpen(false)
      }
    }
  }

  if (!options) {
    return null
  }

  const renderList = () => {
    const style: CSSObject = { display: open ? 'block' : 'none' }

    if (size === Size.xSmall || size === Size.small) {
      style.maxHeight = '120px'
    }

    if (size === Size.medium) {
      style.maxHeight = '150px'
    }

    if (size === Size.large) {
      style.maxHeight = '300px'
    }

    if (size === Size.xLarge) {
      style.maxHeight = '600px'
    }

    return (
      <ul style={style}>
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
                    selectedOption.value === value ? `var(--palette-${color}-common-main)` : ''
                  }`,
                  color: `${
                    selectedOption.value === value
                      ? `var(--palette-${color}-common-contrastText)`
                      : ''
                  }`,
                }}
                className={className}
              >
                {option}
              </li>
            )
          },
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
      <Select data-component="Select" color={color} className={className} {...selectProps}>
        <>
          <a onClick={handleOpenOnClick} className={classNames}>
            <div>{selectedOption.option || label}</div>
            <div>
              &nbsp;
              <Icon type={`fas fa-caret-${!selectProps.top ? 'down' : 'up'}`} />
            </div>
          </a>
          {renderList()}
        </>
      </Select>
    </div>
  )
}

export default SelectComponent
