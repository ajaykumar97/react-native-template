import React, {useRef, useState} from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale} from 'react-native-size-matters';

import {
  Wrapper,
  Header,
  TextInputWithLabel,
  Button,
} from '../../../commonComponents';
import {regex} from '../../../utilities/constants';
import {showErrorMessage} from '../../../utilities/helperFunctions';
import {signup} from './actions';
import {icons} from '../../../assets';
import {goBack} from '../../../utilities/NavigationService';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onNameSubmit = () => emailRef.current.focus();
  const onEmailSubmit = () => passwordRef.current.focus();
  const onSignupPress = () => {
    if (!name.trim()) {
      return showErrorMessage('Please enter your name');
    } else if (!email.trim()) {
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

    Keyboard.dismiss();
    dispatch(
      signup({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      }),
    );
  };

  return (
    <Wrapper>
      <Header
        title={'Signup'}
        leftIconSource={icons.icBackArrowWhite}
        onLeftPress={goBack}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <TextInputWithLabel
          value={name}
          label={'Name'}
          keyboardType={'default'}
          returnKeyType={'next'}
          onSubmitEditing={onNameSubmit}
          onChangeText={setName}
        />

        <TextInputWithLabel
          value={email}
          label={'Email'}
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
          label={'Password'}
          ref={passwordRef}
          secureTextEntry
          containerMarginTop={scale(15)}
          blurOnSubmit
          onChangeText={setPassword}
        />

        <Button label={'Signup'} marginTop={30} onPress={onSignupPress} />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: scale(40),
    paddingHorizontal: scale(15),
  },
});

export default Signup;
