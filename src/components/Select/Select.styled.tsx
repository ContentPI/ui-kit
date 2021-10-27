// // Dependencies
// import styled from 'styled-components'

// // Theme
// import { getVariantCssProps } from '../../theme'

// // Types
// import { StatusColor } from '../../types'

// interface IStyledProps {
//   color: StatusColor
//   top?: string
// }

// // Base Class Name
// export const BASE_CLASS_NAME = 'select'

// const variants = getVariantCssProps()

// export const StyledSelect = styled.div<IStyledProps>`
//   width: fit-content;
//   min-width: 200px;
//   position: relative;
//   -webkit-touch-callout: none;
//   -webkit-user-select: none;
//   -khtml-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;

//   a {
//     background: ${({ color }) => variants[color].default.backgroundColor};
//     color: ${({ color }) => variants[color].default.color};
//     display: flex;
//     padding: 10px 20px;
//     border-radius: 5px;
//     text-decoration: none;
//     width: fit-content;
//     div {
//       i {
//         margin-left: 20px;
//         cursor: pointer;
//       }
//     }
//   }
//   ul {
//     background: white;
//     -ms-overflow-style: none;
//     border-radius: 3px;
//     border: 1px solid #000;
//     list-style-type: none;
//     margin: 0;
//     max-height: 150px;
//     overflow: auto;
//     padding: 0;
//     scrollbar-width: none;
//     top: ${({ top }) => (top ? `-${top}` : '45px')};
//     width: 130%;
//     z-index: 1;
//     position: absolute;
//     &::-webkit-scrollbar {
//       display: none;
//     }
//     li {
//       font-size: 14px;
//       padding: 10px;
//       padding-left: 20px;
//       -webkit-touch-callout: none;
//       -webkit-user-select: none;
//       -khtml-user-select: none;
//       -moz-user-select: none;
//       -ms-user-select: none;
//       user-select: none;
//       border-bottom: 1px solid #666;
//       &:last-child {
//         border-bottom: none;
//       }
//       &:hover {
//         background: ${({ color }) => variants[color].default.hover.backgroundColor};
//         color: ${({ color }) => variants[color].default.hover.color};
//       }
//     }
//   }
// `
