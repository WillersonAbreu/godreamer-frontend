// React import
import React, { useEffect, useState } from 'react';

// React router dom imports
import { useParams, useHistory } from 'react-router-dom';

import GroupForm from './components/GroupForm/GroupForm';
import GroupPost from './components/GroupPost/GroupPost';

import DonationModal from './components/GroupDonationModal/DonationModal';

import {
  UserOutlined,
  ArrowLeftOutlined,
  TeamOutlined,
  PayCircleOutlined
} from '@ant-design/icons';

import { useSelector } from 'react-redux';

// Service import
import GroupService from '~/services/api/Group';
import GroupPostService from '~/services/api/GroupPost';
import FollowGroupService from '~/services/api/FollowGroup';

// Styles imports
import {
  Container,
  InfoContainer,
  RightInforContainer,
  FeedSection,
  FeedContainer,
  PostListContainer,
  ReturnButton,
  StyledRow,
  ColumnGroup,
  GroupAvatar,
  ProfileAvatar,
  InfoAnswers,
  StyledButton,
  ColumnInfo,
  InfoParagraph,
  InfoTitle
} from './GroupFeedStyles';

import UserService from '~/services/api/User';
import DonationService from '~/services/api/InfoDonation';
import { message } from 'antd';
import { GLOBAL_URL } from '~/global/shared/config';

export default function GroupFeed() {
  const [groupData, setGroupData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);
  const [postsList, setPostslist] = useState(null);
  const [groupOwnerImage, setGroupOwnerImage] = useState(null);
  const { groupId } = useParams();
  const loggedUserId = useSelector(state => state.user.id);
  const [isOwner, setIsOwner] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetchGroupData();
    fetchGroupPosts();
    fetchFollowedGroups();
  }, [groupId]);

  async function fetchGroupPosts() {
    try {
      if (groupId !== 0 || groupId !== null || groupId !== undefined) {
        const { posts } = await GroupPostService.index(groupId);
        setPostslist(posts);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchGroupData() {
    try {
      const response = await GroupService.getGroupById(groupId);
      setGroupData(response[0]);
      setIsOwner(response[0].user_id === loggedUserId);
      fetchOwnerData(response[0].user_id);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchOwnerData(userId) {
    try {
      const image = await UserService.getProfileImage(userId);
      if (image) {
        if (image.image_source) {
          setGroupOwnerImage(image.image_source);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchFollowedGroups() {
    try {
      const { followedGroups } = await FollowGroupService.followedGroups();

      followedGroups.map(group => {
        if (group.group_id == groupId) {
          setIsFollowed(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function followGroup(groupId) {
    try {
      await FollowGroupService.create({ group_id: groupId });
      await fetchFollowedGroups();
      message.success('Você está seguindo o grupo agora');
    } catch (error) {
      console.log(error);
    }
  }

  async function unfollowGroup(groupId) {
    try {
      const response = await FollowGroupService.delete(groupId);
      setIsFollowed(false);
      await fetchFollowedGroups();
      message.success('Você deixou de seguir o grupo');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <InfoContainer>
        <StyledButton
          type="primary"
          shape="round"
          size="large"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.goBack()}
        >
          Voltar
        </StyledButton>
        <ColumnGroup style={{ width: '80%' }}>
          <GroupAvatar
            src={
              groupData.group_image
                ? `${GLOBAL_URL}static/group/${groupData.group_image}`
                : groupData.group_name
                ? groupData.group_name[0]
                : ''
            }
            size={120}
          />
          <h3>{groupData && groupData.group_name}</h3>
        </ColumnGroup>

        <ColumnGroup style={{ width: '80%' }}>
          <InfoAnswers>Criador</InfoAnswers>
          <ProfileAvatar
            size={90}
            src={`${GLOBAL_URL}static/profile/${groupOwnerImage &&
              groupOwnerImage}`}
          />
          <h3>{groupData.User && groupData.User.name}</h3>

          <StyledButton
            type="primary"
            shape="round"
            size="large"
            icon={<PayCircleOutlined />}
            onClick={() => setIsOpen(true)}
          >
            Doar
          </StyledButton>
        </ColumnGroup>
      </InfoContainer>

      <FeedSection>
        <FeedContainer>
          {isOwner && (
            <GroupForm getPosts={fetchGroupPosts} groupId={groupId} />
          )}

          {postsList &&
            postsList.map(post => (
              <GroupPost
                key={post.id}
                id={post.id}
                str_post={post.str_post}
                url_image={post.url_image}
                url_video={post.url_video}
                createdAt={post.createdAt}
                User={post.User}
                getPosts={fetchGroupPosts}
                groupId={groupId}
              />
            ))}
        </FeedContainer>
      </FeedSection>

      <RightInforContainer>
        {!isOwner && (
          <StyledRow>
            {!isFollowed && (
              <StyledButton
                type="primary"
                shape="round"
                size="large"
                // icon={<PayCircleOutlined />}
                onClick={async () => await followGroup(groupId)}
              >
                Participar do grupo
              </StyledButton>
            )}
            {isFollowed && (
              <StyledButton
                type="primary"
                shape="round"
                size="large"
                // icon={<PayCircleOutlined />}
                onClick={async () => await unfollowGroup(groupId)}
              >
                Deixar o grupo
              </StyledButton>
            )}
          </StyledRow>
        )}

        <StyledRow>
          <ColumnInfo span={5}>
            <InfoTitle>Informações</InfoTitle>
            <InfoParagraph>{groupData && groupData.group_desc}</InfoParagraph>
          </ColumnInfo>
        </StyledRow>
      </RightInforContainer>

      {groupData && (
        <DonationModal
          visible={isOpen}
          setVisible={setIsOpen}
          donationInfo={groupData && groupData.User}
        />
      )}
    </Container>
  );
}
