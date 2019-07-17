/* eslint-disable */
import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  username: yup
    .string()
    .email('Invalid email')
    .required("It's required"),
  password: yup
    .string()
    .required("It's required"),
});

export const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email')
    .required("It's required"),
});
