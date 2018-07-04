const getDbFeed = require('./getDbFeed')

const transactionsFeed = getDbFeed('hypercore-double-entry-transactions')
const accountsFeed = getDbFeed('hypercore-double-entry-accounts')

const makeTransaction = async (id, date, desc, debitAccount, creditAccount, amount) => {
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
    id,
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

  return await transactionsFeed.append([creditTransactionLog, debitTransactionLog])
}

const accountExists = (accounts, accountName) => {
  var accountExists = false
  for (const account of accounts) {
    if (account.name === accountName) {
      accountExists = true
      break;
    }
  }

  return accountExists
}

module.exports = makeTransaction
