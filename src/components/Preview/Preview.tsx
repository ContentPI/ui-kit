// Dependencies
import React, { FC, Fragment, useState } from 'react'

// Components
import Input from '../Input'

// Styles
import {
  StyledPreview,
  StyledPreviewArea,
  StyledPreviewProps,
  StyledPreviewCode,
  StyledYellow,
  StyledWhite
} from './Preview.styled'

interface IProps {
  components: any
  initialProps: any
}

const getAttributes = (props: any) => {
  let str = ''

  Object.keys(props).forEach((prop: any) => {
    if (prop !== 'children' && props[prop]) {
      if (props[prop] === true) {
        str += `
    <span class="red">${prop}</span>`
      } else {
        str += `
    <span class="red">${prop}</span><span class="white">="</span><span class="green">${props[prop]}</span><span class="white">"</span>`
      }
    }
  })

  return str
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
          <div className="language-jsx">
            &nbsp; <StyledWhite>&lt;</StyledWhite>
            <StyledYellow>{Component.name}</StyledYellow>
            <span dangerouslySetInnerHTML={{ __html: getAttributes(props) }} />
            {!props.children ? '/' : <> {'\n'}</>}
            &nbsp; <StyledWhite>&gt;</StyledWhite> {'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;{props.children ? props.children : ''} {'\n'}
            &nbsp;{' '}
            {props.children ? (
              <>
                <StyledWhite>&lt;/</StyledWhite>
                <StyledYellow>{Component.name}</StyledYellow>
                <StyledWhite>&gt;</StyledWhite>
              </>
            ) : (
              ''
            )}
          </div>
        </StyledPreviewCode>
      </StyledPreviewArea>
      <StyledPreviewProps>
        <h2>Props</h2>
        <ul>
          {fields.map((field: any) => {
            const { type, value } = propsDefinitions[field]

            if (type === 'text') {
              return (
                <li key={field}>
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
                <li key={field}>
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
                <li key={field}>
                  <p>
                    <strong>{field}</strong>
                  </p>
                  <p>
                    <select name={field} onChange={handleChange}>
                      {value.map((v: any) => (
                        <option key={v}>{v}</option>
                      ))}
                    </select>
                  </p>
                </li>
              )
            }

            return <li key={field}>{field}</li>
          })}
        </ul>
      </StyledPreviewProps>
    </StyledPreview>
  )
}

export default Preview
