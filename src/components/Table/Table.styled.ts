// Dependencies
import { colors } from 'src/theme'
import styled from 'styled-components'

// Base Class Name
export const BASE_CLASS_NAME = 'table'

export const tableStyle = `
  border: 1px solid ${colors.graySuit};

  border-left: none;
  border-right: none;
`

export const TableBase = styled.table`
  width: 100%;
  border-collapse: collapse;
`
export const TableHeader = styled.thead`
  ${tableStyle}
`
export const TableRow = styled.tr`
  ${tableStyle}
`

export const TableHeaderCol = styled.th`
  text-align: left;
  padding: 1rem;
`

export const TableBody = styled.tbody``

export const TableCol = styled.td`
  padding: 1rem;
`
