import {yupResolver} from '@hookform/resolvers/yup';
import React, {useRef, useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {View, Pressable} from 'react-native';
import Config from 'react-native-config';
import {scale} from 'react-native-size-matters';

import Button from '../../../commonComponents/Button';
import {Body1, Body2, Heading1} from '../../../commonComponents/TextComponents';
import TextInputWithLabel from '../../../commonComponents/TextInputWithLabel';
import Wrapper from '../../../commonComponents/Wrapper';
import {
  SCREEN_NAMES,
  ACCESS_TOKEN,
  INPUT_FIELDS,
} from '../../../utilities/constants';
import {setSecuredData} from '../../../utilities/helperFunctions/localStorage';
import {loginFormSchema} from '../../../utilities/helperFunctions/validators';
import {navigate, replace} from '../../../utilities/navigationService';

import styles from './styles';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    mode: 'onSubmit',
  });
  const {t} = useTranslation();

  const passwordRef = useRef() as any;

  const onEmailSubmit = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const onSignupPress = () => navigate(SCREEN_NAMES.Signup);
  const onForgotPasswordPress = () => navigate(SCREEN_NAMES.ForgotPassword);

  const onLoginPress = useCallback(async formData => {
    await setSecuredData(ACCESS_TOKEN, formData.email.trim());
    replace(SCREEN_NAMES.MainNavigator);
  }, []);

  return (
    <Wrapper>
      <View style={styles.container}>
        <Heading1 style={styles.heading}>projectname</Heading1>
        <Body1 style={styles.heading}>{Config.ENV}</Body1>
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name={INPUT_FIELDS.email}
          render={({field: {onChange, value}}) => {
            const handleChange = (text: string) => {
              onChange(text.toLowerCase());
            };
            return (
              <TextInputWithLabel
                value={value}
                placeholder={t('placeholderEmail')}
                label={t('email')}
                keyboardType={'email-address'}
                returnKeyType={'next'}
                autoCapitalize={'none'}
                blurOnSubmit={false}
                autoCorrect={false}
                errorMessage={errors?.email?.message}
                onSubmitEditing={onEmailSubmit}
                onChangeText={handleChange}
              />
            );
          }}
        />

        <Controller
          control={control}
          name={INPUT_FIELDS.password}
          render={({field: {onChange, value}}) => {
            return (
              <TextInputWithLabel
                value={value}
                placeholder={t('passsword')}
                label={t('password')}
                ref={passwordRef}
                returnKeyType={'done'}
                secureTextEntry
                containerMarginTop={20}
                errorMessage={errors?.password?.message}
                blurOnSubmit
                onChangeText={onChange}
              />
            );
          }}
        />

        <Pressable
          style={styles.forgottenPasswordContainer}
          onPress={onForgotPasswordPress}>
          <Body2>{t('forgotPasswordWithQuestion')}</Body2>
        </Pressable>

        <Button
          label={t('login')}
          marginTop={scale(20)}
          onPress={handleSubmit(onLoginPress)}
        />

        <View style={styles.dontHaveAnAccount}>
          <Body2 style={styles.heading}>{t('dontHaveAnAccount')}</Body2>
          <Pressable style={styles.signupText} onPress={onSignupPress}>
            <Body2 style={styles.signup}>{t('signup')}</Body2>
          </Pressable>
        </View>
      </View>
    </Wrapper>
  );
};

export default Login;
