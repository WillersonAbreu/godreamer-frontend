import React, { useState } from 'react';

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
import StyledOpenGraphComponent from '~/components/MetatagsBox/MetatagsBox';

// Helpers import
import { GetPostDay } from '~/helpers/DateFormatterHelper';
import { UrlFinder } from '~/helpers/FeedHelper';

function Post({ id, str_post, url_image, url_video, createdAt, User }) {
  const { id: userId, name: userName, ProfileImage } = User;
  let bodyUrl;

  if (str_post) {
    var regexResponse = UrlFinder(str_post);

    if (regexResponse) {
      str_post = regexResponse[0];
      bodyUrl = regexResponse[1];
    }
  }

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
        {str_post && <PostText>{str_post}</PostText>}
        {bodyUrl && <StyledOpenGraphComponent url={bodyUrl} />}
        <BodyContent url_image={url_image} url_video={url_video} />
      </PostBody>
      <PostFooter>
        <StyledDateContainer>{GetPostDay(createdAt)}</StyledDateContainer>
      </PostFooter>
    </Container>
  );
}

export default Post;
