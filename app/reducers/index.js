const defaultState = {
  screen: 'home',
  notification: null ,
  notificationType: null,
  accounts: [],
  transactions: []
}

const accountingApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_SCREEN':
      return {
        ...state,
        screen: action.screen
      }
    case 'SHOW_ERROR':
      return {
        ...state,
        notification: action.notification,
        notificationType: 'error'
      }
    case 'HIDE_NOTIFICATION':
      return {
        ...state,
        notification: null,
        notificationType: null
      }
    case 'SHOW_SUCCESS_NOTIFICATION':
      return {
        ...state,
        notification: action.notification,
        notificationType: 'success'
      }
    case 'ADD_ACCOUNT':
      return {
        ...state,
        accounts: state.accounts.concat([action.accountLog])
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.concat([action.transactionLog])
      }
    default:
      return state
  }
}

export default accountingApp
