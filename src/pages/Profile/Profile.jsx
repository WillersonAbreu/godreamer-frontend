// React import
import React, { useEffect, useState } from 'react';

import {
  TeamOutlined,
  HighlightFilled,
  UserAddOutlined,
  ArrowLeftOutlined,
  EditOutlined
} from '@ant-design/icons';
import { FaMoneyCheck } from 'react-icons/fa';
import { RiUserUnfollowLine } from 'react-icons/ri';

import { useParams, useHistory } from 'react-router-dom';

// Styles imports
import {
  Container,
  LeftContainer,
  Content,
  MoreInfo,
  ColumnProfile,
  RightContainer,
  ColumnOutros,
  StyledAvatar,
  InfoFontAlter,
  StyledButton
} from './ProfileStyles';

// Components
import About from './components/About/About';
import PostList from './components/PostList/PostList';
import DonationModal from './components/DonationModal/DonationModal';

// Url import
import { GLOBAL_URL } from '~/global/shared/config';

// Services
import FeedService from '~/services/api/Feed';
import UserService from '~/services/api/User';

// Redux
import { useSelector } from 'react-redux';

// Date FNS
import { format, parseISO } from 'date-fns';
import { Tooltip, message } from 'antd';

// Components
import Groups from './components/Groups/Groups';
import UpdateUserModal from './components/UpdateUserModal/UpdateUserModal';
import UpdateProfileImageModal from './components/UpdateProfileImageModal/UpdateProfileImageModal';

// Services
import FriendshipService from '~/services/api/Friends';
import UserInfoDonationModal from './components/UserInfoDonationModal/UserInfoDonationModal';

// Socket IO
import io from 'socket.io-client';

