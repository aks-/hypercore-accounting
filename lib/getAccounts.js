const moment = require('moment-timezone')
const getDbFeed = require('./getDbFeed')
const feed = getDbFeed('hypercore-double-entry-accounts')

module.exports = async () => {
  const uniqueAccounts = {}
  await feed.ready()

  const accounts = (await feed.getBatch(0, feed.length()))
    .map(account => {
      const { date, timezone } = account
      return Object.assign({}, account, {
        date: moment.tz(date, timezone).format('LL')
      })
    })
  accounts.forEach(account => uniqueAccounts[account.name] = account)

  return Object.values(uniqueAccounts)
}
