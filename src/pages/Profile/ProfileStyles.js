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
  height: 100%;
  border-right: 0.5px solid #ccc;

  position: fixed;
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

export const Column = styled(Col)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
`;

export const ColumnDesc = styled(Col)`
  display: block;
  margin-top: 2vh;
  margin-left: 5vh;
  justify-content: center;
  position: static;
  border

`;

export const ColumnOutros = styled(Col)`
  margin-top: 5vh;
  margin-left: 5vh;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  border-radius: 10px;
`;

export const ColumnProfile = styled(Col)`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 5vh auto;
  width: 94%;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  border-radius: 10px;
`;

export const StyledAvatar = styled(Avatar)`
  margin: 0 auto;
`;

export const InfoFont = styled.h2`
margin-top: 7vh;
font-size: 23px;
`;

export const InfoFontAlter = styled.h1`
margin-top: 1vh;
text-align: center;
`;

export const InfoAnswers = styled.h2`
font-size: 23px;
margin-top: -2vh;
margin-left: 1vh; 
opacity: 0.5
`;

export const InfoAnswers1 = styled.h3`

margin-top: -2vh;
margin-left: 1vh; 
margin-right: 2vh; 
opacity: 0.5
`;

export const InfoSide = styled.h3`
margin-top: 1vh;
font-size: 20px;
text-align: center;
`;

export const InfoSideAlter = styled.h3`
display: block;
margin-top: 3vh;
text-align: center;
`;

export const InfoDesc = styled.h1`
text-align: center;

`;

export const Buttonn = styled(Button)`
display: block;
margin-top: 1vh;
margin-left: 12.5vh;
justify-content: center;
background-color: #30cb7e;
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
export const Buttonn1 = styled(Button)`
display: block;
margin-top: 3vh;
margin-left: 5vh;
justify-content: center;
background-color: #30cb7e;
border: none;
&:hover {
  background-color: #30cb7e;
  opacity: 0.7;
}
`;
