import React from 'react';

// Style imports
import { Container, ChildContainer } from './CustomLayoutStyles';

// Header import
import Header, {
  StyledLogo,
  LogoWrapper,
  RightContainer
} from '../Header/HeaderStyles';

// Logo import
import logo from '../Header/Assets/logo.svg';

export default function CustomLayout(props) {
  return (
    <Container>
      <Header>
        <LogoWrapper>
          <StyledLogo src={logo} />
        </LogoWrapper>
      </Header>
      <ChildContainer>{props.children}</ChildContainer>
    </Container>
  );
}
