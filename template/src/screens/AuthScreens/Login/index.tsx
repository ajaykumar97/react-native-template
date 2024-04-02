import React, {useState, useRef, useCallback} from 'react';
import {View, Pressable} from 'react-native';
import Config from 'react-native-config';
import {useTranslation} from 'react-i18next';

import {SCREEN_NAMES, REGEX, ACCESS_TOKEN} from '../../../utilities/constants';
import {navigate, replace} from '../../../utilities/navigationService';
import {Body1, Body2, Heading1} from '../../../commonComponents/TextComponents';
import {setSecuredData} from '../../../utilities/helperFunctions/localStorage';
import {showErrorMessage} from '../../../utilities/helperFunctions/miscellaneous';
import Button from '../../../commonComponents/Button';
import TextInputWithLabel from '../../../commonComponents/TextInputWithLabel';
import Wrapper from '../../../commonComponents/Wrapper';

import styles from './styles';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {t} = useTranslation();

  const passwordRef = useRef() as any;

  const onEmailSubmit = () => {
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
  };

  const onSignupPress = () => navigate(SCREEN_NAMES.Signup);
  const onForgotPasswordPress = () => navigate(SCREEN_NAMES.ForgotPassword);

  const onLoginPress = useCallback(async () => {
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
    await setSecuredData(ACCESS_TOKEN, email.trim());
    replace(SCREEN_NAMES.MainNavigator);
  }, [email, password, t]);

  return (
    <Wrapper>
      <View style={styles.container}>
        <Heading1 style={styles.heading}>projectname</Heading1>
        <Body1 style={styles.heading}>{Config.ENV}</Body1>
      </View>

      <View style={styles.inputContainer}>
        <TextInputWithLabel
          value={email}
          label={t('email')}
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
          containerMarginTop={20}
          blurOnSubmit
          onChangeText={setPassword}
        />

        <Pressable
          style={styles.forgottenPasswordContainer}
          onPress={onForgotPasswordPress}>
          <Body2 style={styles.forgottenPasswordText}>
            {t('forgotPasswordWithQuestion')}
          </Body2>
        </Pressable>

        <Button label={t('login')} marginTop={20} onPress={onLoginPress} />

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
