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

// Redux
import { useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/Auth';

export default function LoginForm() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleLoginSubmit(data) {
    try {
      dispatch(AuthActions.authStart());
      const response = await AuthService.login(data);
      saveToken(response.token);
      dispatch(AuthActions.authSuccess(response.token));
      history.push('/feed');
    } catch (error) {
      console.log(error);
      dispatch(AuthActions.authFail());
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
