// Dependencies
import styled, { CSSObject } from 'styled-components'

// Theme
import { themeCssVars, generateCss, generateStyles } from '../../theme'

// Types
import { AvatarVariant, AvatarVariants, StatusColor, StatusColors } from '../../types'

// Base Class Name
export const BASE_CLASS_NAME = 'avatar'

// Functions
const getVariantCss = (variant: AvatarVariant) => {
  const cssProps: CSSObject = {}

  switch (variant) {
    case AvatarVariant.rounded:
      cssProps.borderRadius = '12px'

      break
    case AvatarVariant.circle:
      cssProps.borderRadius = '50px'
      break
  }

  return generateCss(cssProps)
}

const getColorCss = (colorType: StatusColor) => {
  const { main } = themeCssVars.palette[colorType]
  const cssProps: CSSObject = {
    backgroundColor: main
  }

  return generateCss(cssProps)
}

const getVariantStyles = () => {
  const styles = generateStyles(AvatarVariants, BASE_CLASS_NAME, getVariantCss)
  return styles
}

const getColorStyles = () => {
  const styles = generateStyles(StatusColors, BASE_CLASS_NAME, (color: StatusColor) =>
    getColorCss(color)
  )
  return styles
}

export const AvatarBase = styled.div`
  &.${BASE_CLASS_NAME} {
    width: 36px;
    height: 36px;
  }

  ${getVariantStyles()}
  ${getColorStyles()}
`
