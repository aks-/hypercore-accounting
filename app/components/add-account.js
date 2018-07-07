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

const FormElement = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  flex-direction: column;
`

const accountTypes = ['Income', 'Expense', 'Asset', 'Liability']

const AddAccount = ({ screen, notification, flashError, addAccount }) => {
  if (screen !== 'accounts') return <Fragment></Fragment>

  const validateInputs = inputs => {
    const { type } = inputs

    if(!accountTypes.includes(type))
      throw new Error(`Account types can only be of type ${accountTypes.join(', ')}.`)
  }

  const submitForm = (ev) => {
    ev.preventDefault()
    const { target } = ev

    const formData = serialize(target, { hash: true })
    return addAccount(formData)
  }

  const options = accountTypes.map(
    type => <option key={type} value={type}>{type}</option>
  )

  return (
    <Form onSubmit={submitForm}>
      <FormElement>
        <label>ACCOUNT NAME</label>
        <input name="name" type="text" placeholder="Name" required/>
      </FormElement>

      <FormElement>
        <label>ACCOUNT TYPE</label>
        <select name="type" required>
          <option value> -- select account type -- </option>
          {options}
        </select>
      </FormElement>

      <FormElement>
        {
          notification ? 
            <DisabledButton type="submit">ADD ACCOUNT</DisabledButton> :
            <GreenButton type="submit">ADD ACCOUNT</GreenButton>
        }
      </FormElement>
    </Form>
  )
}

export default AddAccount
