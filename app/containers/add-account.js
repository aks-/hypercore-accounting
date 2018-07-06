import   { connect } from 'react-redux'
import { flashError, addAccount } from '../actions'
import AddAccount from '../components/add-account'

const mapStateToProps = state => ({
  screen: state.screen,
  notification: state.notification
})

const mapDispatchToProps = dispatch => ({
  flashError: notification => dispatch(flashError(notification)),
  addAccount: account => dispatch(addAccount(account))
})

const AddAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAccount)

export default AddAccountContainer
