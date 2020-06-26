import styled from 'styled-components';

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
