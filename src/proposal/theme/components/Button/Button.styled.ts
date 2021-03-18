// Dependencies
import styled, { css } from 'styled-components'

import { colorCssVars } from '../../theme'

export const COMPONENT_CLASS_NAME = 'button'

const buttonSizes = {
  sm: css`
    &.${COMPONENT_CLASS_NAME}-sm {
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
      line-height: 1.25rem;
      border-radius: 3px;
    }
  `,
  md: css`
    &.${COMPONENT_CLASS_NAME}-md {
      padding: 0.4375rem 1.125rem;
      font-size: 0.8125rem;
      line-height: 1.25rem;
      border-radius: 4px;
    }
  `,
  lg: css`
    &.${COMPONENT_CLASS_NAME}-lg {
      padding: 0.6875rem 1.5rem;
      font-size: 0.9375rem;
      line-height: 1.25rem;
      border-radius: 5px;
    }
  `,
  xl: css`
    &.${COMPONENT_CLASS_NAME}-xl {
      padding: 0.625rem 2rem;
      font-size: 1.125rem;
      line-height: 2rem;
      border-radius: 5px;
    }
  `
}

export type ButtonSizes = keyof typeof buttonSizes

// TODO: Mejorar la generación de variantes --- a un array de strings
// PD: nos dio sueño son las 2am
const generateBody = (variantName: string, colorName: string, styles: any) => css`
  &.${COMPONENT_CLASS_NAME}-${variantName} {
    &.${COMPONENT_CLASS_NAME}-${colorName} {
      ${styles}
    }
  }
`
// ******************* generateBody Return ********************
// &.${COMPONENT_CLASS_NAME}-contained {
//     &.${COMPONENT_CLASS_NAME}-primary {
//       color: ${theme.palette.primary.contrastText};
//       background-color: ${theme.palette.primary.main};
//       border-color: ${theme.palette.primary.main};
//       &:hover {
//         background-color: ${theme.palette.primary.dark};
//         border-color: ${theme.palette.primary.dark};
//       }
//     }
//   }
// ************************************************************

const buttonVariants = {
  contained: (color: any) => css`
    color: ${color.contrastText};
    background-color: ${color.main};
    border-color: ${color.main};
    &:hover {
      background-color: ${color.dark};
      border-color: ${color.dark};
    }
  `,
  outlined: (color: any) => css`
    color: ${color.main};
    background-color: transparent;
    border-color: ${color.main};

    &:hover {
      color: ${color.contrastText};
      background-color: ${color.main};
      border-color: ${color.main};
    }
  `,
  text: (color: any) => css`
    color: ${color.main};
    background-color: transparent;
    border-color: transparent;
    &:hover {
      background-color: rgba(0, 0, 0, 0.04);
    }
  `
}
export type ButtonVariants = keyof typeof buttonVariants

const generateVariantsColors = (colors: any) => {
  // validamos los colores
  const colorKeys = Object.keys(colors)
  const colorValues = colorKeys.map(color => {
    const data = colors[color]
    if (data.main && data.light && data.dark && data.contrastText) {
      return [color, data]
    }
    return null
  })

  const validColors = colorValues.filter(i => i !== null) // colores validos

  // obtenemos las variantes
  const variantNames = Object.keys(buttonVariants)
  const variantsCss = variantNames.map((variantName: ButtonVariants) => {
    // recorremos los colores validos
    const cssStyles = validColors.map((variant: string[]) => {
      // generamos los colores para cada variante
      const localCss = generateBody(
        variantName,
        variant[0],
        buttonVariants[variantName](variant[1])
      )
      return localCss.join('')
    })
    return cssStyles
  })

  return variantsCss
}

// YA VALIOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
// INSERTE MEME DE FRANCO ESCAMILLA!
const yavalio = generateVariantsColors(colorCssVars)
  .map(i => i.join(''))
  .join()

const getSizesCSS = () =>
  Object.values(buttonSizes)
    .map(i => i.join(''))
    .join('')

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

  ${getSizesCSS()}
  ${yavalio}
`
