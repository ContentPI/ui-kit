import React from 'react'
import Pagination from './index'

const stories = {
  component: 'Pagination',
  props: [
    {
      name: 'page',
      type: 'number',
      default: '1',
      description: 'The current page of the pagination'
    },
    {
      name: 'total',
      type: 'number',
      default: '1',
      description: 'The total of pages'
    },
    {
      name: 'rowsPerPage',
      type: 'number',
      default: '1',
      description: 'The number of items that will  be displayed per page'
    }
  ],
  stories: [
    {
      name: 'Pagination',
      description: 'Simple pagination',
      render: <Pagination page={3} total={200} rowsPerPage={10} href="/blog/" />,
      prop: false,
      code: `
      <Pagination
        page={3}
        total={200}
        rowsPerPage={10}
        href="/blog/"
      />
    `
    }
  ]
}

export default stories
