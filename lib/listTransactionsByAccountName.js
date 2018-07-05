const getDbFeed = require('./getDbFeed')
const feed = getDbFeed('hypercore-double-entry-transactions')

const listTransactionsByAccountName = async accountName => {
  await feed.ready()

  const transactions = {};

  (await feed.getBatch(0, feed.length()))
    .filter(transaction => 
      transaction.accountName === accountName ||
      transaction.accountName === accountName
    )
    .forEach(transaction => {
      const { id } = transaction
      transactions[id] = transaction
    })

  return Object.values(transactions)
}

module.exports = listTransactionsByAccountName
