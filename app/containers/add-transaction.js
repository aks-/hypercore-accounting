import   { connect } from 'react-redux'
import { flashError, addTransaction } from '../actions'
import AddTransaction from '../components/add-transaction'

const mapStateToProps = state => ({
  screen: state.screen,
  accounts: state.accounts.map(account => account.name),
  notification: state.notification
})

const mapDispatchToProps = dispatch => ({
  flashError: notification => dispatch(flashError(notification)),
  addTransaction: transaction => dispatch(addTransaction(transaction))
})

const AddTransactionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTransaction)

export default AddTransactionContainer
