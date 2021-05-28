import styled from 'styled-components'

export const StyledPagination = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 500 auto;
  margin-top: 90px;
  margin-bottom: 50px;
  width: 100%;
`

export const StyledLi = styled.li`
  margin: 5px;
  a {
    color: #777;
    text-decoration: none;
  }
`

export const StyledLink = styled.span`
  padding: 15px 20px;
  border-radius: 5px;

  &:hover {
    background: #555;
    color: #fff;
  }

  &.active {
    background: #00aeef;
    color: white;
    &:hover {
      background: #23bff3;
      color: white;
    }
  }
`
