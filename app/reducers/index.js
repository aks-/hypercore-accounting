const defaultState = {
  screen: 'home'
}

const accountingApp = (state = defaultState, action) => {
  switch (action.type) {
    case 'SHOW_SCREEN':
      return {
        ...state,
        screen: action.screen
      }
    default:
      return state
  }
}

export default accountingApp
