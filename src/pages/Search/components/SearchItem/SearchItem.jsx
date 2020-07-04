import React, { useEffect } from 'react';

import { Container, ImageWrapper, ContentWrapper } from './SearchItemStyles';

// Url import
import { GLOBAL_URL } from '~/global/shared/config';
import { useHistory, useParams } from 'react-router-dom';

// No image
import noImage from '~/assets/noimage.png';

function SearchItem({ data }) {
  useEffect(() => {}, [data]);

  const history = useHistory();
  const { userNameOrEmail, groupName } = useParams();

  return (
    <Container>
      <ImageWrapper
        onClick={() =>
          history.push(
            userNameOrEmail ? `/profile/${data.name}` : `/group/${data.id}`
          )
        }
      >
        <img
          src={
            userNameOrEmail
              ? data.ProfileImage
                ? `${GLOBAL_URL}static/profile/${data.ProfileImage.image_source}`
                : noImage
              : data.group_image
              ? `${GLOBAL_URL}static/group/${data.group_image}`
              : noImage
          }
        />
      </ImageWrapper>
      <ContentWrapper>
        {userNameOrEmail && (
          <>
            <a onClick={() => history.push(`/profile/${data.name}`)}>
              {data.name}
            </a>
          </>
        )}

        {groupName && (
          <>
            <a onClick={() => history.push(`/group/${data.id}`)}>
              {data.group_name}
            </a>
          </>
        )}

        <h4>
          {userNameOrEmail
            ? data.about_user
              ? data.about_user
              : 'O usuário não colocou nenhuma informação sobre ele'
            : null}

          {groupName
            ? data.group_desc
              ? data.group_desc
              : 'O dono do grupo nenhuma descrição sobre o grupo'
            : null}
        </h4>
      </ContentWrapper>
    </Container>
  );
}

export default SearchItem;
