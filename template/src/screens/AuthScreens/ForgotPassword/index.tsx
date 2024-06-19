import {yupResolver} from '@hookform/resolvers/yup';
import React, {useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale} from 'react-native-size-matters';

import icBackArrow from '../../../assets/icons/icBackArrow.svg';
import Button from '../../../commonComponents/Button';
import Header from '../../../commonComponents/Header';
import TextInputWithLabel from '../../../commonComponents/TextInputWithLabel';
import Wrapper from '../../../commonComponents/Wrapper';
import {INPUT_FIELDS} from '../../../utilities/constants';
import {showSuccessMessage} from '../../../utilities/helperFunctions/miscellaneous';
import {forgotPasswordFormSchema} from '../../../utilities/helperFunctions/validators';
import {goBack} from '../../../utilities/navigationService';

import styles from './styles';

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(forgotPasswordFormSchema),
    mode: 'onSubmit',
  });
  const {t} = useTranslation();

  const onSubmit = useCallback(() => {
    Keyboard.dismiss();
    showSuccessMessage(t('checkEmailForPasswordRest'));
    goBack();
    return;
  }, [t]);

  return (
    <Wrapper>
      <Header
        title={t('forgotPassword')}
        LeftIconSource={icBackArrow}
        onLeftPress={goBack}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
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
                containerMarginTop={scale(15)}
                keyboardType={'email-address'}
                returnKeyType={'done'}
                autoCapitalize={'none'}
                errorMessage={errors?.email?.message}
                autoCorrect={false}
                onChangeText={handleChange}
                blurOnSubmit
              />
            );
          }}
        />

        <Button
          label={t('submit')}
          marginTop={50}
          onPress={handleSubmit(onSubmit)}
        />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default ForgotPassword;
