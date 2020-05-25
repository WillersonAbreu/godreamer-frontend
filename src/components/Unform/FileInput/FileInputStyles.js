import styled from 'styled-components';

export const FileInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: white;
  border: 0.5px solid #30cb7e;
  border-radius: 5px;
  background-color: #30cb7e;

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
