import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

// Ant design import
import { CheckCircleOutlined } from '@ant-design/icons';

// Styles import
import {
  FileInputContainer,
  StyledInputLabel
} from '../UserInfoDonationModalStyles';

import { Avatar } from 'antd';
import { GLOBAL_URL } from '~/global/shared/config';

const UpdateInputFile = ({
  name,
  labelText,
  icon,
  currentPreview,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);
  const handlePreview = useCallback(e => {
    const file = e.target.files[0];
    if (!file) {
      setPreview(null);
    }
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_, value) {
        setPreview(value);
      }
    });
  }, [fieldName, registerField]);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      {!preview && !currentPreview && (
        <Avatar
          size={150}
          src={preview && preview}
          style={{ margin: '0 auto' }}
        />
      )}
      {!preview && currentPreview && (
        <Avatar
          size={150}
          src={`${GLOBAL_URL}static/profile/${currentPreview}`}
          style={{ margin: '0 auto' }}
        />
      )}
      {preview && (
        <Avatar size={150} src={preview} style={{ margin: '0 auto' }} />
      )}
      <FileInputContainer>
        <StyledInputLabel htmlFor={labelText}>
          {icon} {labelText}
          {preview && <CheckCircleOutlined style={{ marginLeft: '4px' }} />}
        </StyledInputLabel>
        <input
          id={labelText}
          hidden
          type="file"
          ref={inputRef}
          onChange={handlePreview}
          {...rest}
        />
      </FileInputContainer>
    </div>
  );
};

export default UpdateInputFile;
