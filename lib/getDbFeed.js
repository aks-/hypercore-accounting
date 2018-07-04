const { promisify } = require('util')
const hypercore = require('hypercore')
const { homedir } = require('os')

const getDbFeed = name => {
  const feed = hypercore(
`${homedir()}/.${name}`,
    {valueEncoding: 'json'}
  )

  return {
    getBatch: promisify(feed.getBatch.bind(feed)),
    append: promisify(feed.append.bind(feed)),
    ready: promisify(feed.ready.bind(feed)),
    length: () => feed.length
  }
}


module.exports = getDbFeed
