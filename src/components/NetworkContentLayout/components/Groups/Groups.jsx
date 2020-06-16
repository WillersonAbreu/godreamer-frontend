import React, { useState, useEffect } from 'react';

// Redux imports
import { useSelector } from 'react-redux';

// Ant design imports
import { Tooltip } from 'antd';

// Styled componetns imports
import {
  Container,
  GroupActionsection,
  OwnGroupsContainer,
  FollowedGroupsContainer,
  CreateGroupButton,
  GroupItem,
  StyledGroupImage
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
                  onClick={() => console.log(group)}
                >
                  {/* <Tooltip title="Clique para ir ao grupo">
                    <StyledGroupImage>
                      <img
                        src={`http://localhost:3333/static/group/${group.group_image}`}
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
              onClick={() => console.log(group)}
            >
              <span key> {group.Group.group_name} </span>
            </GroupItem>
          ))}
      </FollowedGroupsContainer>
      <Modal visible={visible} setVisible={setVisible} title="Novo grupo" />
    </Container>
  );
}

export default Groups;
