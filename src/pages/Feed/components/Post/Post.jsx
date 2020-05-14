import React from 'react';

// Components
import { Container, PostHeader, PostBody, PostFooter } from './PostStyles';

function Post({ id, str_post, url_image, url_video, createdAt, User }) {
  const { id: userId, name: userName } = User;
  return (
    <Container key={id}>
      <PostHeader>
        <span>{userId}</span>
        <span>{userName}</span>
      </PostHeader>
      <PostBody>
        <span>{str_post}</span>
      </PostBody>
      <PostFooter>
        <span>{createdAt}</span>
      </PostFooter>
    </Container>
  );
}

export default Post;
