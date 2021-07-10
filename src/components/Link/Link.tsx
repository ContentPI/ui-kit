// Dependencies
import React, { FC, ReactElement } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { isString, getCurrentLanguage } from '@contentpi/lib'
import styled from 'styled-components'

type Props = {
  children: ReactElement | string
  to: string
  className?: string
  onClick?(): any
  title?: any
  target?: '_blank' | '_self' | '_parent' | '_top'
  external?: boolean
  withLanguage?: boolean
}

const StyledLink = styled.a`
  text-decoration: none;
`

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
`

const Link: FC<Props> = ({
  to,
  children,
  className,
  onClick,
  title = undefined,
  target = undefined,
  external = false,
  withLanguage = false
}) => {
  const currentLanguage = getCurrentLanguage()
  let href = to
  const linkProps: any = {
    onClick,
    className,
    target
  }

  if (withLanguage) {
    const slash = href.charAt(0) === '/' ? '' : '/'
    href = `${currentLanguage}${slash}${href}`
  }

  if (isString(children)) {
    title = children
  }

  if (target === '_blank') {
    linkProps.rel = 'noopener noreferrer nofollow'
  }

  if (external) {
    linkProps.href = href

    return (
      <StyledLink {...linkProps} title={title}>
        {children}
      </StyledLink>
    )
  }

  linkProps.to = href

  return (
    <StyledRouterLink {...linkProps} title={title}>
      {children}
    </StyledRouterLink>
  )
}

export default Link
