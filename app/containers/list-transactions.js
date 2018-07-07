import { connect } from 'react-redux'
import moment from 'moment-timezone'
import ListTransactions from '../components/list-transactions'

const mapStateToProps = state => ({
  screen: state.screen,
  transactions: state.transactions.map(t => {
    const date = moment.tz(t.date, null).format('LL')
    return Object.assign({}, t, {
      date
    })
  })
})

const ListTransactionsContainer = connect(
  mapStateToProps,
  null
)(ListTransactions)

export default ListTransactionsContainer
