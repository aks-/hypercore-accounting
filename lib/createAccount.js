const moment = require('moment-timezone')
const getDbFeed = require('./getDbFeed')
const feed = getDbFeed('hypercore-double-entry-accounts')

const createAccount = async (name, type) => {
  await feed.ready()

  var accounts = []
  const feedLength = feed.length()

  if (feedLength)
    var accounts = await feed.getBatch(0, feedLength) || []
  const names = accounts.map(account => account.name)

  if (names.includes(name))
    throw new Error(`Account with name ${name} already exists.`)

  const date = Date.now()
  const timezone = moment.tz.guess()
  const accountLog = {
    id: feedLength,
    name,
    type,
    date,
    timezone
  }

  await feed.append(accountLog)
  return Object.assign({}, accountLog, {
    date: moment.tz(date, timezone).format('LL')
  })
}

module.exports = createAccount
