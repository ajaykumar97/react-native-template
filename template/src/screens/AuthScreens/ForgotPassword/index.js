import React, {useState, useCallback} from 'react';
import {Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {scale} from 'react-native-size-matters';

import {icons} from '../../../assets';
import {
  Wrapper,
  TextInputWithLabel,
  Header,
  Button,
} from '../../../commonComponents';
import strings from '../../../localization';
import {regex} from '../../../utilities/constants';
import {
  showSuccessMessage,
  showErrorMessage,
} from '../../../utilities/helperFunctions';
import {goBack} from '../../../utilities/navigationService';
import styles from './styles';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onSubmit = useCallback(() => {
    if (!email.trim()) {
      return showErrorMessage(strings.enterAnEmail);
    }

    if (!regex.email.test(email.trim())) {
      return showErrorMessage(strings.enterValidEmail);
    }

    Keyboard.dismiss();
    showSuccessMessage(strings.checkEmailForPasswordRest);
    goBack();
    return;
  }, [email]);

  return (
    <Wrapper>
      <Header
        title={strings.forgotPassword}
        leftIconSource={icons.icBackArrowWhite}
        onLeftPress={goBack}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps={'handled'}>
        <TextInputWithLabel
          value={email}
          label={strings.email}
          containerMarginTop={scale(15)}
          keyboardType={'email-address'}
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          onChangeText={setEmail}
          blurOnSubmit
        />

        <Button label={strings.submit} marginTop={50} onPress={onSubmit} />
      </KeyboardAwareScrollView>
    </Wrapper>
  );
};

export default ForgotPassword;
