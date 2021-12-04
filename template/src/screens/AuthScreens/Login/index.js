import React, {useState, useRef, useCallback} from 'react';
import {Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

import {fonts} from '../../../assets';
import {TextInputWithLabel, Button, Wrapper} from '../../../commonComponents';
import {colors, screenNames, regex} from '../../../utilities/constants';
import {navigate} from '../../../utilities/navigationService';
import {showErrorMessage} from '../../../utilities/helperFunctions';
import {login} from './actions';
import strings from '../../../localization';
import styles from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const onEmailSubmit = () => passwordRef.current.focus();
  const onSignupPress = () => navigate(screenNames.Signup);
  const onForgotPasswordPress = () => navigate(screenNames.ForgotPassword);

  const onLoginPress = useCallback(() => {
    if (!email.trim()) {
      return showErrorMessage(strings.enterAnEmail);
    }
    if (!regex.email.test(email.trim())) {
      return showErrorMessage(strings.enterValidEmail);
    }
    if (!password) {
      return showErrorMessage(strings.enterAPassword);
    }
    if (!regex.password.test(password)) {
      return showErrorMessage(strings.passwordCanContainOnly);
    }

    dispatch(login({email, password}));
    return;
  }, [dispatch, email, password]);

  return (
    <Wrapper>
      <View style={styles.container}>
        <Text
          style={{
            color: colors.white1,
            fontFamily: fonts.regular,
            fontSize: scale(28),
          }}>
          {strings.template}
        </Text>

        <Text
          style={{
            color: colors.white1,
            fontFamily: fonts.regular,
            fontSize: scale(16),
          }}>
          {strings.formatString(strings.appEnvironment, Config.ENV_TYPE)}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInputWithLabel
          value={email}
          label={strings.email}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onSubmitEditing={onEmailSubmit}
          onChangeText={setEmail}
        />

        <TextInputWithLabel
          value={password}
          label={strings.password}
          ref={passwordRef}
          secureTextEntry
          containerMarginTop={20}
          blurOnSubmit
          onChangeText={setPassword}
        />

        <Text
          style={styles.forgottenPasswordText}
          onPress={onForgotPasswordPress}>
          {strings.forgotPasswordWithQuestion}
        </Text>

        <Button label={strings.login} marginTop={20} onPress={onLoginPress} />

        <View style={styles.dontHaveAnAccount}>
          <Text
            style={{
              fontSize: scale(14),
              fontFamily: fonts.regular,
              color: colors.white1,
            }}>
            {strings.dontHaveAnAccount}
          </Text>
          <Text style={styles.signup} onPress={onSignupPress}>
            {strings.signup}
          </Text>
        </View>
      </View>
    </Wrapper>
  );
};

export default Login;
