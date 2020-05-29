import React from 'react';

// Ant design imports
import { Modal, Button } from 'antd';

// import { Container } from './styles';

function UpdatePostModal({ title, loading, visible, setLoading, setVisible }) {
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
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default UpdatePostModal;
