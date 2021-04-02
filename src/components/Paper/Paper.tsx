// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Styles
import { PaperBase, BASE_CLASS_NAME } from './Paper.styled'

const Paper: FC = ({ children }) => {
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: []
  })

  return <PaperBase className={classNames}>{children}</PaperBase>
}

export default Paper
