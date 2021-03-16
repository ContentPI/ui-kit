import styled from 'styled-components'

import { Alignment, Color, Colors, Shape, FontSize, FontWeight } from '../../types'
import variables from '../../theme/cssVariables'

// Theme
import { getClass } from '../../theme'

// Functions
const getColors = (colorType: Color) => {
  const { alternativeText, dark, light, contrastText } = variables[colorType]

  const color = alternativeText
  const backgroundColor = light

  return `
    color: ${color};
    background-color: ${backgroundColor};

    a {
      color: ${color};
      text-decoration: none;
      font-weight: ${FontWeight.bold};

      &:hover {
        color: ${colorType === 'dark' ? contrastText : dark}
      }
    }
  `
}

const getColorStyles = () => {
  let styles = ''

  Colors.forEach((color: Color) => {
    styles += `
      &.${getClass(BASE_CLASS_NAME, color)} {
        ${getColors(color)}
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

  ${getColorStyles()}
`
