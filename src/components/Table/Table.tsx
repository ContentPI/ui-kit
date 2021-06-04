// Dependencies
import React from 'react'

// Styled
import {
  TableBase,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCol,
  TableCol
} from './Table.styled'

const Table = () => {
  return (
    <TableBase>
      <TableHeader>
        <TableRow>
          <TableHeaderCol>#</TableHeaderCol>
          <TableHeaderCol>Name</TableHeaderCol>
          <TableHeaderCol>Price</TableHeaderCol>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCol>1</TableCol>
          <TableCol>Redmi 9A</TableCol>
          <TableCol>$ 90</TableCol>
        </TableRow>
        <TableRow>
          <TableCol>2</TableCol>
          <TableCol>Redmi 9</TableCol>
          <TableCol>$ 140</TableCol>
        </TableRow>
      </TableBody>
    </TableBase>
  )
}

export default Table
