const getDbFeed = require('./getDbFeed')
const feed = getDbFeed('hypercore-double-entry-transactions')

module.exports = async accountName => {
  await feed.ready()

  return (await feed.getBatch(0, feed.length()))
    .filter(transaction => 
      transaction.accountName === accountName ||
      transaction.accountName === accountName
    )
}
