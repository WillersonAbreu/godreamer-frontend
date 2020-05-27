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

// Unform imports
import FileUpload from '~/components/Unform/FileInput/FileInput';

// Yup imports
import * as Yup from 'yup';

// Socket IO Imports
import io from 'socket.io-client';

// Url import
import { GLOBAL_URL } from '~/global/shared/config';

// Imports
import { newPost } from '~/services/socket/Post';

function PostForm() {
  const socket = io(GLOBAL_URL);

  const userId = useSelector(state => state.user.id);

  const validation = Yup.object().shape({});

  async function handleSubmit(data) {
    try {
      console.log(data);
      let formData = new FormData();
      formData.append('user_id', userId);
      formData.append('str_post', data.str_post);
      formData.append('url_image', data.url_image);
      formData.append('url_video', data.url_video);

      console.log(formData);

      // Making http request to the backend
      const response = await PostService.create(formData);

      // Emit websocket message
      // newPost(data, socket);
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
          <FileUpload
            icon={<PictureOutlined style={{ paddingTop: '0.7vh' }} />}
            labelText="Selecione uma imagem"
            name="url_image"
          />
          <FileUpload
            icon={<PlaySquareOutlined style={{ paddingTop: '0.7vh' }} />}
            labelText="Selecione um video"
            name="url_video"
          />

          {/* <StyledButton>
            <PictureOutlined style={{ paddingTop: '0.7vh' }} />
            Adicionar Foto
          </StyledButton>
          <StyledButton>
            <PlaySquareOutlined style={{ paddingTop: '0.7vh' }} />
            Adicionar Vídeo
          </StyledButton> */}
          <StyledButton>Postar</StyledButton>
        </RightFormContent>
      </StyledForm>
    </Container>
  );
}

export default PostForm;
