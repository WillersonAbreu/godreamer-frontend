// React import
import React, { useEffect, useState } from 'react';

// React router dom imports
import { useParams } from 'react-router-dom';

import GroupForm from './components/GroupForm/GroupForm';
import GroupPost from './components/GroupPost/GroupPost';

import DonationModal from './components/GroupDonationModal/DonationModal';

import {
  UserOutlined,
  PayCircleOutlined
} from '@ant-design/icons';

// Service import
import GroupService from '~/services/api/Group';
import GroupPostService from '~/services/api/GroupPost';

// Styles imports
import {
  Container,
  InfoContainer,
  FeedSection,
  FeedContainer,
  ColumnGroup,
  GroupAvatar,
  ProfileAvatar,
  InfoAnswers,
  StyledButton,
} from './GroupFeedStyles';

export default function GroupFeed() {
  const [groupData, setGroupData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [postsList, setPostslist] = useState(null);
  const { groupId } = useParams();

  useEffect(() => {
    fetchGroupData();
    fetchGroupPosts();
  }, [groupId]);

  async function fetchGroupPosts() {
    try {
      const { posts } = await GroupPostService.index(groupId);
      setPostslist(posts);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchGroupData() {
    try {
      const response = await GroupService.getGroupById(groupId);
      // console.log(response[0]);
      setGroupData(response[0]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <InfoContainer>
        <ColumnGroup>
          <GroupAvatar
            src={
              groupData.group_image
                ? `http://localhost:3333/static/group/${groupData.group_image}`
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
          <ProfileAvatar size={90} icon={<UserOutlined />} />
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
          <GroupForm getPosts={fetchGroupPosts} groupId={groupId} />
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
      {/* 
      <StyledRow>
        <ColumnInfo span={5}>
          <InfoTitle>Informações</InfoTitle>
          <InfoParagraph>{groupData && groupData.group_desc}</InfoParagraph>
        </ColumnInfo>
      </StyledRow> */}

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
