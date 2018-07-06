import React from 'react'
import styled from 'styled-components'
import { neutral } from 'dat-colors'
import { Plain as PlainButton } from './buttons'

const Container = styled.header`
  height: 2.5rem;
  padding: 0.25rem 0.75rem;
  -webkit-app-region: drag;
  background-color: var(--color-neutral);
  color: var(--color-white);
  z-index: 4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Header = ({ onTabClick }) => {
  const tabs = ['home', 'accounts', 'transactions']

  return (
    <Container>
      {tabs.map(tab => {
        return <PlainButton key={tab} onClick={_ => onTabClick(tab)}>{tab}</PlainButton>
      })}
    </Container>
  )
}

export default Header
