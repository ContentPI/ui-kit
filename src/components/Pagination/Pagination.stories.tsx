import React from 'react'
import Pagination from './index'

const stories = {
  component: 'Pagination',
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
