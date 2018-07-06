import { connect } from 'react-redux'
import { onTabClick } from '../actions'
import Header from '../components/header'

const mapStateToProps = state => ({
  activeTab: state.activeTab
})

const mapDispatchToProps = dispatch => ({
  onTabClick: tab => dispatch(onTabClick(tab))
})

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
