import React from 'react';

import { CaretDownOutlined } from '@ant-design/icons';

import {
  StyledRegisterButton,
  StyledRegisterForm,
  InputWrapper,
  RegisterInput,
  RegisterSelect,
  RegisterSelectWrapper,
  StyledSelctIcon
} from './RegisterFormStyles';

import Datepicker from '../../../components/Unform/Datepicker/ReactDatepicker';

export default function RegisterForm() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <StyledRegisterForm onSubmit={handleSubmit}>
      <InputWrapper>
        <RegisterInput name="name" placeholder="Insert your name" />
        <RegisterInput name="email" placeholder="Insert your email" />
      </InputWrapper>

      <InputWrapper>
        <RegisterInput
          name="password"
          placeholder="Insert your password"
          type="password"
        />
        <RegisterInput
          name="passwordConfirmation"
          placeholder="Confirm your password"
          type="password"
        />
      </InputWrapper>

      <Datepicker name="birthdate" placeholder="Select your birth date" />
      <RegisterSelectWrapper>
        <RegisterSelect
          name="user_type"
          options={[
            { value: '1', label: 'Sonhador' },
            { value: '2', label: 'Mentor' }
          ]}
        />
        <StyledSelctIcon for="user_type" />
      </RegisterSelectWrapper>

      <StyledRegisterButton>Cadastrar</StyledRegisterButton>
    </StyledRegisterForm>
  );
}
