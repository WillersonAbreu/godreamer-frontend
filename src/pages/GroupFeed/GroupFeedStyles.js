// Styled components import
import styled from 'styled-components';

import { Row, Col, Avatar, Button, Layout } from 'antd';


export const Container = styled.div`
display: absolute;
width: 100%;
height: 100%;
`;

export const Roww = styled(Row)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex: 0;
`;

export const ColumnGroup = styled(Col)`
  text-align: center;
  margin-top: 3vh;
  margin-left: 3vh;
  -webkit-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  -moz-box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  box-shadow: 0px 0px 10px -3px rgba(1, 33, 2, 1);
  border-radius: 10px;
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

export const Ava = styled(Avatar)`
  margin-top: 5vh;
  margin-bottom: 2vh;
`;

export const Ava1 = styled(Avatar)`
  margin-bottom: 2vh;
`;

export const InfoAnswers1 = styled.h3`
opacity: 0.8
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

export const Buttonn = styled(Button)`
display: block;
background-color: #30cb7e;
margin-top: 2vh;
margin-bottom: 2vh;
margin-left: 9.8vh;

border: none;
&:hover {
  background-color: #30cb7e;
  opacity: 0.7;
}
&:active {
  background-color: #30cb7e;
  opacity: 0.7;
}`
;

export const Buttonn1 = styled(Button)`
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