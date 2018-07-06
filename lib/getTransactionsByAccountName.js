const getTransactions = require('./getTransactions')

module.exports = async accountName => {
  await feed.ready()

  return (await listTransactions())
    .filter(transaction => 
      transaction.accountName === accountName ||
      transaction.accountName === accountName
    )
}
