import React, { useRef } from 'react';

import {
  StyledRegisterButton,
  StyledRegisterForm,
  InputWrapper,
  RegisterInput,
  RegisterSelect,
  RegisterSelectWrapper,
  StyledSelctIcon
} from './RegisterFormStyles';

import Datepicker from '~/components/Unform/Datepicker/ReactDatepicker';

// Yup imports
import * as Yup from 'yup';

// Services imports
import UserService from '~/services/api/User';
import { message } from 'antd';

export default function RegisterForm() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      // Schema to validate the form
      const schema = Yup.object().shape({
        name: Yup.string().required('É necessário inserir o nome'),
        email: Yup.string()
          .email('Email inválido')
          .required('É necessário inserir o email'),
        password: Yup.string().required('É necessário inserir uma senha'),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'A senha e confirmar senha devem ser iguais'
        )
      });
      // Validating the form
      await schema.validate(data, {
        abortEarly: false
      });

      await UserService.create(data);
      reset();
      message.success('Usuário registrado com sucesso!');
    } catch (error) {
      // Showing validation errors on
      const validationErrors = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;

          message.error(error.message);
        });
      } else {
        message.error('Erro ao tentar registrar o usuário');
      }
    }
  }

  const initialData = {
    birthdate: new Date()
  };

  return (
    <StyledRegisterForm
      initialData={initialData}
      ref={formRef}
      onSubmit={handleSubmit}
    >
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
        <StyledSelctIcon htmlFor="user_type" />
      </RegisterSelectWrapper>

      <StyledRegisterButton>Cadastrar</StyledRegisterButton>
    </StyledRegisterForm>
  );
}
