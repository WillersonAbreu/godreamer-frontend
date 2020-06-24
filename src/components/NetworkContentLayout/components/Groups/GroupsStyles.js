// Styled components imports
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const GroupActionsection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 0.7;
`;

export const OwnGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 0.7;
`;

export const FollowedGroupsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 0.7;
`;

export const CreateGroupButton = styled.button`
  margin: 5vh auto;
  width: 80%;
  outline: none;
  border: none;
  border-radius: 5px;
  text-align: center;
  color: white;
  background-color: #30cb7e;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const GroupItem = styled.a`
  display: flex;
  flex-direction: column;
  margin: 0 2vh;
  min-width: 100%;
  min-height: 20%;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

