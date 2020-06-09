import styled from 'styled-components';

import TextArea from '~/components/Unform/TextArea/TextArea';
import { Form } from '@unform/web';

export const Container = styled.div`
  display: flex;
  margin: 10px auto;
  height: 20%;
  width: 80%;
  /* border: 0.5px solid #1f804f; */
  border-radius: 5px;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
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
  justify-content: space-between;
  height: 15vh;
  width: 30%;
  margin: 1vh 1vw;
`;

export const StyledButton = styled.button`
  color: white;
  font-size: 85%;
  font-weight: bolder;
  outline: none;
  background-color: #1f804f;
  border: none;
  border-radius: 5px;
  text-align: center;

  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
