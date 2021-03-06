import React, { useState, useEffect } from 'react';

// History
import { useHistory } from 'react-router-dom';

// Redux imports
import { useSelector } from 'react-redux';

// Styled componetns imports
import {
  Container,
  GroupActionsection,
  OwnGroupsContainer,
  FollowedGroupsContainer,
  CreateGroupButton,
  GroupItem
} from './GroupsStyles';

// Components imports
import Modal from './components/GroupModal/GroupModal';

// Services
import GroupService from '~/services/api/Group';

function Groups() {
  const [visible, setVisible] = useState(false);
  const [groupList, setGroupList] = useState([]);
  const [followedGroupList, setFollowedGroupList] = useState([]);
  const userType = useSelector(state => state.user.user_type);
  const userId = useSelector(state => state.user.id);

  const history = useHistory();

  useEffect(() => {
    fetchOwnGroups();
    fetchFollowedGroups();
  }, [userId]);

  function showModal() {
    setVisible(true);
  }

  async function fetchOwnGroups() {
    try {
      const { myGroups } = await GroupService.myGroups(userId);
      setGroupList(myGroups);
    } catch (error) {
      return null;
    }
  }

  async function fetchFollowedGroups() {
    try {
      const { followedGroups } = await GroupService.followedGroups(userId);
      setFollowedGroupList(followedGroups);
    } catch (error) {
      return null;
    }
  }

  return (
    <Container>
      {userType === 2 && (
        <>
          Grupos
          <GroupActionsection>
            <CreateGroupButton onClick={() => showModal()}>
              Criar um novo grupo
            </CreateGroupButton>
          </GroupActionsection>
          <hr style={{ border: '0.5px solid #ccc', width: '99.1%' }} />
          <OwnGroupsContainer>
            <label
              style={{
                borderBottom: '0.5px solid #1f804f',
                marginBottom: '1vh'
              }}
            >
              Meus grupos
            </label>
            {groupList &&
              groupList.map(group => (
                <GroupItem
                  key={group.id + group.group_name}
                  onClick={() => history.push(`/group/${group.id}`)}
                >
                  {/* <Tooltip title="Clique para ir ao grupo">
                    <StyledGroupImage>
                      <img
                        src={`http://localhost:3333static/group/${group.group_image}`}
                      />
                    </StyledGroupImage>
                  </Tooltip> */}
                  {/* <span> {group.group_image} </span> */}

                  <span>{group.group_name}</span>
                </GroupItem>
              ))}
          </OwnGroupsContainer>
        </>
      )}
      <hr style={{ border: '0.5px solid #ccc', width: '99.1%' }} />
      <FollowedGroupsContainer>
        <label
          style={{
            borderBottom: '0.5px solid #1f804f',
            marginBottom: '1vh'
          }}
        >
          Seguindo
        </label>
        {followedGroupList &&
          followedGroupList.map(group => (
            <GroupItem
              key={group.id + group.group_name}
              onClick={() => history.push(`/group/${group.Group.id}`)}
            >
              <span key> {group.Group.group_name} </span>
            </GroupItem>
          ))}
      </FollowedGroupsContainer>
      <Modal
        visible={visible}
        setVisible={setVisible}
        getGroups={fetchOwnGroups}
        title="Novo grupo"
      />
    </Container>
  );
}

export default Groups;
