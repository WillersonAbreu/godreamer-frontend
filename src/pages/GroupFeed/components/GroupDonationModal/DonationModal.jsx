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
          {donationInfo.UserInfoDonation && (
            <span> {donationInfo.UserInfoDonation.information} </span>
          )}
          {/* {donationInfo} */}
        </Modal>
      )}
    </>
  );
}

export default UpdatePostModal;
