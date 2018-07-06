import   { connect } from 'react-redux'
import ListAccounts from '../components/list-accounts'

const mapStateToProps = state => ({
  screen: state.screen,
  accounts: state.accounts.map(account => account.name)
})

const ListAccountsContainer = connect(
  mapStateToProps,
  null
)(ListAccounts)

export default ListAccountsContainer
