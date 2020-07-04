import React, { useState, useEffect } from 'react';

import { Container, Grid } from './GroupsStyles';

// Services
import FollowGroupService from '~/services/api/FollowGroup';
import GroupService from '~/services/api/Group';

// Components
import GroupItem from '../GroupItem/GrouItem';

import { useHistory } from 'react-router-dom';

function Groups({ userId, userType }) {
  const [followedGroups, setFollowedGroups] = useState(null);
  const [ownGroups, setOwnGroups] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchFollowedGroups();
    fetchOwnGroups();
  }, [userId]);

  async function fetchFollowedGroups() {
    try {
      const { followedGroups } = await FollowGroupService.followedGroups(
        userId
      );
      setFollowedGroups(followedGroups);
    } catch (error) {
      return;
    }
  }

  async function fetchOwnGroups() {
    try {
      const { myGroups } = await GroupService.myGroups(userId);
      setOwnGroups(myGroups);
    } catch (error) {
      return;
    }
  }

  return (
    <Container>
      {userType === 2 && (
        <>
          <h2>Grupos criados:</h2>
          <Grid>
            {!ownGroups && <span>O usuário não segue nenhum grupo</span>}
            {ownGroups !== null &&
              ownGroups !== undefined &&
              ownGroups.map(group => (
                <a
                  style={{ width: '14vw' }}
                  key={`own-${group.id}`}
                  onClick={() => history.push(`/group/${group.id}`)}
                >
                  <GroupItem
                    groupName={group.group_name}
                    groupImage={group.group_image}
                  />
                </a>
              ))}
          </Grid>
          <hr style={{ width: '100%' }} />
        </>
      )}

      <h2>Grupos seguidos:</h2>
      <Grid>
        {!followedGroups && <span>O usuário não segue nenhum grupo</span>}
        {followedGroups &&
          followedGroups.map(group => (
            <a
              style={{ width: '14vw' }}
              key={`followed-${group.Group.id}`}
              onClick={() => history.push(`/group/${group.Group.id}`)}
            >
              <GroupItem
                groupName={group.Group.group_name}
                groupImage={group.Group.group_image}
              />
            </a>
          ))}
      </Grid>
    </Container>
  );
}

export default Groups;
