import styled from '@emotion/styled'
import { Button, TextField } from '@mui/material'
import Router from 'next/router'
import React from 'react'

const login = () => {
  Router.push('/bung')
}

const Login = () => {
  return (
    <Container>
      <TextField
        required
        id="outlined-required"
        label="Username"
        defaultValue="Hello World"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <div>
        <Button variant='outlined' onClick={login}>login</Button>
        <Button variant='outlined'>회원가입</Button>
      </div>
    </Container>
  )
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export default Login