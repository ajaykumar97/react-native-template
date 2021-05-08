import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';

import {fonts} from '../../../assets';
import {TextInputWithLabel, Button, Wrapper} from '../../../commonComponents';
import {colors, screenNames, regex} from '../../../utilities/constants';
import {navigate} from '../../../utilities/NavigationService';
import {showErrorMessage} from '../../../utilities/helperFunctions';
import {login} from './actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const onEmailSubmit = () => passwordRef.current.focus();
  const onSignupPress = () => navigate(screenNames.Signup);
  const onForgotPasswordPress = () => navigate(screenNames.ForgotPassword);

  const onLoginPress = () => {
    if (!email.trim()) {
      return showErrorMessage('Please enter an email');
    } else if (!regex.email.test(email.trim())) {
      return showErrorMessage('Please enter a valid email');
    } else if (!password) {
      return showErrorMessage('Please enter a passsword');
    } else if (!regex.password.test(password)) {
      return showErrorMessage(
        'Password can only contain alphabets, numbers and any of the special characters from _@./#&+-',
      );
    }

    dispatch(login({email, password}));
  };

  return (
    <Wrapper>
      <View
        style={{
          flex: 0.35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.white1,
            fontFamily: fonts.regular,
            fontSize: scale(28),
          }}>
          Boilerplate
        </Text>

        <Text
          style={{
            color: colors.white1,
            fontFamily: fonts.regular,
            fontSize: scale(16),
          }}>
          App environment: {Config.ENV_TYPE}
        </Text>
      </View>

      <View
        style={{
          flex: 0.65,
          paddingHorizontal: scale(20),
        }}>
        <TextInputWithLabel
          value={email}
          label={'Email'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onSubmitEditing={onEmailSubmit}
          onChangeText={setEmail}
        />

        <TextInputWithLabel
          value={password}
          label={'Password'}
          ref={passwordRef}
          secureTextEntry
          containerMarginTop={20}
          blurOnSubmit
          onChangeText={setPassword}
        />

        <Text
          style={{
            alignSelf: 'flex-end',
            fontSize: scale(14),
            color: colors.white1,
            fontFamily: fonts.regular,
            marginTop: scale(5),
            paddingVertical: scale(10),
          }}
          onPress={onForgotPasswordPress}>
          Forgot Password?
        </Text>

        <Button label={'Login'} marginTop={20} onPress={onLoginPress} />

        <View
          style={{
            paddingVertical: scale(15),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: scale(14),
              fontFamily: fonts.regular,
              color: colors.white1,
            }}>
            Don't have an account?
          </Text>
          <Text
            style={{
              fontSize: scale(14),
              fontFamily: fonts.regular,
              color: colors.white1,
              textDecorationLine: 'underline',
              marginLeft: scale(5),
            }}
            onPress={onSignupPress}>
            Signup
          </Text>
        </View>
      </View>
    </Wrapper>
  );
};

export default Login;
