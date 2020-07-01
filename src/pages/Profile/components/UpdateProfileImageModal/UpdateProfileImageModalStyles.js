import styled from 'styled-components';

// Components imports
import UpdateInputFile from './components/UpdateFileUpload';

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
