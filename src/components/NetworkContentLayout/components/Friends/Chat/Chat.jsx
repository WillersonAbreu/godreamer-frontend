import React, { useEffect, useState } from 'react';

// Socket IO
import io from 'socket.io-client';

import {
  Container,
  CloseButton,
  StyledForm,
  MessageInput,
  MessagesWrapper,
  MyMessage,
  FriendMessage
} from './ChatStyles';
import { StyledButton } from '~/pages/Feed/components/PostForm/PostFormStyles';
import { SendOutlined } from '@ant-design/icons';

import { AiFillCloseCircle } from 'react-icons/ai';
import { Tooltip, message } from 'antd';
import { useHistory } from 'react-router-dom';
import ChatService from '~/services/api/Chat';
import { useSelector, useDispatch } from 'react-redux';
import { GLOBAL_URL } from '~/global/shared/config';
import { useRef } from 'react';

function Chat({ aux, userName, close, conversationId }) {
  const loggedUserId = useSelector(state => state.user.id);
  const history = useHistory();
  const [messagesList, setMessagesList] = useState([]);
  const refresh = useSelector(state => state.global.refresh);
  const disptach = useDispatch();
  const [hasMessage, setHasMessage] = useState(false);

  const socket = io(GLOBAL_URL);

  var messagesWrapperRef = useRef();

  useEffect(() => {
    fetchMessages();
  }, [refresh]);

  function toTheBottom() {
    try {
      messagesWrapperRef.current.scrollTop = 1000;
    } catch (error) {
      console.log(error);
    }
  }

  socket.on('messageReceived', newMessage => {
    setMessagesList([...messagesList, newMessage]);
    toTheBottom();
  });

  async function fetchMessages() {
    try {
      const { conversations } = await ChatService.getMessages(conversationId);

      if (conversations.length > 0) {
        setMessagesList(conversations);
        toTheBottom();
      }
    } catch (error) {
      return;
    }
  }

  async function handleMessage(data, { reset }) {
    try {
      if (!data.body_message) {
        message.error('É necessário inserir uma mensagem');
        return;
      }
      const response = await ChatService.create(conversationId, data);
      socket.emit('chatMessage', response);
      // reset();
    } catch (error) {
      reset();
      message.error('Erro ao enviar a mensagem, tente mais tarde.');
    }
  }

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
        <Tooltip title={`Ir para o perfil de ${userName.User.name}`}>
          <CloseButton
            onClick={() => history.push(`/profile/${userName.User.name}`)}
          >
            {userName.User.name}
          </CloseButton>
        </Tooltip>
        <Tooltip title={`Fechar a conversa com ${userName.User.name}`}>
          <CloseButton onClick={() => close(userName)}>
            <AiFillCloseCircle />
          </CloseButton>
        </Tooltip>
      </div>

      <MessagesWrapper ref={messagesWrapperRef} name="chat">
        {messagesList &&
          messagesList.map((message, index) => {
            if (message.user_id === loggedUserId) {
              return (
                <MyMessage key={`message-${message.user_id}-${message.id}`}>
                  <strong>Você diz:</strong> {message.body_message}
                </MyMessage>
              );
            } else {
              return (
                <FriendMessage key={`message-${message.user_id}-${message.id}`}>
                  <strong>{userName.User.name} diz: </strong>
                  {message.body_message}
                </FriendMessage>
              );
            }
          })}
      </MessagesWrapper>
      <StyledForm onSubmit={handleMessage}>
        <MessageInput name="body_message" />
        <Tooltip title="Enviar mensagem">
          <StyledButton style={{ margin: '1vh 2%' }}>
            <SendOutlined />
          </StyledButton>
        </Tooltip>
      </StyledForm>
    </Container>
  );
}

export default Chat;
