import React from 'react';

// Components
import {
  Container,
  PostHeader,
  PostBody,
  PostFooter,
  VideoContainer,
  ImageContainer,
  PostText,
  StyledProfile,
  StyledTooltip,
  StyledDateContainer
} from './PostStyles';

import { GetPostDay } from '~/helpers/DateFormatterHelper';

function Post({ id, str_post, url_image, url_video, createdAt, User }) {
  const { id: userId, name: userName, ProfileImage } = User;

  const BodyContent = ({ url_video, url_image }) => {
    if (url_image !== null && url_video === null) {
      return <ImageContainer src={url_image} />;
    } else if (url_video !== null) {
      return (
        <VideoContainer controls>
          <source src={url_video} type="video/mp4" />
        </VideoContainer>
      );
    } else {
      return null;
    }
  };

  return (
    <Container key={id}>
      <PostHeader>
        {ProfileImage && (
          <StyledTooltip
            placement="right"
            title={`Clique para ver o perfil de ${userName}`}
          >
            <StyledProfile size="large" src={ProfileImage} />
          </StyledTooltip>
        )}
        {!ProfileImage && (
          <StyledTooltip
            placement="right"
            title={`Clique para ver o perfil de ${userName}`}
          >
            <StyledProfile size="large">{userName[0]}</StyledProfile>
          </StyledTooltip>
        )}
      </PostHeader>
      <PostBody>
        <PostText>{str_post}</PostText>
        <BodyContent url_image={url_image} url_video={url_video} />
      </PostBody>
      <PostFooter>
        <StyledDateContainer>{GetPostDay(createdAt)}</StyledDateContainer>
      </PostFooter>
    </Container>
  );
}

export default Post;