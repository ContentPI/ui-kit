// Dependencies
import React, { FC } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Styles
import { PaperBase, BASE_CLASS_NAME } from './Paper.styled'

interface PaperProps {
  className?: string
}

const Paper: FC<PaperProps> = ({ children, className }) => {
  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: [],
    className
  })

  return <PaperBase className={classNames}>{children}</PaperBase>
}

export default Paper
