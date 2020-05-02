import styled from 'styled-components';

import { Form } from '@unform/web';

export const StyledLoginForm = styled(Form)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex: 0.3;
  height: 50%;
  width: 95%;
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

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;
