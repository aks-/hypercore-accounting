const getDbFeed = require('./getDbFeed')
const feed = getDbFeed('hypercore-double-entry-accounts')

module.exports = async () => {
  const uniqueAccounts = {}
  await feed.ready()

  const accounts = await feed.getBatch(0, feed.length())
  accounts.forEach(account => uniqueAccounts[account.name] = account)

  return Object.values(uniqueAccounts)
}
