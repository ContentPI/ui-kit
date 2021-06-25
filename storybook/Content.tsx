import React, { FC } from 'react'
import { StyledBlock, StyledPre, StyledShowCode } from './App.styled'

type Props = {
  currentComponent: any
  handleShowCode: any
  showCode: number | boolean
}

const Content: FC<Props> = ({ currentComponent, handleShowCode, showCode }) => {
  return (
    <>
      <h2>{currentComponent.component}</h2>
      <div className="props">
        <table>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>

          {currentComponent.props.map((prop: any) => (
            <tr key={prop}>
              <td>{prop.name}</td>
              <td>{prop.type}</td>
              <td>{prop.default}</td>
              <td>{prop.description}</td>
            </tr>
          ))}
        </table>
      </div>

      {currentComponent.stories.map((props: any, i: number) => (
        <StyledBlock key={`block-${i}`}>
          <div className="block">
            <h3>{props.name}</h3>
            <p>
              {props.prop ? (
                <>
                  <strong>{props.prop}</strong>:
                </>
              ) : (
                ''
              )}{' '}
              {props.description}
            </p>

            <div className="render">{props.render}</div>

            <StyledPre className={showCode === i ? 'show' : ''}>
              <code className="language-jsx">{props.code}</code>
            </StyledPre>
          </div>
          <div>
            <StyledShowCode onClick={() => handleShowCode(i)} title="View Code">
              View Code
            </StyledShowCode>
          </div>
        </StyledBlock>
      ))}
    </>
  )
}

export default Content
