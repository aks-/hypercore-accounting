import React, { Fragment } from 'react'
import HeaderContainer from '../containers/header'
import AddTransactionContainer from '../containers/add-transaction'
import FlashContainer from '../containers/flash'

const App = () => (
  <Fragment>
    <HeaderContainer />
    <FlashContainer />
    <AddTransactionContainer />
  </Fragment>
)

export default App
