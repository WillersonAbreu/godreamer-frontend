import React from 'react';

//Components
import {
  Container,
  GroupsSection,
  FeedSection,
  ChatSection
} from './NetworkContentLayoutStyles';

export default function NetworkContentLayout(props) {
  return (
    <Container>
      <GroupsSection>
        <h1>Groups</h1>
      </GroupsSection>
      <FeedSection>{props.children}</FeedSection>
      <ChatSection>
        <h1>Chats</h1>
      </ChatSection>
    </Container>
  );
}
