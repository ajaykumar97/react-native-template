import * as yup from 'yup';

import i18next from '../../localization';
import {REGEX} from '../constants';

const t = i18next.t;

yup.addMethod(yup.string, 'email', function validateEmail(message) {
  return this.matches(REGEX.email, {
    message,
    name: 'email',
    excludeEmptyString: true,
  });
});

export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email(t('enterValidEmail'))
    .required(t('enterValidEmail')),
  password: yup
    .string()
    .required(t('validPassword'))
    .matches(/\S+/i, t('validPassword')),
});

export const forgotPasswordFormSchema = yup.object().shape({
  email: yup
    .string()
    .required(t('enterValidEmail'))
    .email(t('enterValidEmail')),
});

export const signupFormSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required(t('enterYourName'))
    .matches(REGEX.name, t('enterYourName')),
  email: yup
    .string()
    .email(t('enterValidEmail'))
    .required(t('enterValidEmail')),
  password: yup
    .string()
    .required(t('pleaseEnterPassword'))
    .matches(REGEX.password, t('passwordCanContainOnly')),
});
