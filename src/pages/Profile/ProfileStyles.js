// Styled components import
import styled from 'styled-components';

import { Row, Col, Avatar, Button } from 'antd';

export const Container = styled.div`
  display: absolute;
  width: 99%;
  height: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  width: 20%;
  height: 86.8vh;
  border-right: 0.5px solid #ccc;
  position: fixed;
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: 60%;
  /* max-height: 100%; */
  overflow-y: hidden;
  position: absolute;
  margin-left: 20%;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  right: 0;
  width: 20%;
  height: 100%;
  border-right: 0.5px solid #ccc;
  position: fixed;
`;

export const ColumnOutros = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh auto;
  width: 70%;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  border-radius: 10px;
  justify-content: center;
`;

export const MoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 94%;
  margin: 1vh auto;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  position: static;
  display: flex;
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/66a0f570992565.5bb5e83e6775c.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  width: 69%;
  height: 87vh;
`;

export const LoginFormContainer = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  width: 30%;
  text-align: center;
`;

export const LoginContainerTitle = styled.h1`
  color: #1f804f;
`;

export const Roww = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 99%;
  height: 100%;
`;

export const ColumnProfile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 94%;
  margin: 2vh auto;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  border-radius: 10px;
`;

export const StyledAvatar = styled(Avatar)`
  display: flex;
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const InfoFontAlter = styled.h1`
  margin-top: 1vh;
  text-align: center;
`;

export const InfoSide = styled.h3`
  margin-top: 1vh;
  font-size: 20px;
  text-align: center;
`;

export const InfoSideAlter = styled.h3`
  display: block;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  && {
    width: 50%;
  }
  display: block;
  background-color: #30cb7e;
  margin: 2vh auto;
  border: none;
  text-align: center;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  &:hover {
    background-color: #30cb7e;
    opacity: 0.7;
  }
  &:active {
    background-color: #30cb7e;
    opacity: 0.7;
  }
`;
