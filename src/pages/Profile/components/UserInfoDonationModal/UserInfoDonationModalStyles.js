import styled from 'styled-components';

// Components imports
import UpdateInputFile from './components/UpdateFileUpload';
import TextArea from '~/components/Unform/TextArea/TextArea';
import Input from '~/components/Unform/Input/Input';
import MaskedInput from '~/components/Unform/MaskedInput/MaskedInput';

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

  width: 35%;
  margin: 1vh auto;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const StyledTextArea = styled(TextArea)`
  display: flex;
  outline: none;
  border: 0.5px solid #30cb7e;
  resize: none;
  height: 15vh;
  width: 90%;
  background-color: white;
  border-radius: 5px;
  margin: 1vh auto;
`;

export const StyledInput = styled(Input)`
  display: flex;
  outline: none;
  border: 0.5px solid #30cb7e;
  height: 25px;
  width: 90%;
  background-color: white;
  border-radius: 5px;
  margin: 1vh auto;
`;

export const StyledMaskedInput = styled(MaskedInput)`
  display: flex;
  outline: none;
  border: 0.5px solid #30cb7e;
  height: 25px;
  width: 90%;
  background-color: white;
  border-radius: 5px;
  margin: 1vh auto;
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
  margin: 1vh auto;
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
