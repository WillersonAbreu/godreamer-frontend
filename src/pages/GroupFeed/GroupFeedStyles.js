// Styled components import
import styled from 'styled-components';

import { Row, Col, Avatar, Button, Layout } from 'antd';

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

export const PostListContainer = styled.div`
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  margin: 10px auto;
  height: 20%;
  width: 80%;
  border-radius: 5px;
  justify-content: center;
  font-size: 13px;
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
`;

export const StyledRow = styled(Row)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex: 0;
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

export const ColumnInfo = styled(Col)`
  text-align: center;
  position: relative;
  margin-top: 3vh;
  margin-left: 3vh;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  border-radius: 10px;
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

export const InfoTitle = styled.h2`
  margin-top: 1vh;
`;

export const InfoParagraph = styled.h3`
  opacity: 0.5;
  text-align: center;
  font-size: 16px;
  margin: 1vh;
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

export const ReturnButton = styled(Button)`
  display: block;
  margin-top: 2vh;
  margin-left: 5vh;
  justify-content: center;
  background-color: #30cb7e;
  border: none;
  &:hover {
    background-color: #30cb7e;
    opacity: 0.7;
  }
`;
