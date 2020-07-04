import React, { useState, useEffect } from 'react';

import { Container, FriendName } from './FriendsStyle';
import Chat from './Chat/Chat';
import { message } from 'antd';
import FriendshipService from '~/services/api/Friends';
import ChatService from '~/services/api/Chat';

function Friends() {
  const [chatWindows, setChatWindows] = useState([]);
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    fetchFriends();
  }, [chatWindows]);

  async function fetchFriends() {
    try {
      const { conversations } = await ChatService.index();
      if (conversations.length > 0) {
        setFriendList(conversations);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChat(user) {
    try {
      let hasUser = chatWindows.indexOf(user);

      // console.log(hasUser);
      if (hasUser === -1) {
        if (chatWindows.length < 3) {
          setChatWindows([...chatWindows, user]);
        } else {
          message.error('Só é permitido abrir três janelas de chat');
        }
      } else {
        message.error('Já tem uma janela com de chat aberta com esse amigo');
      }
    } catch (error) {
      console.log(error);
    }
  }

  function showChatWindows() {
    if (chatWindows.length > 0) {
      return chatWindows.map((chatUser, index) => {
        var aux = index + 1;
        return (
          <Chat
            conversationId={chatUser.id}
            close={closeChatWindow}
            key={index}
            aux={aux}
            userName={chatUser}
          />
        );
      });
    }
  }

  function closeChatWindow(userName) {
    let windowIndex = chatWindows.indexOf(userName);

    if (windowIndex !== -1) {
      let newChatArray = chatWindows.filter(window => {
        return window !== userName;
      });
      setChatWindows(newChatArray);
    }
  }

  return (
    <Container>
      Amigos
      {friendList.length <= 0 && (
        <h5>
          Você ainda não tem amigos, busque por amigos no campo de busca no topo
          da página.
        </h5>
      )}
      {friendList.length > 0 &&
        friendList.map((friend, index) => (
          <FriendName
            key={`user-${friend.User.id}`}
            onClick={() => handleChat(friend)}
          >
            {friend.User.name}
          </FriendName>
        ))}
      {showChatWindows()}
    </Container>
  );
}

export default Friends;
