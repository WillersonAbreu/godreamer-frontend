import React from 'react';

import { Container } from './ChatStyles';
import TextArea from '~/components/Unform/TextArea/TextArea';
import { StyledButton } from '~/pages/Feed/components/PostForm/PostFormStyles';
import { SendOutlined } from '@ant-design/icons';

function Chat({ aux, userName }) {
  return (
    <Container aux={aux}>
      <div
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '0 auto'
        }}
      >
        <span>{userName}</span> <span>X</span>
      </div>

      <div
        style={{
          height: '37vh',
          width: '98%',
          margin: '0 auto',
          border: '0.5px solid #ccc'
        }}
        name="chat"
      >
        <span
          style={{
            height: '4vh',
            backgroundColor: 'lightblue',
            right: '0px',
            float: 'right',
            marginRight: '5px',
            marginTop: '10px',
            borderRadius: '5px',
            width: '50%'
          }}
        >
          <strong>Você diz: </strong> Oi
        </span>

        <span
          style={{
            height: '4vh',
            backgroundColor: 'lightgreen',
            right: '0px',
            float: 'left',
            marginLeft: '5px',
            marginTop: '10px',
            borderRadius: '5px',
            width: '50%'
          }}
        >
          <strong>Rayssa diz: </strong> Oi, tudo bem?
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: '0 auto'
        }}
      >
        <input
          style={{
            height: '5vh',
            width: '79%',
            border: '0.5px solid #ccc',
            borderRadius: '7px',
            margin: '0 auto'
          }}
          name="message"
        />
        <StyledButton style={{ marginRight: '2%' }}>
          <SendOutlined />
        </StyledButton>
      </div>
    </Container>
  );
}

export default Chat;
