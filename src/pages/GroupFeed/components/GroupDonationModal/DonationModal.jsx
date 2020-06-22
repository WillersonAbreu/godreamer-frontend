import React from 'react';

// Ant design imports
import { Modal, message } from 'antd';

function UpdatePostModal({ title, visible, setVisible, donationInfo }) {
  function handleClose() {
    setVisible(false);
  }

  return (
    <>
      {donationInfo && (
        <Modal
          visible={visible}
          title={title}
          footer={null}
          onCancel={handleClose}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '3vh auto'
            }}
          >
            <strong style={{ color: 'black' }}>
              Mensagem do fundador do grupo:
            </strong>
            {donationInfo.UserInfoDonation && (
              <>
                <span style={{ textAlign: 'center' }}>
                  {donationInfo.UserInfoDonation.information}
                </span>
                <strong style={{ color: 'black' }}>
                  Dados da conta para doação:
                </strong>
                <span style={{ textAlign: 'center' }}>
                  <strong style={{ color: 'black' }}>Conta:</strong>
                  {donationInfo.UserInfoDonation.account}
                </span>
              </>
            )}
          </div>
        </Modal>
      )}
    </>
  );
}

export default UpdatePostModal;