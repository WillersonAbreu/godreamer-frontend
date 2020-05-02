// React import
import React from 'react';

// Styles imports
import {
  Container,
  ImageContainer,
  LoginContainerTitle,
  LoginFormContainer
} from './HomeStyles';

import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

export default function Home() {
  return (
    <Container>
      <ImageContainer />
      <LoginFormContainer>
        <LoginContainerTitle>Faça seu login</LoginContainerTitle>
        <LoginForm />

        <LoginContainerTitle>Faça seu cadastro</LoginContainerTitle>
        <RegisterForm />
      </LoginFormContainer>
    </Container>
  );
}
