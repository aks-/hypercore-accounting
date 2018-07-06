import React from 'react'
import styled from 'styled-components'

const PlainPara = styled.p`
  margin: 0.5rem 2rem;
  text-align: center;
  padding: 0.5rem;
  border-radius: 0.2rem;
  color: var(--color-neutral-30);
`

const BluePara = PlainPara.extend`
  background-color: var(--color-blue)
`

const RedPara = PlainPara.extend`
  background-color: var(--color-red-hover)
`

const Flash = ({ notification, type }) => {
  if (!notification)
    return <PlainPara></PlainPara>

  return (
    type === 'error' ?
    <RedPara>{notification}</RedPara> :
    <BluePara>{notification}</BluePara>
  )
}

export default Flash
