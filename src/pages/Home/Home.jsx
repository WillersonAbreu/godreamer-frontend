// React import
import React from 'react';

// Styles imports
import {
  Container,
  ImageContainer,
  LoginContainerTitle,
  LoginFormContainer,
  StyledLoginForm,
  StyledLoginButton
} from './HomeStyles';

import LoginForm from './LoginForm/LoginForm';

export default function Home() {
  return (
    <Container>
      <ImageContainer />
      <LoginFormContainer>
        <LoginContainerTitle>Faça seu login</LoginContainerTitle>
        <LoginForm />
      </LoginFormContainer>
    </Container>
  );
}
