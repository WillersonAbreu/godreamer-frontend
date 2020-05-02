import React from 'react';

import Input from '../../../components/Unform/Input/Input';

import { StyledLoginForm, StyledLoginButton } from './LoginFormStyles';

export default function LoginForm() {
  function handleLoginSubmit(data) {
    console.log(data);
  }

  return (
    <StyledLoginForm onSubmit={handleLoginSubmit}>
      <Input name="email" placeholder="Inser your email" />
      <Input
        name="password"
        placeholder="Insert your password"
        type="password"
      />
      <StyledLoginButton>Login</StyledLoginButton>
    </StyledLoginForm>
  );
}
