import React, { FC } from 'react'
import { StyledBlock, StyledPre, StyledShowCode } from './App.styled'
import Table from '../src/components/Table/index'

type Props = {
  currentComponent: any
  handleShowCode: any
  showCode: number | boolean
}

const Content: FC<Props> = ({ currentComponent, handleShowCode, showCode }) => {
  return (
    <>
      <h2>{currentComponent.component}</h2>
      <Table
        data={{
          columns: ['Name', 'Type', 'Default', 'Description'],
          rows: currentComponent.props.map((prop: any) => [
            prop.name,
            prop.type,
            prop.default,
            prop.description,
          ]),
        }}
      />

      {currentComponent.stories.map((props: any, i: number) => (
        <StyledBlock key={`block-${i}`}>
          <div className="block">
            <h3>{props.name}</h3>
            <p>
              {props.prop ? (
                <>
                  <span className="strong">{props.prop}</span>:
                </>
              ) : (
                ''
              )}{' '}
              {props.description}
            </p>

            <div className="render">
              {typeof props.render === 'function' ? props.render() : props.render}
            </div>

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
