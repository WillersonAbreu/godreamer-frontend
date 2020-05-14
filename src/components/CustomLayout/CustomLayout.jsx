import React from 'react';

// Style imports
import { Container, ChildContainer } from './CustomLayoutStyles';

// Header import
import Header, {
  StyledLogo,
  LogoWrapper
  // RightContainer
} from '../Header/HeaderStyles';

// Logo import
import logo from '../Header/Assets/logo.svg';

// Redux
import store from '~/store';

export default function CustomLayout(props) {
  const state = store.getState();
  const isSigned = !!state.auth.token;

  return (
    <Container>
      <Header>
        <LogoWrapper isSigned={isSigned}>
          <StyledLogo src={logo} />
        </LogoWrapper>
      </Header>
      <ChildContainer>{props.children}</ChildContainer>
    </Container>
  );
}
