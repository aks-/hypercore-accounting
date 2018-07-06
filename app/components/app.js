import React, { Fragment } from 'react'
import HeaderContainer from '../containers/header'
import AddTransactionContainer from '../containers/add-transaction'
import FlashContainer from '../containers/flash'
import ListAccountsContainer from '../containers/list-accounts'
import AddAccountContainer from '../containers/add-account'

const App = () => (
  <Fragment>
    <HeaderContainer />
    <ListAccountsContainer />
    <FlashContainer />
    <AddAccountContainer />
    <AddTransactionContainer />
  </Fragment>
)

export default App
