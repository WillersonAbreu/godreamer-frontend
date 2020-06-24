// Styled components import
import styled from 'styled-components';

import { Col, Avatar, Button } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  min-height: 86.9vh;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  width: 20%;
  height: 100%;
  border-right: 0.5px solid #ccc;

  position: fixed;
`;

export const FeedSection = styled.main`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-height: 100%;
  overflow-y: hidden;
  position: absolute;
  margin-left: 15.35%;
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 85%;
  min-height: 86.9vh;
`;

export const ColumnGroup = styled(Col)`
  text-align: center;
  margin: 2vh auto;
  max-width: 80%;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
`;

export const GroupAvatar = styled(Avatar)`
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

export const ProfileAvatar = styled(Avatar)`
  margin-bottom: 2vh;
`;

export const InfoAnswers = styled.h3`
  opacity: 0.8;
`;

export const StyledButton = styled(Button)`
  display: block;
  background-color: #30cb7e;
  margin: 2vh auto;

  border: none;
  &:hover {
    background-color: #30cb7e;
    opacity: 0.7;
  }
  &:active {
    background-color: #30cb7e;
    opacity: 0.7;
  }
`;

