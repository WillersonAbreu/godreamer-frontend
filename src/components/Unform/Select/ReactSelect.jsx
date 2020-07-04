import React, { useRef, useEffect } from 'react';

import { useField } from '@unform/core';

import { StyledSelect } from './ReactSelectStyles';

const Select = ({ name, ...rest }) => {
  const selectRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,

      ref: selectRef.current,

      path: 'value',

      getValue: ref => {
        if (!ref.value) return '';
        return ref.value;
      }
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <>
      <StyledSelect
        onChange={e => {
          return (selectRef.current.value = e.currentTarget.value);
        }}
        id={fieldName}
        defaultValue={defaultValue}
        ref={selectRef}
        {...rest}
      >
        {rest.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>

      {error && <span>{error}</span>}
    </>
  );
};

export default Select;
