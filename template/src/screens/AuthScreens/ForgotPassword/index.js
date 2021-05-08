import React, {useState} from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale} from 'react-native-size-matters';

import {icons} from '../../../assets';
import {
  Wrapper,
  TextInputWithLabel,
  Header,
  Button,
} from '../../../commonComponents';
import {regex} from '../../../utilities/constants';
import {
  showSuccessMessage,
  showErrorMessage,
} from '../../../utilities/helperFunctions';
import {goBack} from '../../../utilities/NavigationService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    if (!email.trim()) {
      return showErrorMessage('Please enter an email');
    } else if (!regex.email.test(email.trim())) {
      return showErrorMessage('Please enter a valid email');
    }

    Keyboard.dismiss();
    showSuccessMessage(
      'Please check your email. A verification link is sent to your email to change your password.',
    );
    goBack();
  };

  return (
    <Wrapper>
      <Header
        title={'Forgot Password'}
        leftIconSource={icons.icBackArrowWhite}
        onLeftPress={goBack}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <TextInputWithLabel
          value={email}
          label={'Email'}
          containerMarginTop={scale(15)}
          keyboardType={'email-address'}
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={setEmail}
          blurOnSubmit
        />

        <Button label={'Submit'} marginTop={50} onPress={onSubmit} />
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

export default ForgotPassword;
