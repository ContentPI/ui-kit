// // Dependencies
// import styled, { CSSObject } from 'styled-components'

// // Types
// import { generateCss, generateStyles, themeCssVars, calc } from '../../theme'
// import { StatusColor, StatusColors, CalcType } from '../../types'

// // Base Class Name
// export const BASE_CLASS_NAME = 'badge'

// // Functions
// const getColorCss = (colorType: StatusColor) => {
//   const { main, light, dark } = themeCssVars.palette[colorType]
//   const cssProps: CSSObject = {
//     color: 'white',
//     border: `1px solid ${main}`,
//     backgroundColor: light,
//     padding: `${calc(CalcType.padding, [0.5, 2])}`
//   }

//   return generateCss(cssProps)
// }

// const badgeColorStyles = () => generateStyles(StatusColors, BASE_CLASS_NAME, getColorCss)

// // Styles
// export const BadgeBase = styled.div`
//   display: inline-block;
//   border-radius: 0.25rem;
//   border: 1px solid inherit;
//   font-size: 13px;
//   font-weight: 500;
//   line-height: 16px;
//   padding: 0.25em 0.4em;
//   vertical-align: baseline;

//   ${badgeColorStyles()}
// `
