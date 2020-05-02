import styled from 'styled-components';

import { Form } from '@unform/web';

export const StyledLoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 0.25;
  height: 50%;
  width: 100%;
  justify-content: space-between;
`;

export const StyledLoginButton = styled.button`
  outline: none;
  margin: 0 auto;
  width: 70%;
  height: 5vh;
  text-align: center;
  background-color: #1f804f;
  border: 2px solid #1f804f;
  border-radius: 5px;
  color: white;
`;
