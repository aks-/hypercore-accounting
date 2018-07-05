const getDbFeed = require('./getDbFeed')
const feed = getDbFeed('hypercore-double-entry-accounts')

const editAccount = async (name, meta) => {
  await feed.ready()

  var accounts = []
  const feedLength = feed.length()

  if (feedLength)
    var accounts = await feed.getBatch(0, feedLength) || []
  const existingAccountLog = accounts.filter(
    account => account.name === name
  )[0]

  if (!existingAccountLog)
    throw new Error(`Account with name does not exists.`)

  const accountLog = Object.assign({}, existingAccountLog, {
    name,
    meta,
    updated: Date.now()
  })

  return await feed.append(accountLog)
}

module.exports = editAccount
