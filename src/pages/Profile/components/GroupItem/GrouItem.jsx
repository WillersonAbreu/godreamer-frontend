import React from 'react';

import { Container } from './GroupItemStyles';
import { GLOBAL_URL } from '~/global/shared/config';

function GroupItem({ groupName, groupImage }) {
  return (
    <Container>
      <img src={`${GLOBAL_URL}static/group/${groupImage}`} />
      <span>{groupName}</span>
    </Container>
  );
}

export default GroupItem;
