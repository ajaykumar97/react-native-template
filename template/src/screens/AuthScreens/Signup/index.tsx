import {yupResolver} from '@hookform/resolvers/yup';
import React, {useRef, useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale} from 'react-native-size-matters';

import BackIcon from '../../../assets/icons/icBackArrow.svg';
import Button from '../../../commonComponents/Button';
import Header from '../../../commonComponents/Header';
import TextInputWithLabel from '../../../commonComponents/TextInputWithLabel';
import Wrapper from '../../../commonComponents/Wrapper';
import {
  ACCESS_TOKEN,
  INPUT_FIELDS,
  SCREEN_NAMES,
} from '../../../utilities/constants';
import {setSecuredData} from '../../../utilities/helperFunctions/localStorage';
import {signupFormSchema} from '../../../utilities/helperFunctions/validators';
import {goBack, replace} from '../../../utilities/navigationService';

import styles from './styles';

const Signup: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signupFormSchema),
    mode: 'onSubmit',
  });
  const {t} = useTranslation();

  const emailRef = useRef() as any;
  const passwordRef = useRef() as any;

  const onNameSubmit = () => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  };

  const onEmailSubmit = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const onSignupPress = useCallback(async formData => {
    setSecuredData(ACCESS_TOKEN, formData.email.trim());

    Keyboard.dismiss();

    replace(SCREEN_NAMES.MainNavigator);
  }, []);

  return (
    <Wrapper>
      <Header
        title={t('signup')}
        LeftIconSource={BackIcon}
        onLeftPress={goBack}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <Controller
          control={control}
          name={INPUT_FIELDS.name}
          render={({field: {onChange, value}}) => {
            return (
              <TextInputWithLabel
                value={value}
                placeholder={t('placeholderName')}
                label={t('name')}
                blurOnSubmit={false}
                keyboardType={'default'}
                returnKeyType={'next'}
                errorMessage={errors?.name?.message}
                onSubmitEditing={onNameSubmit}
                onChangeText={onChange}
              />
            );
          }}
        />

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
                blurOnSubmit={false}
                ref={emailRef}
                containerMarginTop={scale(15)}
                keyboardType={'email-address'}
                errorMessage={errors?.email?.message}
                returnKeyType={'next'}
                autoCapitalize={'none'}
                autoCorrect={false}
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
                blurOnSubmit
                ref={passwordRef}
                errorMessage={errors?.password?.message}
                secureTextEntry
                containerMarginTop={scale(15)}
                onChangeText={onChange}
              />
            );
          }}
        />

        <Button
          label={t('signup')}
          marginTop={30}
          onPress={handleSubmit(onSignupPress)}
        />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Signup;
