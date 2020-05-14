import React from 'react';

// Redux imports
import { useSelector } from 'react-redux';

// Components
import {
  Container,
  StyledForm,
  StyledTextArea,
  RightFormContent
} from './PostFormStyles';

// Services
import PostService from '~/services/api/Post';

function PostForm() {
  const userId = useSelector(state => state.user.id);

  async function handleSubmit(data) {
    try {
      data.user_id = userId;
      data.url_image = null;
      data.url_video = null;

      const response = await PostService.create(data);
      console.log(response);
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
          <button>Postar</button>
        </RightFormContent>
      </StyledForm>
    </Container>
  );
}

export default PostForm;
