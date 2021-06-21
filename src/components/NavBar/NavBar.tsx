import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Icons
import { Menu, Search, MessageCircle, Bell, Globe } from 'react-feather'

// Types
import { BackgroundColor } from '../../types'

// Components
import Text from '../Text'
import Avatar from '../Avatar'

// Styles
import {
  NavBarBase,
  NavBarButton,
  NavBarTitle,
  NavBarActions,
  NavBarUserWrapper,
  NavBarUserInfo,
  BASE_CLASS_NAME
} from './NavBar.styled'

interface NavBarProps {
  color?: BackgroundColor
}

const NavBar: FC<NavBarProps> = props => {
  const { color = BackgroundColor.paper, ...restProps } = props

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color]
  })

  return (
    <NavBarBase className={classNames} {...restProps}>
      <NavBarButton>
        <Menu size={20} />
      </NavBarButton>
      <NavBarTitle component="h1" variant="subtitle2">
        Dashboard
      </NavBarTitle>
      <NavBarActions>
        <Search size={20} />
        <MessageCircle size={20} />
        <Bell size={20} />
        <Globe size={20} />
      </NavBarActions>
      <NavBarUserWrapper>
        <Avatar />
        <NavBarUserInfo>
          <Text variant="subtitle2">Emmanuel</Text>
          <Text variant="caption1">emmanuel@gmail.com</Text>
        </NavBarUserInfo>
      </NavBarUserWrapper>
    </NavBarBase>
  )
}
export default NavBar
