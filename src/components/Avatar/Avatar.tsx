// // Dependencies
// import React, { FC } from 'react'
// import { cxGenerator } from '@contentpi/lib'

// // Types
// import { AvatarVariant, StatusColor } from '../../types'

// // Styles
// import { AvatarBase, BASE_CLASS_NAME } from './Avatar.styled'

// interface AvatarProps {
//   color?: StatusColor
//   variant?: AvatarVariant
// }

// const Avatar: FC<AvatarProps> = props => {
//   const {
//     children,
//     color = StatusColor.primary,
//     variant = AvatarVariant.circle,
//     ...restProps
//   } = props

//   const classNames = cxGenerator({
//     ccn: BASE_CLASS_NAME,
//     data: [color, variant]
//   })

//   return (
//     <AvatarBase className={classNames} {...restProps}>
//       {children}
//     </AvatarBase>
//   )
// }

// export default Avatar
