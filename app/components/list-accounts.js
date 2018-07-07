import React, { Fragment } from 'react'
import styled from 'styled-components'
import Table from './table'

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

  const columns = ['Name', 'Type']
  const data = accounts.map(obj => Object.values(obj).slice(1))
  return (
    <Table columns={columns} data={data} />
  )
}

export default ListAccounts
