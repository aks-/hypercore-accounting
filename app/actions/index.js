import { ipcRenderer as ipc, remote } from 'electron'

const makeTransaction = remote.require('./lib/makeTransaction')
const getAccounts = remote.require('./lib/getAccounts')

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

    await makeTransaction(Date.now(), desc, debitAccount, creditAccount, amount)
    flashSuccess('Successfully added transaction.')(dispatch)
  } catch (e) {
    flashError(e.message)(dispatch)
  }
}

export const addAccount = (id, name, meta, date) => ({
  type: 'ADD_ACCOUNT',
  id,
  name,
  meta,
  date
})

export const loadAccounts = () => async dispatch => {
  var accounts = []
  try {
    accounts = await getAccounts()
  } catch (_) {}

  accounts.forEach(account => {
    const { id, name, meta, date } = account
    dispatch(addAccount(id, name, meta, date))
  })
}
