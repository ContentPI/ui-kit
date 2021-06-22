import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    padding: 10px;
    width: 280px;

    &:first-letter {
      text-transform: capitalize;
    }

    .item {
      color: #222;
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
