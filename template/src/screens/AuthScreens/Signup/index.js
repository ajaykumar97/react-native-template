import React, {useRef, useState, useCallback} from 'react';
import {Keyboard} from 'react-native';
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
import {goBack} from '../../../utilities/navigationService';
import strings from '../../../localization';
import styles from './styles';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const onNameSubmit = () => emailRef.current.focus();
  const onEmailSubmit = () => passwordRef.current.focus();
  const onSignupPress = useCallback(() => {
    if (!name.trim()) {
      return showErrorMessage(strings.enterYourName);
    }
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

    Keyboard.dismiss();
    dispatch(
      signup({
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      }),
    );
    return;
  }, [dispatch, email, name, password]);

  return (
    <Wrapper>
      <Header
        title={strings.signup}
        leftIconSource={icons.icBackArrowWhite}
        onLeftPress={goBack}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <TextInputWithLabel
          value={name}
          label={strings.name}
          keyboardType={'default'}
          returnKeyType={'next'}
          onSubmitEditing={onNameSubmit}
          onChangeText={setName}
        />

        <TextInputWithLabel
          value={email}
          label={strings.email}
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
          label={strings.password}
          ref={passwordRef}
          secureTextEntry
          containerMarginTop={scale(15)}
          blurOnSubmit
          onChangeText={setPassword}
        />

        <Button label={strings.signup} marginTop={30} onPress={onSignupPress} />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default Signup;
