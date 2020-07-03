import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

// import StyledInput from './StyledInput';

import { Input } from 'antd';

export default function SearchInput({ name, value, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Input
        value={value}
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}
