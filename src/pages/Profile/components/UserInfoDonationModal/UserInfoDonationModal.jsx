import React from 'react';

// Ant design imports
import { Modal, message } from 'antd';

// Unform imports
import { Form } from '@unform/web';

// Styled components imports
import {
  StyledFileUploader,
  StyledUpdateButton,
  StyledDeleteButton,
  StyledTextArea,
  StyledInput,
  StyledMaskedInput
} from './UserInfoDonationModalStyles';

// Icons imports
import { DeliveredProcedureOutlined } from '@ant-design/icons';

// Service import
import InfoDonationService from '~/services/api/InfoDonation';

function UserInfoDonationModal({
  title,
  visible,
  setVisible,
  userInfoDonation,
  refresh
}) {
  // console.log(userInfoDonation);

  async function handleSubmit(data) {
    try {
      if (!data.information || data.information === '') {
        message.error(
          'É necessário inserir uma mensagem para que os outros usuários vejam.'
        );
        return;
      } else if (!data.account || data.account === '') {
        message.error('É necessário inserir o número da sua conta bancária.');
        return;
      } else if (!data.cpf || data.cpf === '') {
        message.error('É necessário inserir o número do seu CPF.');
        return;
      } else if (!data.bank_name || data.bank_name === '') {
        message.error('É necessário inserir o nome do seu banco.');
        return;
      } else if (!data.agency_number || data.agency_number === '') {
        message.error('É necessário inserir o número da sua agência bancária.');
        return;
      }

      data.agency_number = Number(data.agency_number);

      // Making http request to the backend
      if (userInfoDonation && userInfoDonation.information !== '') {
        await InfoDonationService.update(data, userInfoDonation.user_id);
      } else {
        await InfoDonationService.create(data);
      }
      await refresh();
      setVisible(false);
      message.success('Informações de doação atualizados sucesso!');
    } catch (error) {
      message.error('Erro ao atualizar os dados de doação!');
      setVisible(false);
    }
  }

  function handleClose() {
    setVisible(false);
  }

  const initialData = {
    information: userInfoDonation ? userInfoDonation.information : '',
    account: userInfoDonation ? userInfoDonation.account : '',
    cpf: userInfoDonation ? userInfoDonation.cpf : '',
    bank_name: userInfoDonation ? userInfoDonation.bank_name : '',
    agency_number: userInfoDonation ? userInfoDonation.agency_number : ''
  };

  return (
    <>
      <Modal
        visible={visible}
        title={title}
        footer={null}
        onCancel={handleClose}
        destroyOnClose={true}
      >
        <Form initialData={initialData} onSubmit={handleSubmit}>
          <StyledTextArea
            name="information"
            placeholder="Mensagem para doações"
          />

          <StyledMaskedInput
            mask="999.999.999-99"
            maskPlaceholder={null}
            name="cpf"
            placeholder="Insira o seu CPF (Somente números)"
          />

          <StyledMaskedInput
            mask="999999999-9"
            maskPlaceholder={null}
            name="account"
            placeholder="Insira o número da sua conta (Somente números)"
          />

          <StyledInput name="bank_name" placeholder="Insira o nome do banco" />

          <StyledInput
            name="agency_number"
            placeholder="Insira o número da agência do seu banco"
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

export default UserInfoDonationModal;
