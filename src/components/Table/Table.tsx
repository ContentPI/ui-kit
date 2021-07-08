// Dependencies
import React, { FC } from 'react'

// Styled
import {
  TableBase,
  TableHeader,
  TableBody,
  TableRow,
  TableHeaderCol,
  TableCol
} from './Table.styled'

interface ITableProps {
  data: {
    columns: string[]
    rows: Array<string[]>
  }
}

const Table: FC<ITableProps> = props => {
  const { data } = props
  return (
    <TableBase>
      <TableHeader>
        <TableRow>
          {data.columns.map(header => {
            return <TableHeaderCol>{header}</TableHeaderCol>
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.rows.map(item => (
          <TableRow>
            {item.map(row => (
              <TableCol>{row}</TableCol>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </TableBase>
  )
}

export default Table
