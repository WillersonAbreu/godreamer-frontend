import React, { useRef, useState } from 'react';

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

// Ant design imports
import { message } from 'antd';

import { GLOBAL_URL } from '~/global/shared/config';

import io from 'socket.io-client';

function PostForm({ getPosts }) {
  const formRef = useRef(null);
  const [refresh, setRefresh] = useState(false);
  const socket = io(GLOBAL_URL);

  socket.on('receivedNewPost', bool => {
    if (bool) {
      setRefresh(!refresh);
    }
  });

  const userId = useSelector(state => state.user.id);

  async function handleSubmit(data, { reset }) {
    const strPostSchema = Yup.object().shape({
      error: Yup.string().required(
        'É necessário inserir um texto ou uma imagem ou um vídeo ao menos'
      )
    });

    const imageTypes = [];
    imageTypes['image/png'] = true;
    imageTypes['image/jpeg'] = true;
    imageTypes['image/jpg'] = true;
    imageTypes['image/gif'] = true;

    const videoTypes = [];
    videoTypes['video/mp4'] = true;

    try {
      if (!data.url_image && !data.url_video && !data.str_post) {
        await strPostSchema.validate(data, {
          abortEarly: false
        });
      } else if (!data.str_post && data.url_image && !data.url_video) {
        if (!imageTypes[data.url_image.type]) {
          message.error(
            'Arquivo de imagem deve ser dos tipos png, jpeg, jpg ou gif'
          );
          return null;
        }
      } else if (!data.str_post && !data.url_image && data.url_video) {
        if (!videoTypes[data.url_video.type]) {
          message.error('Arquivo de vídeo deve ser do tipo mp4');
          return null;
        }
      }

      let formData = new FormData();
      formData.append('user_id', userId);
      formData.append('str_post', data.str_post);
      formData.append('url_image', data.url_image);
      formData.append('url_video', data.url_video);

      // Making http request to the backend
      await PostService.create(formData);
      reset();
      message.success('Você registrou um novo post!');
      await getPosts();
    } catch (error) {
      // Showing validation errors on
      reset();
      const validationErrors = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;

          message.error(error.message);
        });
      }
    }
  }

  return (
    <Container>
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <StyledTextArea
          placeholder="Compartilhe aqui as suas melhores idéias hoje"
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
          <StyledButton>Postar</StyledButton>
        </RightFormContent>
      </StyledForm>
    </Container>
  );
}

export default PostForm;
