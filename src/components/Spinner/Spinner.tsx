import React, { FC, ReactElement } from 'react'
import { CSSObject } from 'styled-components'

interface Props {
  spinner: string
  style: CSSObject
}

const Spinner: FC<Props> = ({ spinner = 'puff', style = {} }): ReactElement => {
  return <img style={style} alt="Spinner" src={require(`./loaders/${spinner}.svg`)} />
}

export default Spinner
