// import React, { FC } from 'react'
// import { cxGenerator } from '@contentpi/lib'

// import Icon from '../Icon'

// // Types
// import { BackgroundColor } from '../../types'

// // Components
// import Text from '../Text'
// import Avatar from '../Avatar'

// // Styles
// import {
//   NavBarBase,
//   NavBarButton,
//   NavBarTitle,
//   NavBarActions,
//   NavBarUserWrapper,
//   NavBarUserInfo,
//   BASE_CLASS_NAME
// } from './NavBar.styled'

// interface NavBarProps {
//   color?: BackgroundColor
// }

// const NavBar: FC<NavBarProps> = props => {
//   const { color = BackgroundColor.paper, ...restProps } = props

//   const classNames = cxGenerator({
//     ccn: BASE_CLASS_NAME,
//     data: [color]
//   })

//   return (
//     <NavBarBase className={classNames} {...restProps}>
//       <NavBarButton>
//         <Icon library="feather" type="menu" width={20} />
//       </NavBarButton>
//       <NavBarTitle component="h1" variant="subtitle2">
//         Dashboard
//       </NavBarTitle>
//       <NavBarActions>
//         <Icon library="feather" type="search" width={20} />
//         <Icon library="feather" type="message-circle" width={20} />
//         <Icon library="feather" type="bell" width={20} />
//         <Icon library="feather" type="globe" width={20} />
//       </NavBarActions>
//       <NavBarUserWrapper>
//         <Avatar />
//         <NavBarUserInfo>
//           <Text variant="subtitle2">Emmanuel</Text>
//           <Text variant="caption1">emmanuel@gmail.com</Text>
//         </NavBarUserInfo>
//       </NavBarUserWrapper>
//     </NavBarBase>
//   )
// }
// export default NavBar
