import React, { useState, useEffect } from 'react';

import { Container, FriendName } from './FriendsStyle';
import Chat from './Chat/Chat';

function Friends() {
  const [chatWindows, setChatWindows] = useState([]);

  useEffect(() => {}, [chatWindows]);

  var friendList = [
    'Rayssa',
    'Leonel',
    'Christian',
    'Aline',
    'José',
    'Osvaldo'
  ];

  function handleChat(user) {
    setChatWindows([...chatWindows, user]);
  }

  function showChatWindows() {
    if (chatWindows.length > 0) {
      return chatWindows.map((chatUser, index) => {
        var aux = index + 1;
        return (
          <Chat key={index} aux={aux} userName={chatUser} />
          // <div
          //   key={index}
          //   style={{
          //     position: 'absolute',
          //     bottom: '12vh',
          //     left: `-${aux * 200}px`,
          //     width: '200px',
          //     height: '300px',
          //     backgroundColor: 'white',
          //     border: '0.5px solid #ccc',
          //     borderRadius: '7px'
          //   }}
          // >
          //   {chatUser}
          // </div>
        );
      });
    }
  }

  return (
    <Container>
      <h2>Amigos</h2>
      {friendList.map(user => (
        <FriendName key={user} onClick={() => handleChat(user)}>
          {user}
        </FriendName>
      ))}
      {showChatWindows()}
    </Container>
  );
}

export default Friends;
