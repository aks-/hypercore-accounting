const getDbFeed = require('./getDbFeed')
const accountExists = require('./accountExists')

const transactionsFeed = getDbFeed('hypercore-double-entry-transactions')
const accountsFeed = getDbFeed('hypercore-double-entry-accounts')

const makeTransaction = async (date, desc, debitAccount, creditAccount, amount) => {
  if (debitAccount === creditAccount)
    throw new Error(`creditAccount and debitAccount can not be same.`)

  await accountsFeed.ready()
  const accounts = await accountsFeed.getBatch(0, accountsFeed.length())

  if (!accountExists(accounts, debitAccount))
    throw new Error(`account with name ${debitAccount} does not exists.`)
  if (!accountExists(accounts, creditAccount))
    throw new Error(`account with name ${creditAccount} does not exists.`)


  await transactionsFeed.ready()
  const transactionsCount = transactionsFeed.length()

  const log = {
    id: null,
    date,
    desc
  }

  const creditTransactionLog = Object.assign({}, log, {
    id: (transactionsCount + 1),
    credit: amount,
    accountName: creditAccount
  })
  const debitTransactionLog = Object.assign({}, log, {
    id: (transactionsCount + 2),
    debit: amount,
    accountName: debitAccount
  })

  const logs = [creditTransactionLog, debitTransactionLog]
  await transactionsFeed.append(logs)

  return logs
}

module.exports = makeTransaction
