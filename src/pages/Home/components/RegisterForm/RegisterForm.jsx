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

export default function RegisterForm() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const response = await UserService.create(data);
      console.log(response);
      // Remove all previous errors
      // formRef.current.setErrors({});
      // Schema to validate the form
      // const schema = Yup.object().shape({
      //   email: Yup.string()
      //     .email()
      //     .required(),
      //   password: Yup.string()
      //     .min(6)
      //     .required()
      // });
      // Validating the form
      // await schema.validate(data, {
      //   abortEarly: false
      // });
    } catch (error) {
      console.log(error);
      // Showing validation errors on
      // const validationErrors = {};
      // if (error instanceof Yup.ValidationError) {
      //   error.inner.forEach(error => {
      //     validationErrors[error.path] = error.message;
      //   });
      //   formRef.current.setErrors(validationErrors);
      // }
    }
  }

  return (
    <StyledRegisterForm ref={formRef} onSubmit={handleSubmit}>
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
