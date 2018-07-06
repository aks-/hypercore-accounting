import React, { Fragment } from 'react'
import HeaderContainer from '../containers/header'
import AddTransactionContainer from '../containers/add-transaction'
import FlashContainer from '../containers/flash'
import ListAccountsContainer from '../containers/list-accounts'
import AddAccountContainer from '../containers/add-account'
import ListTransactionsContainer from '../containers/list-transactions'

const App = () => (
  <Fragment>
    <HeaderContainer />
    <ListAccountsContainer />
    <FlashContainer />
    <AddAccountContainer />
    <AddTransactionContainer />
    <ListTransactionsContainer />
  </Fragment>
)

export default App
