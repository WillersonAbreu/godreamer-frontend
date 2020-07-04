import styled from 'styled-components';
import { Form } from '@unform/web';
import Input from '~/components/Unform/Input/Input';

export const Container = styled.div`
  position: absolute;
  bottom: 12vh;
  left: ${props => `-${props.aux * 200}px`};
  width: 200px;
  height: 300px;
  background-color: white;
  border: 0.5px solid #ccc;
  border-radius: 7px;
`;

export const FriendName = styled.a`
  text-decoration: none;
`;

export const CloseButton = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
`;

export const MessageInput = styled(Input)`
  height: 5vh;
  width: 79%;
  border: 0.5px solid #ccc;
  border-radius: 7px;
  margin: 1vh auto;
`;

export const MessagesWrapper = styled.div`
  height: 37vh;
  width: 98%;
  margin: 0 auto;
  border: 0.5px solid #ccc;
`;

export const MyMessage = styled.span`
  color: black;
  max-height: 30%;
  background-color: lightblue;
  right: 0px;
  float: right;
  margin-right: 5px;
  margin-top: 10px;
  border-radius: 5px;
  width: 90%;
  text-align: left;
`;

export const FriendMessage = styled.span`
  color: black;
  max-height: 30%;
  background-color: lightgreen;
  right: 0px;
  float: left;
  margin-left: 5px;
  margin-top: 10px;
  border-radius: 5px;
  width: 90%;
  text-align: left;
`;
