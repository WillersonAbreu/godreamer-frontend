// React import
import React from 'react';

import { Form } from '@unform/web';

import { Button, Row, Col } from 'antd';

import { UserOutlined, TeamOutlined, HighlightFilled, UserAddOutlined, ArrowLeftOutlined } from '@ant-design/icons';

// Styles imports
import {
  Container,
  Roww,
  ColumnProfile,
  Column,
  ColumnOutros,
  Ava,
  InfoFont,
  InfoFontAlter,
  InfoAnswers,
  InfoSideAlter,
  Buttonn,
  Buttonn1,
  ColumnDesc,
  InfoDesc,
  InfoAnswers1
 
} from './ProfileStyles';


export default function Profile() {

  return (

    <Container>

      <Roww>
    
      <ColumnProfile span={6}>
      <h1>Perfil</h1>
      <Ava size={175} icon={<UserOutlined />} />
      <h1>Nome Sobre</h1>
      </ColumnProfile>

      <Column span={12}>
      <h1>Informações Adicionais</h1>
      <InfoFont>Data de nascimento:</InfoFont>
      <InfoAnswers>03/09/2299</InfoAnswers>
      
      <InfoFont>Tipo de usuário:</InfoFont>
      <InfoAnswers>Sonhador</InfoAnswers>

      </Column>

      <ColumnOutros span={4}>
      <InfoFontAlter>Outros</InfoFontAlter>
      <InfoSideAlter>Grupos</InfoSideAlter>
      <Buttonn type="primary" shape="round" size="large" icon={<TeamOutlined />}>
      </Buttonn>
        <InfoSideAlter>Posts</InfoSideAlter>
      <Buttonn type="primary"  shape="round" size="large" icon={<HighlightFilled />}>
      </Buttonn>

      <InfoSideAlter>Adicionar</InfoSideAlter>
      <Buttonn type="primary"  shape="round" size="large" icon={<UserAddOutlined />}>
      </Buttonn>
      </ColumnOutros>
      </Roww>

      <Roww>
      
      <ColumnDesc span={24}>
      <InfoDesc>Sobre o usuário</InfoDesc>
      <InfoAnswers1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque, diam nec malesuada tincidunt, tellus ex varius libero, sit amet viverra lectus turpis et arcu. Sed rhoncus ex id nisi sollicitudin, et eleifend eros aliquet. Duis euismod in lectus vel facilisis. Vestibulum eleifend at purus ac iaculis. Donec ultricies lorem id tincidunt tincidunt. Sed at interdum tortor, id sodales metus. Vestibulum scelerisque sapien eu magna bibendum pellentesque. Pellentesque ornare purus eget ex placerat pretium. In pharetra vehicula torto.</InfoAnswers1>
      </ColumnDesc>
      <Buttonn1 type="primary"  shape="round" size="large" icon={<ArrowLeftOutlined />}>
        Voltar
      </Buttonn1>
      </Roww>
    </Container>
  
    

  );
}
