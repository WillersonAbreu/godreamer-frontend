import React from 'react';

// Ant design imports
import { Modal, Button } from 'antd';

// Unform imports
import { Form } from '@unform/web';

// Components imports
import TextArea from '~/components/Unform/TextArea/TextArea';

// Styled components imports
import { StyledFileUploader } from './UpdatePostModalStyles';

// Icons imports
import { PictureOutlined, PlaySquareOutlined } from '@ant-design/icons';

// Service import
import PostService from '~/services/api/Post';

function UpdatePostModal({
  title,
  loading,
  visible,
  setLoading,
  setVisible,
  str_post,
  post_id
}) {
  async function handleSubmit(data) {
    try {
      let formData = new FormData();

      formData.append('str_post', data.str_post);

      if (data.url_image !== undefined) {
        formData.append('url_image', data.url_image);
      }

      if (data.url_video !== undefined) {
        formData.append('url_video', data.url_video);
      }

      // Making http request to the backend
      const response = await PostService.update(formData, post_id);

      // Emit websocket message
      // newPost(data, socket);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOk() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  }

  function handleCancel() {
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
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Submit
          </Button>
        ]}
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

          <button type="submit">Atualizar</button>
        </Form>
      </Modal>
    </>
  );
}

export default UpdatePostModal;
