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
import { Avatar } from 'antd';
import {
  RegisterSelect,
  StyledSelctIcon
} from '~/pages/Home/components/RegisterForm/RegisterFormStyles';

import { Form } from '@unform/web';

import { GLOBAL_URL } from '~/global/shared/config';

export default function CustomLayout(props) {
  const isSigned = localStorage.getItem('token');

  return (
    <Container>
      <Header>
        <LogoWrapper isSigned={isSigned}>
          <StyledLogo src={logo} />
        </LogoWrapper>
        {isSigned && (
          <>
            <Form
              style={{
                margin: '5vh auto',
                display: 'flex',
                flexDirection: 'row',
                width: '67%'
              }}
            >
              <input style={{ width: '70%' }} />
              <RegisterSelect
                style={{
                  height: '5.5vh',
                  borderRadius: '5px',
                  width: '15%',
                  marginRight: '10vw',
                  flex: '1'
                }}
                name="search"
                options={[
                  { value: '1', label: 'Buscar grupo ↓' },
                  { value: '2', label: 'Buscar usuário ↓' }
                ]}
              />
            </Form>
            <RightContainer>
              <Avatar
                style={{ margin: '2.5vh auto' }}
                src={`${GLOBAL_URL}static/profile/ae9268e333b52ef5a024d1175348280c.png`}
              />
            </RightContainer>
          </>
        )}
      </Header>
      <ChildContainer>{props.children}</ChildContainer>
    </Container>
  );
}
