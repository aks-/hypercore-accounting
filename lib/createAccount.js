const { promisify } = require('util')
const getDbFeed = require('./getDbFeed')
const feed = getDbFeed('hypercore-double-entry-accounts')

const getBatch = promisify(feed.getBatch.bind(feed))
const append = promisify(feed.append.bind(feed))
const feedReady = promisify(feed.ready.bind(feed))

const createAccount = async (id, name, meta, date) => {
  const accountLog = {
    id,
    name,
    meta,
    date
  }

  await feedReady()

  var accounts = []
  const feedLength = feed.length

  if (feedLength)
    var accounts = await getBatch(0, feedLength) || []
  const names = accounts.map(account => account.name)

  if (names.includes(name))
    throw new Error(`Account with name ${name} already exists.`)

  return await append(JSON.stringify(accountLog))
}

module.exports = createAccount
