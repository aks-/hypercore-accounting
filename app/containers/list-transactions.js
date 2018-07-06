import   { connect } from 'react-redux'
import ListTransactions from '../components/list-transactions'

const mapStateToProps = state => ({
  screen: state.screen,
  transactions: state.transactions
})

const ListTransactionsContainer = connect(
  mapStateToProps,
  null
)(ListTransactions)

export default ListTransactionsContainer
