// import styled, { CSSObject } from 'styled-components'

// // Types
// import { generateCss, generateStyles, themeCssVars } from '../../theme'
// import { StatusColor, StatusColors } from '../../types'

// // Base Class Name
// export const BASE_CLASS_NAME = 'pagination'

// // Functions
// const getColorCss = (colorType: StatusColor) => {
//   const { main, contrastText } = themeCssVars.palette[colorType]
//   const cssProps: CSSObject = {
//     '& > li > a > span': {
//       '&.active': {
//         color: contrastText,
//         backgroundColor: main,
//       },
//       '&:hover': {
//         color: contrastText,
//         backgroundColor: main
//       }
//     }
//   }

//   return generateCss(cssProps)
// }

// const paginationColorStyles = () => generateStyles(StatusColors, BASE_CLASS_NAME, getColorCss)

// export const StyledUl = styled.ul`
//   list-style: none;
//   padding: 0;
//   display: flex;
//   justify-content: center;
//   margin: 500 auto;
//   margin-top: 90px;
//   margin-bottom: 50px;
//   width: 100%;

//   ${paginationColorStyles()}
// `

// export const StyledLi = styled.li`
//   margin: 5px;
//   a {
//     color: #777;
//     text-decoration: none;
//   }
// `

// export const StyledLink = styled.span`
//   padding: 15px 20px;
//   border-radius: 5px;

//   i {
//     *[dir='rtl'] & {
//       transform: rotateY(180deg);
//     }
//   }
// `
