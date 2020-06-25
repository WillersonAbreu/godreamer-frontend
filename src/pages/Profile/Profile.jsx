// React import
import React, { useState, useEffect, useRef } from 'react';

import {
  TeamOutlined,
  HighlightFilled,
  UserAddOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

import { useParams, Redirect, useHistory } from 'react-router-dom';

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
  InfoSideAlter,
  Buttonn
} from './ProfileStyles';

// Components
import About from './components/About/About';
import PostList from './components/PostList/PostList';

// Url import
import { GLOBAL_URL } from '~/global/shared/config';

// Services
import FeedService from '~/services/api/Feed';
import UserService from '~/services/api/User';

// Redux
import { useSelector } from 'react-redux';

export default function Profile() {
  const userId = useState(0);
  const [postList, setPostList] = useState([]);
  const [refresh] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    fetchUserProfile();
    // fetchPosts();
  }, [refresh]);

  async function fetchUserProfile() {
    try {
      const { userName } = params;
      const response = await UserService.byEmailOrName(userName);
      // console.log(response[0]);
      if (!response.length) {
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPosts() {
    try {
      const response = await FeedService.index(userId);
      if (response.posts.length > 0) {
        const transformedPostList = [];

        // Modifying the image url and video url
        response.posts.map(post => {
          transformedPostList.push({
            User: {
              ...post.User,
              ProfileImage:
                post.User.ProfileImage === null
                  ? null
                  : `${GLOBAL_URL}static/profile/${post.User.ProfileImage.image_source}`
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
      console.log(error);
    }
  }

  return (
    <Container>
      <LeftContainer>
        <Buttonn
          type="primary"
          shape="round"
          size="large"
          icon={<ArrowLeftOutlined />}
        >
          Voltar
        </Buttonn>
        <ColumnProfile>
          <h1>Perfil</h1>
          <StyledAvatar size={100} />
          <h1>Nome Sobre</h1>
        </ColumnProfile>
        <MoreInfo>
          <h2>Informações adicionais:</h2>
          <hr style={{ display: 'flex', width: '100%' }} />
          <h3>Data de nascimento:</h3>
          <span>29/07/1992</span>
          <hr style={{ display: 'flex', width: '100%' }} />
          <h3>Tipo de usuário:</h3>
          <span>Sonhador</span>
        </MoreInfo>
      </LeftContainer>
      <Content>
        {/* <About /> */}
        {postList &&
          postList.map(post => (
            <PostList
              key={post.id}
              id={post.id}
              str_post={post.str_post}
              url_image={post.url_image}
              url_video={post.url_video}
              createdAt={post.createdAt}
              User={post.User}
              getPosts={fetchPosts}
            />
          ))}
      </Content>
      <RightContainer>
        <ColumnOutros>
          <InfoFontAlter>Outros</InfoFontAlter>
          <InfoSideAlter>Grupos</InfoSideAlter>
          <Buttonn
            type="primary"
            shape="round"
            size="large"
            icon={<TeamOutlined />}
          ></Buttonn>
          <InfoSideAlter>Posts</InfoSideAlter>
          <Buttonn
            type="primary"
            shape="round"
            size="large"
            icon={<HighlightFilled />}
          ></Buttonn>
          <InfoSideAlter>Adicionar</InfoSideAlter>
          <Buttonn
            type="primary"
            shape="round"
            size="large"
            icon={<UserAddOutlined />}
          ></Buttonn>
        </ColumnOutros>
      </RightContainer>
    </Container>
  );
}
