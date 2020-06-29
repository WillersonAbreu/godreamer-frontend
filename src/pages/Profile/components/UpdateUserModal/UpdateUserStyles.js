import styled from 'styled-components';

// Components imports
import UpdateInputFile from './components/UpdateFileUpload';

// Unform
import Input from '~/components/Unform/Input/Input';
import DatePicker from '~/components/Unform/Datepicker/ReactDatepicker';
import Select from '~/components/Unform/Select/ReactSelect';
import { Form } from '@unform/web';

import { CaretDownOutlined } from '@ant-design/icons';

export const StyledForm = styled(Form)``;

export const InputsWrapper = styled.div`
  display: inline-grid;
  grid-template-columns: 49% 49%;
  width: 100%;
  row-gap: 2vh;
`;

export const StyledDatePicker = styled(DatePicker)`
  && {
    display: inline-block;
    width: 98% !important;
    margin-left: 2.5%;
  }
`;

export const UpdateInput = styled(Input)`
  width: 95%;
  margin: 0 auto;
`;

export const StyledFileUploader = styled(UpdateInputFile)``;

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  border: 0.5px solid #30cb7e;
  border-radius: 5px;
  background-color: #30cb7e;
  text-align: center;
  font-size: 85%;

  width: 50%;
  margin: 1vh auto;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const StyledInputLabel = styled.label`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const StyledUpdateButton = styled.button`
  display: flex;
  height: 4vh;
  margin: 1vh auto;
  color: white;
  font-weight: bolder;
  outline: none;
  background-color: #1f804f;
  border: none;
  border-radius: 5px;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const StyledDeleteButton = styled.button`
  display: flex;
  height: 4vh;
  margin: 1vh 0 auto auto;
  color: white;
  font-weight: bolder;
  outline: none;
  background-color: red;
  border: none;
  border-radius: 5px;
  text-align: center;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
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
