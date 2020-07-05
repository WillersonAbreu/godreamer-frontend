import React from 'react';

// Ant design imports
import { Modal, message } from 'antd';

// Unform imports
import { Form } from '@unform/web';

// Styled components imports
import {
  StyledFileUploader,
  StyledUpdateButton
} from './UpdateProfileImageModalStyles';

// Icons imports
import { PictureOutlined, DeliveredProcedureOutlined } from '@ant-design/icons';

// Service import
import ProfileImageService from '~/services/api/ProfileImage'; //'~/services/api/Post';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { Creators as GlobalActions } from '~/store/ducks/Global';

function UpdatePostModal({
  title,
  visible,
  setVisible,
  userId,
  currentImage,
  refresh
}) {
  const dispatch = useDispatch();
  const globalRefresh = useSelector(state => state.global.refresh);
  async function handleSubmit(data) {
    const imageTypes = [];
    imageTypes['image/png'] = true;
    imageTypes['image/jpeg'] = true;
    imageTypes['image/jpg'] = true;
    imageTypes['image/gif'] = true;

    try {
      let formData = new FormData();

      if (data.profile_image !== undefined) {
        if (!imageTypes[data.profile_image.type]) {
          message.error(
            'Arquivo de imagem deve ser dos tipos png, jpeg, jpg ou gif'
          );
          return null;
        }

        formData.append('profile_image', data.profile_image);
      }

      // Making http request to the backend
      await ProfileImageService.create(formData, userId);
      dispatch(GlobalActions.changeRefresh(!globalRefresh));
      await refresh();
      setVisible(false);
      message.success('Imagem atualizada com sucesso!');
    } catch (error) {
      message.error('Erro ao atualizar a imagem!');
      setVisible(false);
    }
  }

  function handleClose() {
    setVisible(false);
  }

  return (
    <>
      <Modal
        visible={visible}
        title={title}
        footer={null}
        onCancel={handleClose}
        destroyOnClose={true}
      >
        <Form name="updatePost" onSubmit={handleSubmit}>
          <StyledFileUploader
            icon={<PictureOutlined style={{ paddingTop: '0.7vh' }} />}
            labelText="Escolha uma imagem"
            name="profile_image"
            currentPreview={currentImage}
          />

          <StyledUpdateButton
            style={{ display: 'flex', margin: '0 auto' }}
            type="submit"
          >
            <DeliveredProcedureOutlined style={{ paddingTop: '0.7vh' }} />
            Salvar
          </StyledUpdateButton>
        </Form>
      </Modal>
    </>
  );
}

export default UpdatePostModal;
