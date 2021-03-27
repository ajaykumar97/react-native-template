import React, {PureComponent} from 'react';
import {StyleSheet, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import cloneDeep from 'clone-deep';
import {scale} from 'react-native-size-matters';

import {
  Wrapper,
  Header,
  TextInputWithLabel,
  Button,
} from '../../../commonComponents';
import {colors, regex} from '../../../utilities/constants';
import {showErrorMessage} from '../../../utilities/helperFunctions';
import {signup} from './actions';

class Signup extends PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onNameSubmit = () => this.emailRef.current.focus();
  onEmailSubmit = () => this.passwordRef.current.focus();
  onSignupPress = () => {
    const {name, email, password} = this.state;
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
    this.props.signup({
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
    });
  };

  emailRef = React.createRef();
  passwordRef = React.createRef();

  updateState = (key) => (value) => {
    const state = cloneDeep(this.state);
    state[key] = value;

    this.setState(state);
  };

  render() {
    const {name, email, password} = this.state;
    return (
      <Wrapper wrapperBackgroundColor={colors.blue2}>
        <Header title={'Signup'} wrapperBackgroundColor={colors.blue2} />
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps={'handled'}>
          <TextInputWithLabel
            value={name}
            label={'Name'}
            keyboardType={'default'}
            returnKeyType={'next'}
            onSubmitEditing={this.onNameSubmit}
            onChangeText={this.updateState('name')}
          />

          <TextInputWithLabel
            value={email}
            label={'Email'}
            ref={this.emailRef}
            containerMarginTop={scale(15)}
            keyboardType={'email-address'}
            returnKeyType={'next'}
            autoCapitalize={'none'}
            autoCorrect={false}
            onSubmitEditing={this.onEmailSubmit}
            onChangeText={this.updateState('email')}
          />

          <TextInputWithLabel
            value={password}
            label={'Password'}
            ref={this.passwordRef}
            secureTextEntry
            containerMarginTop={scale(15)}
            blurOnSubmit
            onChangeText={this.updateState('password')}
          />

          <Button
            label={'Signup'}
            marginTop={30}
            onPress={this.onSignupPress}
            bgColor={colors.white1}
            labelColor={colors.blue1}
          />
        </KeyboardAwareScrollView>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: scale(40),
    paddingHorizontal: scale(15),
  },
});

export default connect(null, {signup})(Signup);
