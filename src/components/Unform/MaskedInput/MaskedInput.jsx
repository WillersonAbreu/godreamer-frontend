import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import InputMask from 'react-input-mask';

export default function MaskedInput({ name, mask, ...rest }) {
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
      <InputMask
        ref={inputRef}
        defaultValue={defaultValue}
        className={error ? 'has-error' : ''}
        mask={mask}
        {...rest}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
}
