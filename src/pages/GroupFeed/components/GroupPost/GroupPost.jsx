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
  StyledDateContainer,
  PostOptionsIconContainer,
  PostOptionsIcon
} from './GroupPostStyles';
import StyledOpenGraphComponent from '~/components/MetatagsBox/MetatagsBox';
import Modal from '../UpdatePostModal/UpdatePostModal';

// Helpers import
import { GetPostDay } from '~/helpers/DateFormatterHelper';
import { UrlFinder } from '~/helpers/FeedHelper';

// Redux imports
import { useSelector } from 'react-redux';
import { GLOBAL_URL } from '~/global/shared/config';
import { useHistory } from 'react-router-dom';

function GroupPost({
  id,
  str_post,
  url_image,
  url_video,
  createdAt,
  User,
  getPosts,
  groupId
}) {
  const loggedUserId = useSelector(state => state.user.id);
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const { id: userId, name: userName, ProfileImage: profileImage } = User;
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
      return <ImageContainer src={`${GLOBAL_URL}static/post/${url_image}`} />;
    } else if (url_video !== null) {
      return (
        <VideoContainer controls>
          <source
            src={`${GLOBAL_URL}static/post/${url_video}`}
            type="video/mp4"
          />
        </VideoContainer>
      );
    } else {
      return null;
    }
  };

  function showModal() {
    setVisible(true);
  }

  return (
    <Container key={id}>
      <PostHeader>
        {/**
         * Show profile image if it exists
         */}
        {profileImage !== null && profileImage.image_source && (
          <div style={{ marginLeft: '1vw' }}>
            <StyledTooltip
              placement="right"
              title={`Clique para ver o perfil de
             ${userName}`}
              onClick={() => history.push(`/profile/${userName}`)}
            >
              <StyledProfile
                size="large"
                src={`${GLOBAL_URL}static/profile/${profileImage.image_source}`}
              />
            </StyledTooltip>
            <span>{userName}</span>
          </div>
        )}

        {/**
         * Show first letter of user name if profile image does not exists
         */}
        {!profileImage && (
          <div style={{ marginLeft: '1vw' }}>
            <StyledTooltip
              placement="right"
              title={`Clique para ver o perfil de ${userName}`}
              onClick={() => history.push(`/profile/${userName}`)}
            >
              <StyledProfile size="large">{userName[0]}</StyledProfile>
            </StyledTooltip>
            <span>{userName}</span>
          </div>
        )}
        {/**
         * Show delete delete and update options if the post is from logged user
         */}
        {loggedUserId === userId && (
          <PostOptionsIconContainer onClick={() => showModal()}>
            <StyledTooltip placement="top" title="Gerenciar este post">
              <PostOptionsIcon />
            </StyledTooltip>
          </PostOptionsIconContainer>
        )}
      </PostHeader>
      <PostBody>
        {str_post && <PostText>{str_post}</PostText>}
        {bodyUrl && <StyledOpenGraphComponent url={bodyUrl} />}
        <BodyContent url_image={url_image} url_video={url_video} />
      </PostBody>
      <PostFooter>
        <StyledDateContainer>
          {createdAt && GetPostDay(createdAt)}
        </StyledDateContainer>
      </PostFooter>

      <Modal
        title="Gerenciar Post"
        loading={loading}
        visible={visible}
        setLoading={setLoading}
        setVisible={setVisible}
        str_post={str_post}
        url_image={url_image}
        url_video={url_video}
        post_id={id}
        getPosts={getPosts}
        groupId={groupId}
      />
    </Container>
  );
}

export default GroupPost;
