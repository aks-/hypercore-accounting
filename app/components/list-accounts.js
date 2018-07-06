import React, { Fragment } from 'react'
import styled from 'styled-components'
import { neutral } from 'dat-colors'

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

const ListAccounts = ({ screen, accounts }) => {
  if (screen !== 'accounts')
    return <Fragment></Fragment>

  if (accounts.length === 0)
    return <Center>There are no accounts right now.</Center>

  return (
    <Container>
      {accounts.map(account => <List key={account.name}>{JSON.stringify(account)}</List>)}
    </Container>)
}

export default ListAccounts
