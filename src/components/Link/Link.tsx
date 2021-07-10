// Dependencies
import React, { FC, ReactElement } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { isString, getCurrentLanguage } from '@contentpi/lib'
import { languages } from 'prismjs'

type Props = {
  children: ReactElement | string
  to: string
  className?: string
  onClick?(): any
  title?: any
  target?: '_blank' | '_self' | '_parent' | '_top'
  external?: boolean
  language?: boolean
}

const Link: FC<Props> = ({
  to,
  children,
  className,
  onClick,
  title = undefined,
  target = undefined,
  external = false,
  language = false
}) => {
  const currentLanguage = getCurrentLanguage()
  let href = to
  const linkProps: any = {
    onClick,
    className,
    target
  }

  if (language) {
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
      <a {...linkProps} title={title}>
        {children}
      </a>
    )
  }

  linkProps.to = href

  return (
    <RouterLink {...linkProps} title={title}>
      {children}
    </RouterLink>
  )
}

export default Link
