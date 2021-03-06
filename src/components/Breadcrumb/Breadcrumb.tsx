// Dependencies
import React, { FC, Fragment } from 'react'
import { cxGenerator } from '@contentpi/lib'

// Components
import Text from '../Text'

// Styles
import { BreadcrumbBase, BreadcrumbDivider, BASE_CLASS_NAME } from './Breadcrumb.styled'

type labelBody = {
  title: string
  link?: string
}

interface IProps {
  labels: Array<labelBody>
  Link?: any
}

const Breadcrumb: FC<IProps> = props => {
  const { labels, Link } = props

  const classNames = cxGenerator({
    ccn: BASE_CLASS_NAME,
    data: []
  })

  const items = labels.map((item, index) => {
    const isLast = labels.length - 1 === index

    return (
      <Fragment key={item.title}>
        {Link ? (
          <Link href={item.link}>
            <Text variant="subtitle2" color={isLast ? 'textPrimary' : 'textDisabled'}>
              {item.title}
            </Text>
          </Link>
        ) : (
          <a href={item.link}>
            <Text variant="subtitle2" color={isLast ? 'textPrimary' : 'textDisabled'}>
              {item.title}
            </Text>
          </a>
        )}
        {!isLast && (
          <BreadcrumbDivider>
            <Text variant="subtitle2" color="textDisabled">
              /
            </Text>
          </BreadcrumbDivider>
        )}
      </Fragment>
    )
  })
  return <BreadcrumbBase className={classNames}>{items}</BreadcrumbBase>
}

export default Breadcrumb
