// React import
import React from 'react';

import { Form } from '@unform/web';

import { Layout, Col } from 'antd';

import FileUpload from '~/components/Unform/FileInput/FileInput';

import GroupForm from './components/GroupForm/GroupForm';
import GroupPost from './components/GroupPost/GroupPost';


import { UserOutlined, PlaySquareOutlined, PictureOutlined, ArrowLeftOutlined, TeamOutlined, PayCircleOutlined} from '@ant-design/icons';


// Styles imports
import {
 Container,
 Container1,
 Buttonn,
 Buttonn1,
 Roww,
 ColumnGroup,
 Ava,
 Ava1,
 InfoAnswers1,
 StyledForm,
 StyledTextArea,
 RightFormContent,
 StyledButton,
 ColumnInfo,
 InfoParagraph,
 InfoTitle
} from './GroupFeedStyles';


export default function GroupFeed() {

  return (
      <Container>
      
      <Roww>
        
        <ColumnGroup span={4}>
          <Ava size={120} icon={<TeamOutlined />} />
            <h2>Pedreiro Skills</h2>
        </ColumnGroup>
        
        <Col span={14}>

        <GroupForm/>

        </Col>
        <ColumnInfo span={5}>
            <InfoTitle>Info</InfoTitle>
            <InfoParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quaerat impedit ab laboriosam vitae officia repellendus omnis possimus modi cum reprehenderit aut</InfoParagraph>
        </ColumnInfo>
      
      </Roww>

      <Roww>

        <ColumnGroup span={4}>
          
          <InfoAnswers1>Criador</InfoAnswers1>
          <Ava1 size={90} icon={<UserOutlined />} />
          <h3>Jair biroliro</h3>
          <Buttonn type="primary" shape="round" size="large" icon={<PayCircleOutlined/>}>
             Doar
          </Buttonn>
        
        </ColumnGroup>

        <GroupPost/>
        
      </Roww>
      
      <Roww>
        
        <Buttonn1 type="primary"  shape="round" size="large" icon={<ArrowLeftOutlined />}>
        Voltar
        </Buttonn1>
      
      </Roww>
     
      </Container>

  );
}
