import React, {useRef, useState, useCallback} from 'react';
import {Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {ACCESS_TOKEN, REGEX, SCREEN_NAMES} from '../../../utilities/constants';
import {goBack, replace} from '../../../utilities/navigationService';
import BackIcon from '../../../assets/icons/icBackArrow.svg';
import {setSecuredData} from '../../../utilities/helperFunctions/localStorage';
import {showErrorMessage} from '../../../utilities/helperFunctions/miscellaneous';
import Button from '../../../commonComponents/Button';
import Header from '../../../commonComponents/Header';
import TextInputWithLabel from '../../../commonComponents/TextInputWithLabel';
import Wrapper from '../../../commonComponents/Wrapper';

import styles from './styles';

const Signup: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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

  const onSignupPress = useCallback(async () => {
    if (!name.trim()) {
      return showErrorMessage(t('enterYourName'));
    }
    if (!email.trim()) {
      return showErrorMessage(t('enterAnEmail'));
    }
    if (!REGEX.email.test(email.trim())) {
      return showErrorMessage(t('enterValidEmail'));
    }
    if (!password) {
      return showErrorMessage(t('enterAPassword'));
    }
    if (!REGEX.password.test(password)) {
      return showErrorMessage(t('passwordCanContainOnly'));
    }
    setSecuredData(ACCESS_TOKEN, email.trim());

    Keyboard.dismiss();

    replace(SCREEN_NAMES.MainNavigator);
  }, [email, name, password, t]);

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
        <TextInputWithLabel
          value={name}
          label={t('name')}
          keyboardType={'default'}
          returnKeyType={'next'}
          onSubmitEditing={onNameSubmit}
          onChangeText={setName}
        />

        <TextInputWithLabel
          value={email}
          label={t('email')}
          ref={emailRef}
          containerMarginTop={scale(15)}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onSubmitEditing={onEmailSubmit}
          onChangeText={setEmail}
        />

        <TextInputWithLabel
          value={password}
          label={t('password')}
          ref={passwordRef}
          secureTextEntry
          containerMarginTop={scale(15)}
          blurOnSubmit
          onChangeText={setPassword}
        />

        <Button label={t('signup')} marginTop={30} onPress={onSignupPress} />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Signup;
