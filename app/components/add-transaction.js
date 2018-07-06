import React, { Fragment } from 'react'
import styled from 'styled-components'
import serialize from 'form-serialize'
import { Green as GreenButton, Disabled as DisabledButton } from './buttons'

const Form = styled.form`
  margin: auto;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  width: 80%;
`

const AddTransaction = ({ screen, accounts, notification, flashError, addTransaction }) => {
  if (screen !== 'home') return <Fragment></Fragment>

  const validateInputs = inputs => {
    const { amount, debitAccount, creditAccount } = inputs

    if (isNaN(Number(amount)))
      throw new Error('Amount can only be of type number')

    if(!accounts.includes(debitAccount))
      throw new Error(`Debit account with name ${debitAccount} does not exists.`)
    if(!accounts.includes(creditAccount))
      throw new Error(`Credit account with name ${creditAccount} does not exists.`)

    if (debitAccount === creditAccount)
      throw new Error('Debit account and credit accounts can not be same.')
  }

  const submitForm = (ev) => {
    ev.preventDefault()
    const { target } = ev

    const formData = serialize(target, { hash: true })

    try {
      validateInputs(formData)
    } catch (e) {
      return flashError(e.message)
    }

    return addTransaction(formData)
  }

  const options = accounts.map(
    account => <option key={account} value={account}>{account}</option>
  )

  return (
    <Form onSubmit={submitForm}>
      <label>DEBIT ACCOUNT</label>
      <select name="debitAccount" required>
        <option value> -- select debit account -- </option>
        {options}
      </select>

      <label>CREDIT ACCOUNT</label>
      <select name="creditAccount" required>
        <option value> -- select credit account -- </option>
        {options}
      </select>

      <label>DESCRIPTION</label>
      <input name="desc" type="text" placeholder="description" required/>

      <label>AMOUNT</label>
      <input name="amount" type="text" placeholder="amount" required/>

      {
        notification ? 
          <DisabledButton type="submit">ADD TRANSACTION</DisabledButton> :
          <GreenButton type="submit">ADD TRANSACTION</GreenButton>
      }
    </Form>
  )
}

export default AddTransaction
