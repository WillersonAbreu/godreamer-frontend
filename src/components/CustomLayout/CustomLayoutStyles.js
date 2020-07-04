// Styled components import
import styled from 'styled-components';
import { Avatar } from 'antd';
import Select from '../Unform/Select/ReactSelect';
import Input from '../Unform/Input/Input';

export const Container = styled.div`
  display: flex;
  z-index: 1;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ChildContainer = styled.main`
  display: flex;
  margin-top: 80px;
`;

export const StyledSelect = styled(Select)`
  width: 6vw;
  border: none;
  border-radius: 0;
  -webkit-appearance: unset;
  background-color: white;
  border-left: 0.5px solid #ccc;
  outline: none;
  font-size: 1.1vw;
`;

export const SelectIconWrapper = styled.div`
  background-color: white;
  border-right: 0.5px solid #ccc;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
`;

export const SearchButtonWrapper = styled.div`
  height: 4vh;
  width: 3vw;
  background-color: white;
  font-size: 1.2vw;
  padding-top: 0.5vh;
`;

export const SearchButton = styled.button`
  background: none;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const StyledInput = styled(Input)`
  border: none;
  border-radius: 0;
  border-right: 0.5px solid #ccc;
  padding-left: 1vw;
`;

export const StyledAvatar = styled(Avatar)`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
