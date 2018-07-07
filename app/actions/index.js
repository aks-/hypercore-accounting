import { ipcRenderer as ipc, remote } from 'electron'

const makeTransaction = remote.require('./lib/makeTransaction')
const createAccount = remote.require('./lib/createAccount')
const getAccounts = remote.require('./lib/getAccounts')
const getTransactions = remote.require('./lib/getTransactions')

export const onTabClick = screen => ({ type: 'SHOW_SCREEN', screen })

export const flashError = notification => dispatch => {
  dispatch({ type: 'SHOW_ERROR', notification })
  setTimeout(() => {
    dispatch({ type: 'HIDE_NOTIFICATION' })
  }, 4000)
}

export const flashSuccess = notification => dispatch => {
  dispatch({ type: 'SHOW_SUCCESS_NOTIFICATION', notification })
  setTimeout(() => {
    dispatch({ type: 'HIDE_NOTIFICATION' })
  }, 4000)
}

export const addTransaction = transaction => async dispatch => {
  try {
    const {
      desc,
      debitAccount,
      creditAccount,
      amount
    } = transaction

    const transactionLogs = await makeTransaction(Date.now(), desc, debitAccount, creditAccount, amount)
    transactionLogs.forEach(transactionLog => {
      dispatch({
        type: 'ADD_TRANSACTION',
        transactionLog
      })
    })
    flashSuccess('Successfully added transaction.')(dispatch)
  } catch (e) {
    flashError(e.message)(dispatch)
  }
}

export const addAccount = account => async dispatch => {
  try {
    const { name, type } = account

    const accountLog = await createAccount(name, type)
    dispatch({
      type: 'ADD_ACCOUNT',
      accountLog
    })
    flashSuccess('Successfully added account.')(dispatch)
  } catch (e) {
    flashError(e.message)(dispatch)
  }
}

export const loadAccounts = () => async dispatch => {
  var accountLogs = []
  var transactionLogs = []
  try {
    accountLogs = await getAccounts()
    transactionLogs = await getTransactions()
  } catch (_) {}

  accountLogs.forEach(accountLog => {
    dispatch({
      type: 'ADD_ACCOUNT',
      accountLog
    })
  })

  transactionLogs.forEach(transactionLog => {
    dispatch({
      type: 'ADD_TRANSACTION',
      transactionLog
    })
  })
}
