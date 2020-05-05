import styled from 'styled-components';

import { Form } from '@unform/web';
import Input from '~/components/Unform/Input/Input';
import Select from '~/components/Unform/Select/ReactSelect';

import { CaretDownOutlined } from '@ant-design/icons';

export const StyledRegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex: 0.3;
  height: 50%;
  width: 100%;
`;

export const StyledRegisterButton = styled.button`
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

export const InputWrapper = styled.div`
  margin: 1vh 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 0.1;
  width: 100%;
`;

export const RegisterInput = styled(Input)`
  width: 46%;
  margin: 0 auto;
`;

export const StyledSelctIcon = styled(CaretDownOutlined)`
  border: 0.5px solid #30cb7e;
  border-radius: 0 5px 5px 0;

  &:svg {
    padding-top: 1%;
  }
`;

export const RegisterSelectWrapper = styled.div`
  margin: 5px auto;
  display: flex;
  flex-direction: row;
  border-radius: 5px;

  width: 97.5%;
  height: 25px;

  &:span {
    border-right: '0.5px solid #30cb7e';
  }
`;

export const RegisterSelect = styled(Select)`
  display: flex;
  margin: 0 auto;
  margin-bottom: 5px;
  background-color: white;
  height: 25px;
  width: 95%;

  outline: none;
  border-top: 0.5px solid #30cb7e;
  border-left: 0.5px solid #30cb7e;
  border-right: none;
  border-bottom: 0.5px solid #30cb7e;

  border-radius: 5px 0 0 5px;

  -webkit-appearance: unset;
`;
