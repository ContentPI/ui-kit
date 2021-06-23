import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    width: 280px;

    h2 {
      text-align: center;
    }

    &:first-child {
      border: none;
    }

    &:first-letter {
      text-transform: capitalize;
    }

    a {
      color: #444;
      font-size: 14px;
      text-decoration: none;
      display: block;
      pading-top: 10px;
      padding-bottom: 10px;
      padding-left: 10px;
      height: 40px;
      line-height: 50px;
      width: 280px;

      &:hover {
        background-color: #fff;
      }
    }
  }
`

type Props = {
  components: any
}

const Sidebar: FC<Props> = ({ components }) => {
  return (
    <>
      <StyledMenu>
        <li>
          <h2>ContentPI Storybook</h2>
        </li>
        {Object.keys(components).map((component: any) => {
          return (
            <li key={component} className="item">
              <Link to={`/${component.toLowerCase()}`}>{component}</Link>
            </li>
          )
        })}
      </StyledMenu>
    </>
  )
}

export default Sidebar
