import React, { FC, ReactElement } from 'react'

interface Props {
  spinner: string
  style: any
}

const Spinner: FC<Props> = ({ spinner = 'puff', style = {} }): ReactElement => {
  return <img style={style} alt="Spinner" src={require(`./loaders/${spinner}.svg`)} />
}

export default Spinner
