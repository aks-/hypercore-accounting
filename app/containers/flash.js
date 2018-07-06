import { connect } from 'react-redux'
import Flash from '../components/flash'

const mapStateToProps = state => ({
  notification: state.notification,
  type: state.notificationType
})

const FlashContainer = connect(
  mapStateToProps
)(Flash)

export default FlashContainer
