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

import Input from '../../components/Unform/Input/Input';

export default function Home() {
  function handleLoginSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <ImageContainer />
      <LoginFormContainer>
        <LoginContainerTitle>Faça seu login</LoginContainerTitle>
        <StyledLoginForm onSubmit={handleLoginSubmit}>
          <Input name="email" placeholder="Inser your email" />
          <Input
            name="password"
            placeholder="Insert your password"
            type="password"
          />
          <StyledLoginButton>Login</StyledLoginButton>
        </StyledLoginForm>
      </LoginFormContainer>
    </Container>
  );
}
