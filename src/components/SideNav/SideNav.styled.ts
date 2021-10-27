// // Dependencies
// import styled, { CSSObject } from 'styled-components'

// // Theme
// import { themeCssVars, calc, generateCss, generateStyles } from '../../theme'

// // Types
// import { BackgroundColor, BackgroundColors, CalcType } from '../../types'

// // Components
// import Text from '../Text'

// // Base Class Name
// export const BASE_CLASS_NAME = 'sidenav'

// // Functions
// const getBackgroundColorCss = (color: BackgroundColor) => {
//   const backgroundColor = themeCssVars.global?.background[color]
//   const cssProps: CSSObject = {
//     backgroundColor
//   }

//   return generateCss(cssProps)
// }

// const textColorStyles = () => {
//   const styles = generateStyles(BackgroundColors, BASE_CLASS_NAME, getBackgroundColorCss)
//   return styles
// }

// export const SideNavBase = styled.aside`
//   &.${BASE_CLASS_NAME} {
//     display: flex;
//     flex-direction: column;
//     flex-shrink: 0;

//     width: 240px;
//     height: 100vh;
//     padding: ${calc(CalcType.padding, [5, 6])};
//     box-sizing: border-box;
//   }

//   ${textColorStyles()}
// `

// export const NavWrapper = styled.div`
//   display: grid;
//   grid-gap: 8px;
// `

// export const NavItem = styled.div`
//   display: flex;
//   padding: 10px 11px;
//   align-items: center;

//   &:hover {
//     cursor: pointer;
//   }
// `

// export const NavItemIconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 1rem;
// `

// export const NavItemLabel = styled(Text)`
//   flex-grow: 1;
// `

// export const Divider = styled.div`
//   height: 1px;
//   width: 100%;
//   margin: 8px 0;

//   background-color: #f3f5fa;
// `
