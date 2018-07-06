import React, { Fragment } from 'react'
import styled from 'styled-components'

const Container = styled.ul`
  background-color: var(--color-neutral-10);
  color: var(--color-neutral-40);
  margin: 0.75rem;
  text-align: center;
`

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

  return (
    <Container>
      {transactions.map(transaction => <List key={transaction.id}>{JSON.stringify(transaction)}</List>)}
    </Container>)
}

export default ListTransactions
