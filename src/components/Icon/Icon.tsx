// Dependencies
import React, { FC, ReactElement } from 'react'

interface Props {
  children?: ReactElement | string
  className?: string
  type?: string
  title?: string
  background?: string
  onClick?(): void
}

const Icon: FC<Props> = props => {
  const { type, className = '' } = props
  const iconProps = { ...props }

  delete iconProps.type
  delete iconProps.className

  let style = {}

  if (props.onClick) {
    style = {
      cursor: 'pointer'
    }
  }

  return <i style={style} {...iconProps} className={`Icon ${type} ${className}`} />
}

export default Icon
