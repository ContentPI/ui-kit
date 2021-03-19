// Dependencies
import styled from 'styled-components'

export const COMPONENT_CLASS_NAME = 'button'

// Functions
// const getColors = (colorType: Color, variant?: ButtonVariants) => {
//   const { dark, main, contrastText } = variables[colorType]
//   const isOutlined = variant === 'outlined'
//   const color = isOutlined ? main : contrastText
//   const backgroundColor = isOutlined ? 'transparent' : main

//   return css`
//     color: ${color};
//     background-color: ${backgroundColor};
//     ${isOutlined ? `border-color: ${main};` : ''}

//     &:hover {
//       color: ${contrastText};
//       background-color: ${dark};
//       ${isOutlined ? `border-color: ${dark};` : ''}

//       a {
//         color: ${contrastText};
//       }
//     }

//     a {
//       color: ${color};
//       &:hover {
//         color: ${contrastText};
//       }
//     }
//   `
// }

export const ButtonBase = styled.button`
  &.${COMPONENT_CLASS_NAME} {
    user-select: none;
    border: 1px solid transparent;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:not(:disabled) {
      cursor: pointer;
    }
    &:disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
`
