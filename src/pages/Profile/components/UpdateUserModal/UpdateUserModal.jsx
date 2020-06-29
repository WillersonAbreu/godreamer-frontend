import React from 'react';

// Ant design imports
import { Modal, message } from 'antd';

// Components imports
import TextArea from '~/components/Unform/TextArea/TextArea';

// Date FNS imports
import { parseISO, addDays } from 'date-fns';

// Styled components imports
import {
  StyledFileUploader,
  StyledUpdateButton,
  StyledDeleteButton,
  UpdateInput,
  StyledDatePicker,
  StyledForm,
  RegisterSelectWrapper,
  RegisterSelect,
  StyledSelctIcon,
  InputsWrapper
} from './UpdateUserStyles';

// Icons imports
import { DeliveredProcedureOutlined, DeleteOutlined } from '@ant-design/icons';

// Service import
import UserService from '~/services/api/User';

function UpdateUserModal({
  title,
  visible,
  setVisible,
  userId,
  name,
  email,
  birthdate,
  aboutUser,
  userType,
  getUserData
}) {
  async function handleSubmit(data) {
    const imageTypes = [];
    imageTypes['image/png'] = true;
    imageTypes['image/jpeg'] = true;
    imageTypes['image/jpg'] = true;

    try {
      if (data.name.length <= 0)
        return message.error('É necessário inserir o nome');
      if (data.email.length <= 0)
        return message.error('É necessário inserir o email');

      if (data.birthdate.length <= 0)
        return message.error('É necessário inserir data de nascimento');
      if (data.user_type.length <= 0)
        return message.error('É necessário inserir o tipo de usuário');

      if (data.password.length > 0) {
        if (data.currentPassword.length <= 0) {
          return message.error(
            'É necessário inserir a senha atual para trocar a senha'
          );
        } else if (
          data.passwordConfirmation.length <= 0 ||
          data.passwordConfirmation !== data.password
        ) {
          return message.error(
            'A senha e a confirmação de senha são diferentes'
          );
        }
      }

      // Making http request to the backend
      const response = await UserService.update(data);

      if (response.response) {
        message.error(response.response.data.error);
        return;
      }

      await getUserData();
      message.success('Dados atualizados com sucesso!');
      handleClose();
    } catch (error) {
      console.log(error);
      message.error('Erro ao atualizar os dados!');
    }
  }

  async function handleDelete() {
    try {
      await UserService.delete();
      // await getPosts();
      message.success('Conta encerrada com sucesso!');
      setVisible(false);
    } catch (error) {
      console.log(error);
      message.error('Erro ao encerrar a conta!');
      setVisible(false);
    }
  }

  function handleClose() {
    setVisible(false);
  }

  const initialData = {
    name: name ? name : '',
    email: email ? email : '',
    birthdate: birthdate ? parseISO(birthdate) : '',
    about_user: aboutUser ? aboutUser : '',
    user_type: userType ? userType : ''
  };

  return (
    <>
      <Modal
        visible={visible}
        title={title}
        footer={null}
        onCancel={handleClose}
      >
        {/* <StyledFileUploader
            showPreview={true}
            icon={<PictureOutlined style={{ paddingTop: '0.7vh' }} />}
            labelText="Escolha uma imagem"
            name="url_image"
          /> */}

        <StyledForm
          name="updatePost"
          onSubmit={handleSubmit}
          initialData={initialData}
        >
          <InputsWrapper>
            <UpdateInput name="name" placeholder="Nome" />
            <UpdateInput name="email" placeholder="Email" />
            <UpdateInput
              name="currentPassword"
              placeholder="Senha atual"
              type="password"
            />
            <UpdateInput
              name="password"
              placeholder="Nova senha"
              type="password"
            />
            <UpdateInput
              name="passwordConfirmation"
              placeholder="Confirmar nova senha"
              type="password"
            />
            <StyledDatePicker
              name="birthdate"
              placeholder="Select your birth date"
            />
            <RegisterSelectWrapper>
              <RegisterSelect
                name="user_type"
                options={[
                  { value: '1', label: 'Sonhador' },
                  { value: '2', label: 'Mentor' }
                ]}
              />
              <StyledSelctIcon htmlFor="user_type" />
            </RegisterSelectWrapper>
          </InputsWrapper>

          <TextArea name="about_user" />

          <StyledUpdateButton
            style={{ display: 'flex', margin: '1vh auto', float: 'left' }}
            type="submit"
          >
            <DeliveredProcedureOutlined style={{ paddingTop: '0.7vh' }} />
            Atualizar
          </StyledUpdateButton>
        </StyledForm>

        <StyledDeleteButton onClick={handleDelete}>
          <DeleteOutlined style={{ paddingTop: '0.7vh' }} />
          Encerrar conta
        </StyledDeleteButton>
      </Modal>
    </>
  );
}

export default UpdateUserModal;
