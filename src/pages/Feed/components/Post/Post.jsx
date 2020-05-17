import React from 'react';

// Components
import { Container, PostHeader, PostBody, PostFooter } from './PostStyles';

function Post({ id, str_post, url_image, url_video, createdAt, User }) {
  const { id: userId, name: userName } = User;

  const BodyContent = ({ url_video, url_image }) => {
    if (url_image.length) {
      return <img src={url_image} />;
    } else if (url_video) {
      return (
        <video width="500" height="200" controls>
          <source src={url_video} type="video/mp4" />
        </video>
      );
    }
  };

  return (
    <Container key={id}>
      <PostHeader>
        <span>{userId}</span>
        <span>{userName}</span>
      </PostHeader>
      <PostBody>
        <span>{str_post}</span>
        <BodyContent url_image={url_image} url_video={url_video} />
      </PostBody>
      <PostFooter>
        <span>{createdAt}</span>
      </PostFooter>
    </Container>
  );
}

export default Post;
