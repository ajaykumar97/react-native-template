import React, {useState, useCallback} from 'react';
import {Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import icBackArrow from '../../../assets/icons/icBackArrow.svg';
import {REGEX} from '../../../utilities/constants';
import {
  showErrorMessage,
  showSuccessMessage,
} from '../../../utilities/helperFunctions/miscellaneous';
import {goBack} from '../../../utilities/navigationService';
import Button from '../../../commonComponents/Button';
import Header from '../../../commonComponents/Header';
import TextInputWithLabel from '../../../commonComponents/TextInputWithLabel';
import Wrapper from '../../../commonComponents/Wrapper';

import styles from './styles';

interface ForgotPasswordProps {}

const ForgotPassword: React.FC<ForgotPasswordProps> = () => {
  const [email, setEmail] = useState<string>('');

  const {t} = useTranslation();

  const onSubmit = useCallback(() => {
    if (!email.trim()) {
      return showErrorMessage(t('enterAnEmail'));
    }

    if (!REGEX.email.test(email.trim())) {
      return showErrorMessage(t('enterValidEmail'));
    }

    Keyboard.dismiss();
    showSuccessMessage(t('checkEmailForPasswordRest'));
    goBack();
    return;
  }, [email, t]);

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
        <TextInputWithLabel
          value={email}
          label={t('email')}
          containerMarginTop={scale(15)}
          keyboardType={'email-address'}
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={setEmail}
          blurOnSubmit
        />

        <Button label={t('submit')} marginTop={50} onPress={onSubmit} />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default ForgotPassword;
