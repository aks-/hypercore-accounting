const hypercore = require('hypercore')
const { homedir } = require('os')

const getDbFeed = name => {
  const feed = hypercore(
`${homedir()}/.${name}`,
    {valueEncoding: 'json'}
  )

  return feed
}


module.exports = getDbFeed
