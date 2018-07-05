const accountExists = (accounts, accountName) => {
  var accountExists = false
  for (const account of accounts) {
    if (account.name === accountName) {
      accountExists = true
      break;
    }
  }

  return accountExists
}

module.exports = accountExists
