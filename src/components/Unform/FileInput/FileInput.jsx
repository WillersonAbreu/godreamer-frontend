import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

// Ant design import
import { CheckCircleOutlined } from '@ant-design/icons';

// Styles import
import { FileInputContainer, StyledInputLabel } from './FileInputStyles';

const ImageInput = ({ name, labelText, icon, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);
  const handlePreview = useCallback(e => {
    const file = e.target.files?.[0];
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
    <FileInputContainer>
      {/* {preview && <img src={preview} alt="Preview" width="30" />} */}
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
  );
};
export default ImageInput;
