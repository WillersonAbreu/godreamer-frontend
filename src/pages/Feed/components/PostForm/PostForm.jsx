import React from 'react';

// Ant design import
import { PictureOutlined, PlaySquareOutlined } from '@ant-design/icons';

// Redux imports
import { useSelector } from 'react-redux';

// Components
import {
  Container,
  StyledForm,
  StyledTextArea,
  RightFormContent,
  StyledButton
} from './PostFormStyles';

// Services
import PostService from '~/services/api/Post';

// Socket IO Imports
import io from 'socket.io-client';

// Url import
import { GLOBAL_URL } from '~/global/shared/config';

// Imports
import { newPost } from '~/services/socket/Post';

function PostForm() {
  const socket = io(GLOBAL_URL);

  const userId = useSelector(state => state.user.id);

  async function handleSubmit(data) {
    try {
      data.user_id = userId;
      data.url_image = null;
      data.url_video = null;

      // Making http request to the backend
      const response = await PostService.create(data);

      // Emit websocket message
      newPost(data, socket);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextArea
          placeholder="Digite aqui as suas melhores idéias hoje"
          name="str_post"
        />
        <RightFormContent>
          <StyledButton>
            <PictureOutlined style={{ paddingTop: '0.7vh' }} />
            Adicionar Foto
          </StyledButton>
          <StyledButton>
            <PlaySquareOutlined style={{ paddingTop: '0.7vh' }} />
            Adicionar Vídeo
          </StyledButton>
          <StyledButton>Postar</StyledButton>
        </RightFormContent>
      </StyledForm>
    </Container>
  );
}

export default PostForm;
