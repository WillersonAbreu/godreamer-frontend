import React from 'react';

// Components imports
import Input from '~/components/Unform/Input/Input';

// Styles imports
import { StyledLoginForm, StyledLoginButton } from './LoginFormStyles';

// Services imports
import AuthService from '~/services/api/Auth';

// Helpers
import { saveToken } from '~/helpers/AuthHelper';

// History
import { useHistory, Redirect } from 'react-router-dom';

export default function LoginForm() {
  const token = localStorage.getItem('token');
  const history = useHistory();

  async function handleLoginSubmit(data) {
    try {
      const response = await AuthService.login(data);
      saveToken(response.token);
      history.push('/feed');
    } catch (error) {
      console.log(error);
    }
  }

  return token === null ? (
    <StyledLoginForm onSubmit={handleLoginSubmit}>
      <Input name="email" placeholder="Inser your email" />
      <Input
        name="password"
        placeholder="Insert your password"
        type="password"
      />
      <StyledLoginButton>Login</StyledLoginButton>
    </StyledLoginForm>
  ) : (
    <Redirect to="/feed" />
  );
}
