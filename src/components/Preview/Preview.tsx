// Dependencies
import React, { FC, useState, useRef } from 'react'

// Components
import Input from '../Input'

// Styles
import {
  StyledPreview,
  StyledPreviewArea,
  StyledPreviewProps,
  StyledPreviewCode,
  StyledTag
} from './Preview.styled'

interface IProps {
  components: any
  initialProps: any
}

const getAttributes = (props: any) => {
  let str = ''

  Object.keys(props).forEach((prop: any) => {
    if (prop !== 'children') {
      str += `
    ${prop}="${props[prop]}"`
    }
  })

  return str
}

const Preview: FC<IProps> = ({ components, initialProps }) => {
  const [props, setProps] = useState<any>(initialProps)
  const Component = components[0].component
  const propsDefinitions = components[0].props
  const fields = Object.keys(propsDefinitions)

  const codeElement = useRef<HTMLElement | null>(null)

  const handleChange = (e: any) => {
    const {
      target: { name, value, checked, type }
    } = e

    let newValue = value

    if (type === 'checkbox') {
      newValue = checked
    }

    if (name === 'children' && value === '') {
      newValue = ' '
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

        <StyledPreviewCode>
          <code className="language-jsx" ref={codeElement}>
            <StyledTag>&nbsp; &lt;{Component.name}</StyledTag>
            {getAttributes(props)}
            {!props.children ? '/' : <> {'\n'}</>}
            &nbsp; <StyledTag>&gt;</StyledTag> {'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;{props.children ? props.children : ''} {'\n'}
            &nbsp;{' '}
            {props.children ? (
              <>
                <StyledTag>&lt;/{Component.name}&gt;</StyledTag>
              </>
            ) : (
              ''
            )}
          </code>
        </StyledPreviewCode>
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
                  <div>
                    <Input name={field} type="text" onChange={handleChange} value={props[field]} />
                  </div>
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
