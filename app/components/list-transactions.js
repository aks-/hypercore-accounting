import React, { Fragment } from 'react'
import styled from 'styled-components'
import Table from './table'

const List = styled.li`
  padding: 0.5rem;
`

const Center = styled.p`
  background-color: var(--color-neutral-10);
  color: var(--color-neutral-40);
  margin: 0.75rem;
  text-align: center;
`

const ListTransactions = ({ screen, transactions }) => {
  if (screen !== 'transactions')
    return <Fragment></Fragment>

  if (transactions.length === 0)
    return <Center>There are no transactions right now.</Center>

  const columns = ['Date', 'Description', 'Debit', 'Credit', 'Account Name']
  const data = transactions.map(obj => Object.values(obj).slice(1))
  return <Table columns={columns} data={data}></Table>
}

export default ListTransactions
