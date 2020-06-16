import React from 'react';

//Components
import {
  Container,
  GroupsSection,
  FeedSection,
  ChatSection
} from './NetworkContentLayoutStyles';

import Groups from './components/Groups/Groups';

export default function NetworkContentLayout(props) {
  return (
    <Container>
      <GroupsSection>
        <Groups></Groups>
      </GroupsSection>
      <FeedSection>{props.children}</FeedSection>
      <ChatSection>
        <h1>Chats</h1>
      </ChatSection>
    </Container>
  );
}
