// Dependencies
import React, { FC, useState } from 'react'

// Styles
import {
  StyledPreview,
  StyledContainer,
  StyledPreviewArea,
  StyledComponentWrapper,
  StyledPreviewProps,
  StyledPreviewCode,
  StyledYellow,
  StyledWhite,
  StyledMenu,
  StyledMenuItem
} from './Preview.styled'

interface IProps {
  currentComponent: any
  components: any
}

const getAttributes = (props: any) => {
  let str = ''

  Object.keys(props).forEach((prop: any) => {
    if (prop !== 'children' && props[prop]) {
      if (props[prop] === true) {
        str += `
    <span class="red">${prop}</span>`
      } else if (!isNaN(props[prop]) || typeof props[prop] === 'function') {
        str += `
    <span class="red">${prop}</span><span class="white">={</span><span class="green">${props[prop]}</span><span class="white">}</span>`
      } else {
        str += `
    <span class="red">${prop}</span><span class="white">="</span><span class="green">${props[prop]}</span><span class="white">"</span>`
      }
    }
  })

  return str
}

const Preview: FC<IProps> = ({ currentComponent, components }) => {
  const { component: Component, props: propsDefinitions, initialProps } = currentComponent

  const [props, setProps] = useState<any>(initialProps)

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
      <StyledMenu>
        {components.map((c: any, index: string) => (
          <StyledMenuItem key={c.component.name} href={index}>
            {c.component.name}
          </StyledMenuItem>
        ))}
      </StyledMenu>
      <StyledContainer>
        <h1>{Component.name}</h1>
        <StyledPreviewArea>
          <StyledComponentWrapper>
            <Component {...props} />
          </StyledComponentWrapper>
          <StyledPreviewProps>
            <h2>Props</h2>
            <ul>
              {fields.map((field: any) => {
                const value = propsDefinitions[field]

                if (typeof value === 'string' || typeof value === 'number') {
                  return (
                    <li key={field}>
                      <p>
                        <strong>{field}</strong>
                      </p>
                      <div>
                        <input
                          name={field}
                          type="text"
                          onChange={handleChange}
                          value={props[field]}
                        />
                      </div>
                    </li>
                  )
                }

                if (typeof value === 'boolean') {
                  return (
                    <li key={field}>
                      <p>
                        <strong>{field}</strong>{' '}
                        <input name={field} type="checkbox" onChange={handleChange} />
                      </p>
                    </li>
                  )
                }

                if (value && value.length > 0) {
                  return (
                    <li key={field}>
                      <p>
                        <strong>{field}</strong>
                      </p>
                      <div>
                        <select name={field} onChange={handleChange}>
                          {value.map((v: any) => (
                            <option key={v}>{v}</option>
                          ))}
                        </select>
                      </div>
                    </li>
                  )
                }

                return <li key={field}>{field}</li>
              })}
            </ul>
          </StyledPreviewProps>
        </StyledPreviewArea>

        <StyledPreviewCode>
          <div className="language-jsx">
            &nbsp; <StyledWhite>&lt;</StyledWhite>
            <StyledYellow>{Component.name}</StyledYellow>
            <span dangerouslySetInnerHTML={{ __html: getAttributes(props) }} />
            {!props.children ? (
              <>
                {'\n'}&nbsp;&nbsp;<StyledWhite>/</StyledWhite>
              </>
            ) : (
              <> {'\n'} &nbsp;</>
            )}
            <StyledWhite>&gt;</StyledWhite> {'\n'}
            &nbsp;&nbsp;&nbsp;&nbsp;{props.children ? props.children : ''} {'\n'}
            &nbsp;{' '}
            {props.children ? (
              <>
                <StyledWhite>&lt;/</StyledWhite>
                {props.children ? <StyledYellow>{Component.name}</StyledYellow> : ''}
                <StyledWhite>&gt;</StyledWhite>
              </>
            ) : (
              ''
            )}
          </div>
        </StyledPreviewCode>
      </StyledContainer>
    </StyledPreview>
  )
}

export default Preview
