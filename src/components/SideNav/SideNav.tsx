import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

import Icon from '../Icon'

// Types
import { BackgroundColor } from '../../types'

// Components
import Text from '../Text'

// Styles
import {
  SideNavBase,
  NavWrapper,
  NavItem,
  NavItemIconWrapper,
  NavItemLabel,
  Divider,
  BASE_CLASS_NAME
} from './SideNav.styled'

interface SideNavProps {
  color?: BackgroundColor
}

const SideNav: FC<SideNavProps> = props => {
  const { color = BackgroundColor.paper, ...restProps } = props

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [color]
  })

  return (
    <SideNavBase className={classNames} {...restProps}>
      <Text>ContentPI</Text>
      <NavWrapper>
        <NavItem>
          <NavItemIconWrapper>
            <Icon library="feather" type="layout" width={16} />
          </NavItemIconWrapper>
          <NavItemLabel component="h3" variant="subtitle2">
            Dashboard
          </NavItemLabel>
        </NavItem>
        <NavItem>
          <NavItemIconWrapper>
            <Icon library="feather" type="server" width={16} />
          </NavItemIconWrapper>
          <NavItemLabel component="h3" variant="subtitle2">
            Schema
          </NavItemLabel>
        </NavItem>
        <NavItem>
          <NavItemIconWrapper>
            <Icon library="feather" type="link" width={16} />
          </NavItemIconWrapper>
          <NavItemLabel component="h3" variant="subtitle2">
            Collections
          </NavItemLabel>
        </NavItem>
        <NavItem>
          <NavItemIconWrapper>
            <Icon library="feather" type="globe" width={16} />
          </NavItemIconWrapper>
          <NavItemLabel component="h3" variant="subtitle2">
            i18n
          </NavItemLabel>
        </NavItem>
        <NavItem>
          <NavItemIconWrapper>
            <Icon library="feather" type="link" width={16} />
          </NavItemIconWrapper>
          <NavItemLabel component="h3" variant="subtitle2">
            Playground
          </NavItemLabel>
        </NavItem>
      </NavWrapper>
      <Divider />
      <NavWrapper>
        <NavItem>
          <NavItemIconWrapper>
            <Icon library="feather" type="server" width={16} />
          </NavItemIconWrapper>
          <NavItemLabel component="h3" variant="subtitle2">
            Token API
          </NavItemLabel>
        </NavItem>
        <NavItem>
          <NavItemIconWrapper>
            <Icon library="feather" type="server" width={16} />
          </NavItemIconWrapper>
          <NavItemLabel component="h3" variant="subtitle2">
            Webhooks
          </NavItemLabel>
        </NavItem>
      </NavWrapper>
    </SideNavBase>
  )
}
export default SideNav
