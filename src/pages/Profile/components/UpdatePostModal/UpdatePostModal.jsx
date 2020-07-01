import React from 'react';

// Ant design imports
import { Modal, message } from 'antd';

// Unform imports
import { Form } from '@unform/web';

// Components imports
import TextArea from '~/components/Unform/TextArea/TextArea';

// Styled components imports
import {
  StyledFileUploader,
  StyledUpdateButton,
  StyledDeleteButton
} from './UpdatePostModalStyles';

// Icons imports
import {
  PictureOutlined,
  PlaySquareOutlined,
  DeliveredProcedureOutlined,
  DeleteOutlined
} from '@ant-design/icons';

// Service import
import PostService from '~/services/api/Post'; //'~/services/api/Post';

function UpdatePostModal({
  title,
  visible,
  setVisible,
  str_post,
  post_id,
  getPosts,
  userId
}) {
  async function handleSubmit(data) {
    const imageTypes = [];
    imageTypes['image/png'] = true;
    imageTypes['image/jpeg'] = true;
    imageTypes['image/jpg'] = true;
    imageTypes['image/gif'] = true;

    const videoTypes = [];
    videoTypes['video/mp4'] = true;

    try {
      let formData = new FormData();

      formData.append('str_post', data.str_post);

      if (data.url_image !== undefined) {
        if (!imageTypes[data.url_image.type]) {
          message.error(
            'Arquivo de imagem deve ser dos tipos png, jpeg, jpg ou gif'
          );
          return null;
        }

        formData.append('url_image', data.url_image);
      }

      if (data.url_video !== undefined) {
        if (!videoTypes[data.url_video.type]) {
          message.error('Arquivo de vídeo deve ser do tipo mp4');
          return null;
        } else {
          formData.append('url_video', data.url_video);
        }
      }

      // Making http request to the backend
      await PostService.update(formData, post_id);
      await getPosts(userId);
      message.success('Post atualizado com sucesso!');
    } catch (error) {
      message.error('Erro ao atualizar o post!');
      setVisible(false);
    }
  }

  async function handleDelete() {
    try {
      await PostService.delete(post_id);
      await getPosts(userId);
      message.success('Post deletado com sucesso!');
      setVisible(false);
    } catch (error) {
      console.log(error);
      message.error('Erro ao deletar o post!');
      setVisible(false);
    }
  }

  function handleClose() {
    setVisible(false);
  }

  const initialData = {
    str_post: str_post ? str_post : ''
  };

  return (
    <>
      <Modal
        visible={visible}
        title={title}
        footer={null}
        onCancel={handleClose}
      >
        <Form
          name="updatePost"
          onSubmit={handleSubmit}
          initialData={initialData}
        >
          <TextArea name="str_post" />
          <StyledFileUploader
            icon={<PictureOutlined style={{ paddingTop: '0.7vh' }} />}
            labelText="Escolha uma imagem"
            name="url_image"
          />
          <StyledFileUploader
            icon={<PlaySquareOutlined style={{ paddingTop: '0.7vh' }} />}
            labelText="Escolha um video"
            name="url_video"
          />

          <StyledUpdateButton
            style={{ display: 'flex', margin: '0 auto' }}
            type="submit"
          >
            <DeliveredProcedureOutlined style={{ paddingTop: '0.7vh' }} />
            Atualizar
          </StyledUpdateButton>
        </Form>

        <StyledDeleteButton onClick={handleDelete}>
          <DeleteOutlined style={{ paddingTop: '0.7vh' }} />
          Deletar
        </StyledDeleteButton>
      </Modal>
    </>
  );
}

export default UpdatePostModal;
