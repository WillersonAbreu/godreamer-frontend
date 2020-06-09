import React, { useRef } from 'react';

// Yup import
import * as Yup from 'yup';

// Ant design imports
import { message } from 'antd';

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
  const formRef = useRef(null);
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required('É necessário inserir o campo email'),
    password: Yup.string().required('É necessário inserir o campo senha')
  });

  async function handleLoginSubmit(data) {
    dispatch(AuthActions.authStart());

    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      await validationSchema.validate(data, {
        abortEarly: false
      });

      const response = await AuthService.login(data);

      if (response.token) {
        saveToken(response.token);
        dispatch(AuthActions.authSuccess(response.token));
        message.success('Login realizado com sucesso!');
        history.push('/feed');
      }
    } catch (error) {
      // Showing validation errors on
      const validationErrors = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      } else {
        message.error('Falha ao realizar login!');
      }

      dispatch(AuthActions.authFail());
    }
  }

  return token === null ? (
    <StyledLoginForm ref={formRef} onSubmit={handleLoginSubmit}>
      <Input name="email" placeholder="Insira seu email" />
      <Input name="password" placeholder="Insira sua senha" type="password" />
      <StyledLoginButton>Login</StyledLoginButton>
    </StyledLoginForm>
  ) : (
    <Redirect to="/feed" />
  );
}
