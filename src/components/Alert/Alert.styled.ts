import styled from 'styled-components'

import { Alignment, Color, Colors, Shape, FontSize, FontWeight } from '../../types'

// Theme
import { v, getClass } from '../../theme'

// Functions
const getColorStyles = () => {
  const color = `${BASE_CLASS_NAME}-color`
  const bg = `${BASE_CLASS_NAME}-bg`
  const bc = `${BASE_CLASS_NAME}-bc`
  const hover = {
    color: `${BASE_CLASS_NAME}-hover-color`
  }

  return `
    color: ${v(color)};
    background-color: ${v(bg)};
    border-color: ${v(bc)};

    a {
      color: ${v(color)};
      text-decoration: none;
      font-weight: ${FontWeight.bold};

      &:hover {
        color: ${v(hover.color)}
      }
    }
  `
}

const getColors = () => {
  let styles = ''

  Colors.forEach((color: Color) => {
    styles += `
      &.${getClass(BASE_CLASS_NAME, color)} {
        ${getColorStyles()}
      }
    `
  })

  return styles
}

// Base Class Name
export const BASE_CLASS_NAME = 'alert'

export const StyledAlert = styled.div`
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  font-size: ${FontSize.medium - 1}px;
  font-weight: ${FontWeight.normal};
  margin-bottom: 1rem;
  padding: 0.75rem 1.25rem;
  position: relative;
  user-select: none;

  &.${getClass(BASE_CLASS_NAME, Alignment.center)} {
    text-align: ${Alignment.center};
  }

  &.${getClass(BASE_CLASS_NAME, Alignment.right)} {
    text-align: ${Alignment.right};
  }

  &.${getClass(BASE_CLASS_NAME, Shape.round)} {
    border-radius: 30px;
  }

  &.${getClass(BASE_CLASS_NAME, Shape.square)} {
    border-radius: 0;
  }

  ${getColors()}
`
