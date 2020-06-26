import React from 'react';

//Components
import {
  Container,
  GroupsSection,
  FeedSection,
  ChatSection
} from './NetworkContentLayoutStyles';

import Groups from './components/Groups/Groups';
import Friends from './components/Friends/Friends';

export default function NetworkContentLayout(props) {
  return (
    <Container>
      <GroupsSection>
        <Groups />
      </GroupsSection>
      <FeedSection>{props.children}</FeedSection>
      <ChatSection>
        <Friends />
      </ChatSection>
    </Container>
  );
}
