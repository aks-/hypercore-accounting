import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.table`
  background-color: var(--color-neutral-10);
  color: var(--color-neutral-40);
  margin: 0.75rem 0;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`

const Thead = styled.thead`
  background-color: var(--color-neutral-70);
  color: white;
`

const Table = ({ columns, data }) => {
  const tableHead = (
    <Thead>
      <tr>
        {columns.map(column => <td key={column}>{column}</td>)}
      </tr>
    </Thead>
  )

  const tableBody = (
    <tbody>
      {data.map((row, rowIndex) => {
        return <tr key={rowIndex}>
          {row.map((column, columnIndex) => {
            return <td key={columnIndex}>{column}</td>
          })}
        </tr>
      })}
    </tbody>
  )

  return (
    <TableContainer>
      {tableHead}
      {tableBody}
    </TableContainer>
  )
}

export default Table
