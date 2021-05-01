// Dependencies
import React, { FC, useState } from 'react'

// Components
import Input from '../Input'

// Styles
import { StyledPreview, StyledPreviewArea, StyledPreviewProps } from './Preview.styled'

interface IProps {
  components: any
  initialProps: any
}

const Preview: FC<IProps> = ({ components, initialProps }) => {
  const [props, setProps] = useState<any>(initialProps)
  const Component = components[0].component
  const propsDefinitions = components[0].props
  const fields = Object.keys(propsDefinitions)

  const handleChange = (e: any) => {
    const {
      target: { name, value, checked, type }
    } = e

    let newValue = value

    if (type === 'checkbox') {
      newValue = checked
    }

    setProps((prevProps: any) => ({
      ...prevProps,
      [name]: newValue
    }))
  }

  return (
    <StyledPreview>
      <StyledPreviewArea>
        <Component {...props} />
      </StyledPreviewArea>
      <StyledPreviewProps>
        <h2>Props</h2>
        <ul>
          {fields.map((field: any) => {
            const { type, value } = propsDefinitions[field]

            if (type === 'text') {
              return (
                <li>
                  <p>
                    <strong>{field}</strong>
                  </p>
                  <p>
                    <Input name={field} type="text" onChange={handleChange} value={props[field]} />
                  </p>
                </li>
              )
            }

            if (type === 'boolean') {
              return (
                <li>
                  <p>
                    <strong>{field}</strong>
                  </p>
                  <p>
                    <input name={field} type="checkbox" onChange={handleChange} />
                  </p>
                </li>
              )
            }

            if (type === 'dropdown') {
              return (
                <li>
                  <p>
                    <strong>{field}</strong>
                  </p>
                  <p>
                    <select name={field} onChange={handleChange}>
                      {value.map((v: any) => (
                        <option>{v}</option>
                      ))}
                    </select>
                  </p>
                </li>
              )
            }

            return <li>{field}</li>
          })}
        </ul>
      </StyledPreviewProps>
    </StyledPreview>
  )
}

export default Preview
