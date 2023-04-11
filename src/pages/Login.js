import React from 'react'
import styled from 'styled-components'
import { LoginForm } from '../components'

const LoginMain = styled.main``

const LoginBox = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px 20px 5px;

  border-radius: 6px;

  /* background-color: #f8f8f8; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`

export const Login = () => {
  return (
    <main>
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </main>
  )
}
