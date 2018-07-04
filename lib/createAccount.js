const { promisify } = require('util')
const getDbFeed = require('./getDbFeed')
const feed = getDbFeed('hypercore-double-entry-accounts')

const createAccount = async (name, meta) => {
  await feed.ready()

  var accounts = []
  const feedLength = feed.length()

  if (feedLength)
    var accounts = await feed.getBatch(0, feedLength) || []
  const names = accounts.map(account => account.name)

  if (names.includes(name))
    throw new Error(`Account with name ${name} already exists.`)

  const accountLog = {
    id: feedLength + 1,
    name,
    meta,
    date: Date.now()
  }

  return await feed.append(accountLog)
}

module.exports = createAccount
