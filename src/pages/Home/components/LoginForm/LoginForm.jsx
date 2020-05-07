import React from 'react';

// Components imports
import Input from '../../../../components/Unform/Input/Input';

// Styles imports
import { StyledLoginForm, StyledLoginButton } from './LoginFormStyles';

// Services imports
import AuthService from '../../../../services/api/Auth';

export default function LoginForm() {
  async function handleLoginSubmit(data) {
    try {
      const response = await AuthService.login(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
