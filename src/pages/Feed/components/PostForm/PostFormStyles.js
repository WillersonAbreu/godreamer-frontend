import styled from 'styled-components';

import TextArea from '~/components/Unform/TextArea/TextArea';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  margin: 10px auto;
  height: 20%;
  width: 95%;
  border: 0.5px solid #1f804f;
  border-radius: 5px;
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100%;
`;

export const StyledTextArea = styled(TextArea)`
  display: flex;
  outline: none;
  border: 0.5px solid #30cb7e;
  resize: none;
  height: 15vh;
  width: 65%;
  background-color: white;
  border-radius: 5px;
  margin: 1vh 0;
`;

export const RightFormContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 15vh;
  width: 30%;
  margin: 1vh 1vw;
`;