export default function Profile() {
  const socket = io(GLOBAL_URL);
  const loggedUserId = useSelector(state => state.user.id);
  const [postList, setPostList] = useState([]);
  const [userData, setUserData] = useState(null);
  const [isPost, setIsPost] = useState(false);
  const [isAbout, setIsAbout] = useState(true);
  const [isGroups, setIsGroups] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [isFriendDonationModalOpen, setIsFriendDonationModalOpen] = useState(
    false
  );
  const [isFriend, setIsFriend] = useState(false);
  const [changeProfileImage, setChangeProfileImage] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const params = useParams();
  const history = useHistory();

  var userType = [];
  userType['1'] = 'Sonhador';
  userType['2'] = 'Mentor';

  useEffect(() => {
    fetchUserProfile();
  }, [refresh]);

  socket.on('receivedNewPost', bool => {
    if (bool) {
      setRefresh(!refresh);
    }
  });

  async function fetchUserProfile() {
    try {
      const { userName } = params;
      const response = await UserService.byEmailOrName(userName);

      if (!response.length) {
        history.push('/');
      } else {
        setUserData(response[0]);
        fetchPosts(response[0].id);
        fetchFriends(response[0].id);
      }
    } catch (error) {
      history.push('/');
    }
  }

  async function fetchPosts(userId) {
    try {
      const { posts } = await FeedService.specificUserIndex(userId);

      if (posts.length > 0) {
        const transformedPostList = [];

        // Modifying the image url and video url
        posts.map(post => {
          transformedPostList.push({
            User: {
              ...post.User,
              ProfileImage:
                post.User.ProfileImage === null
                  ? null
                  : `${GLOBAL_URL}static/profile/${userData &&
                      userData.ProfileImage.image_source}`
            },
            createdAt: post.createdAt,
            id: post.id,
            str_post: post.str_post,
            url_image:
              post.url_image === null
                ? null
                : `${GLOBAL_URL}static/post/${post.url_image}`,

            url_video:
              post.url_video === null
                ? null
                : `${GLOBAL_URL}static/post/${post.url_video}`,
            user_id: post.user_id
          });
          return null;
        });
        setPostList(transformedPostList);
      }
    } catch (error) {
      return;
    }
  }

  async function fetchFriends(userId) {
    try {
      const { friends } = await FeedService.getFriends();

      if (friends) {
        friends.map(friend => {
          if (friend.id === userId) {
            setIsFriend(friend.id === userId);
          }
        });
      }
    } catch (error) {
      return;
    }
  }

  function handleContent(type) {
    if (type === 'groups') {
      setIsPost(false);
      setIsGroups(true);
      setIsAbout(false);
    } else if (type === 'posts') {
      setIsPost(true);
      setIsGroups(false);
      setIsAbout(false);
    } else if (type === 'about') {
      setIsPost(false);
      setIsGroups(false);
      setIsAbout(true);
    }
  }

  async function handleFriendship(userId) {
    try {
      const response = await FriendshipService.create({ id_user: userId });

      if (response.response) {
        return message.error(response.response.data.error);
      }
      fetchFriends(userId);
      return message.success(response.message);
    } catch (error) {
      message.error(error.message);
    }
  }

  async function handleRemoveFriendship(userId) {
    try {
      const response = await FriendshipService.delete(userId);
      if (response.response) {
        return message.error(response.response.data.error);
      }
      setIsFriend(false);
      return message.success(response.message);
    } catch (error) {
      message.error(error.message);
    }
  }

  return (
    <Container>
      <LeftContainer>
        <StyledButton
          type="primary"
          shape="round"
          size="large"
          icon={<ArrowLeftOutlined />}
          onClick={() => history.goBack()}
        ></StyledButton>

        <ColumnProfile>
          <h1>Perfil</h1>
          {userData &&
            (userData.id === loggedUserId ? (
              <Tooltip title="Alterar foto de perfil">
                <StyledAvatar
                  src={`${GLOBAL_URL}static/profile/${userData.ProfileImage !==
                    null && userData.ProfileImage.image_source}`}
                  size={100}
                  onClick={() => setChangeProfileImage(true)}
                >
                  {userData && !userData.ProfileImage && (
                    <span style={{ fontSize: '5vw' }}>
                      {userData.name[0].toUpperCase()}
                    </span>
                  )}
                </StyledAvatar>

                <UpdateProfileImageModal
                  visible={changeProfileImage}
                  setVisible={setChangeProfileImage}
                  currentImage={
                    userData &&
                    userData.ProfileImage &&
                    userData.ProfileImage.image_source
                  }
                  userId={userData && userData.id}
                  refresh={fetchUserProfile}
                />
              </Tooltip>
            ) : (
              <StyledAvatar
                src={`${GLOBAL_URL}static/profile/${userData.ProfileImage !==
                  null && userData.ProfileImage.image_source}`}
                size={100}
              >
                {userData && !userData.ProfileImage && (
                  <span style={{ fontSize: '5vw' }}>
                    {userData.name[0].toUpperCase()}
                  </span>
                )}
              </StyledAvatar>
            ))}
          <h3>{userData && userData.name}</h3>
        </ColumnProfile>
        <MoreInfo>
          <h3>Informações adicionais</h3>
          <hr style={{ display: 'flex', width: '100%' }} />
          <h3>Data de nascimento:</h3>
          <span>
            {userData && format(parseISO(userData.birthdate), 'dd/MM/yyyy')}
          </span>
          <hr style={{ display: 'flex', width: '100%' }} />
          <h3>Tipo de usuário:</h3>
          <span>
            {userData &&
              userType[userData.user_type === true ? '1' : userData.user_type]}
          </span>
        </MoreInfo>
      </LeftContainer>
      <Content>
        {isAbout && <About aboutUser={userData && userData.about_user} />}
        {isPost &&
          postList &&
          postList.map(post => {
            post.User.ProfileImage = null;
            post.User.ProfileImage = {
              image_source:
                userData && userData.ProfileImage
                  ? userData.ProfileImage.image_source
                  : null
            };

            return (
              <PostList
                key={post.id}
                id={post.id}
                str_post={post.str_post}
                url_image={post.url_image}
                url_video={post.url_video}
                createdAt={post.createdAt}
                User={post.User}
                getPosts={fetchPosts}
                refresh={setRefresh}
              />
            );
          })}
        {isPost && !postList && <h2>O usuário não tem nenhum post ainda</h2>}
        {isGroups && (
          <Groups userId={userData.id} userType={userData.user_type} />
        )}
      </Content>
      <RightContainer>
        <ColumnOutros>
          <InfoFontAlter>Outros</InfoFontAlter>
          <Tooltip title="Sobre o usuário">
            <StyledButton
              type="primary"
              shape="round"
              size="large"
              onClick={() => handleContent('about')}
            >
              <span>Sobre</span>
            </StyledButton>
          </Tooltip>

          <Tooltip title="Grupos que o usuário segue">
            <StyledButton
              type="primary"
              shape="round"
              size="large"
              icon={<TeamOutlined />}
              onClick={() => handleContent('groups')}
            ></StyledButton>
          </Tooltip>
          <Tooltip title="Posts do usuário">
            <StyledButton
              type="primary"
              shape="round"
              size="large"
              icon={<HighlightFilled />}
              onClick={() => handleContent('posts')}
            />
          </Tooltip>
          {userData && loggedUserId === userData.id && (
            <Tooltip title="Alterar dados do perfil">
              <StyledButton
                type="primary"
                shape="round"
                size="large"
                icon={<EditOutlined />}
                onClick={() => setIsOpen(true)}
              />
            </Tooltip>
          )}
          {userData && loggedUserId !== userData.id && !isFriend && (
            <Tooltip title={'Criar amizade'}>
              <StyledButton
                type="primary"
                shape="round"
                size="large"
                icon={<UserAddOutlined />}
                onClick={() => handleFriendship(userData.id)}
              />
            </Tooltip>
          )}
          {userData && loggedUserId !== userData.id && isFriend && (
            <Tooltip title="Desfazer amizade">
              <StyledButton
                type="primary"
                shape="round"
                size="large"
                onClick={() => handleRemoveFriendship(userData.id)}
                icon={<RiUserUnfollowLine />}
              />
            </Tooltip>
          )}
        </ColumnOutros>
        {userData && userData.user_type === 2
          ? loggedUserId === userData.id && (
              <ColumnOutros style={{ textAlign: 'center' }}>
                <h4>Alterar dados de doação</h4>
                <Tooltip title="Alterar dados de doação">
                  <StyledButton
                    type="primary"
                    shape="round"
                    size="large"
                    icon={<FaMoneyCheck />}
                    onClick={() => setIsDonationModalOpen(true)}
                  />
                </Tooltip>
              </ColumnOutros>
            )
          : null}
        {userData && loggedUserId !== userData.id && (
          <ColumnOutros style={{ textAlign: 'center' }}>
            <h4>Dados para doação deste usuário</h4>
            <Tooltip title="Ver dados de doação">
              <StyledButton
                type="primary"
                shape="round"
                size="large"
                icon={<FaMoneyCheck />}
                onClick={() => setIsDonationModalOpen(true)}
              />
            </Tooltip>
          </ColumnOutros>
        )}
        <DonationModal
          visible={isFriendDonationModalOpen}
          setVisible={setIsFriendDonationModalOpen}
          donationInfo={userData && userData}
        />
      </RightContainer>

      <UserInfoDonationModal
        title="Alterar meus dados"
        visible={isDonationModalOpen}
        setVisible={setIsDonationModalOpen}
        userInfoDonation={
          userData &&
          userData.UserInfoDonation !== null &&
          userData.UserInfoDonation
        }
        refresh={setRefresh}
      />

      <UpdateUserModal
        title="Alterar meus dados"
        visible={isOpen}
        setVisible={setIsOpen}
        userId={loggedUserId}
        name={userData && userData.name}
        email={userData && userData.email}
        birthdate={userData && userData.birthdate}
        userType={userData && userData.user_type}
        aboutUser={userData && userData.about_user}
        getUserData={fetchUserProfile}
      />
    </Container>
  );
}
