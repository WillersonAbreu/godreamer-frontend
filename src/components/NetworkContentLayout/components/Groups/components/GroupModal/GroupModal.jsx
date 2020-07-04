import React from 'react';

// Ant design imports
import { Modal, message } from 'antd';

// Unform imports
import { Form } from '@unform/web';

// Components imports
import Input from '~/components/Unform/Input/Input';
import TextArea from '~/components/Unform/TextArea/TextArea';
import FileUpload from '~/components/Unform/FileInput/FileInput';

// Service import
import GroupService from '~/services/api/Group';

// Styled components imports
import { StyledUpdateButton, InputsContainer } from './GroupModalStyles';

function UpdatePostModal({ visible, title, setVisible, getGroups }) {
  const imageTypes = [];
  imageTypes['image/png'] = true;
  imageTypes['image/jpeg'] = true;
  imageTypes['image/jpg'] = true;

  async function handleSubmit(data, { reset }) {
    const { group_name, group_desc, group_image } = data;

    try {
      if (!group_name) {
        message.error('É necessário inserir um nome para o grupo!');
        return null;
      } else if (!group_desc) {
        message.error('É necessário inserir a descrição do grupo!');
        return null;
      } else if (!group_image) {
        message.error('É necessário inserir uma imagem para o grupo!');
        return null;
      } else if (group_image) {
        if (!imageTypes[data.group_image.type]) {
          message.error(
            'Arquivo de imagem deve ser dos tipos png, jpeg ou jpg'
          );
          return null;
        }
      }

      let formData = new FormData();
      formData.append('group_name', group_name);
      formData.append('group_desc', group_desc);
      formData.append('group_image', group_image);

      await GroupService.create(formData);
      message.success('Grupo criado com sucesso!');
      await getGroups();
      reset();
      setVisible(false);
    } catch (error) {
      reset();
      message.error('Falha ao criar o grupo!');
    }
  }

  const initialData = {};

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        onCancel={handleCancel}
        visible={visible}
        title={title}
        footer={null}
        destroyOnClose={true}
      >
        <Form
          name="updatePost"
          onSubmit={handleSubmit}
          initialData={initialData}
        >
          <InputsContainer>
            <Input
              style={{ margin: '1vh auto' }}
              name="group_name"
              placeholder="Nome do grupo"
            />
            <TextArea
              style={{ margin: '1vh auto' }}
              name="group_desc"
              placeholder="Descrição do grupo"
            />
            <FileUpload
              style={{ width: '30%' }}
              name="group_image"
              labelText="Imagem do grupo"
            />
            <StyledUpdateButton
              style={{ display: 'flex', margin: '1vh auto' }}
              type="submit"
            >
              + Criar grupo
            </StyledUpdateButton>
          </InputsContainer>
        </Form>
      </Modal>
    </>
  );
}

export default UpdatePostModal;
