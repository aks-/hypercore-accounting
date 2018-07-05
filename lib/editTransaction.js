const getDbFeed = require('./getDbFeed')
const accountExists = require('./accountExists')

const transactionsFeed = getDbFeed('hypercore-double-entry-transactions')
const accountsFeed = getDbFeed('hypercore-double-entry-accounts')

const editTransaction = async (id, date, desc, debitAccount, creditAccount, amount) => {
  if (debitAccount === creditAccount)
    throw new Error(`creditAccount and debitAccount can not be same.`)

  await accountsFeed.ready()
  const accounts = await accountsFeed.getBatch(0, accountsFeed.length())

  if (!accountExists(accounts, debitAccount))
    throw new Error(`account with name ${debitAccount} does not exists.`)
  if (!accountExists(accounts, creditAccount))
    throw new Error(`account with name ${creditAccount} does not exists.`)

  await transactionsFeed.ready()

  if (id > transactionsFeed.length())
    throw new Error(`transaction with this id ${id} does not exists.`)

  const existingTransactionLog = await transactionsFeed.get(id - 1)

  if (!existingTransactionLog)
    throw new Error(`transaction with this id ${id} does not exists.`)

  const log = {
    id,
    date,
    desc,
    updated: Date.now()
  }

  const creditTransactionLog = Object.assign({}, log, {
    credit: amount,
    accountName: creditAccount
  })
  const debitTransactionLog = Object.assign({}, log, {
    debit: amount,
    accountName: debitAccount
  })

  return await transactionsFeed.append([creditTransactionLog, debitTransactionLog])
}

module.exports = editTransaction
