import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import cloneDeep from 'clone-deep';
import { connect } from 'react-redux';
import Config from 'react-native-config';

import { fonts } from '../../../assets';
import { TextInputWithLabel, Button, Wrapper } from '../../../commonComponents';
import { colors, screenNames, regex, } from '../../../utilities/constants';
import { navigate } from '../../../utilities/NavigationService';
import { showErrorMessage } from '../../../utilities/helperFunctions';
import { login } from './actions';

class Login extends PureComponent {
  state = {
    email: '',
    password: '',
    date: null
  };

  onEmailSubmit = () => this.passwordRef.current.focus();
  onSignupPress = () => navigate(screenNames.Signup);
  onForgotPasswordPress = () => navigate(screenNames.ForgotPassword);
  onLoginPress = () => {
    const { email, password } = this.state;
    if (!email.trim()) {
      return showErrorMessage('Please enter an email');
    } else if (!regex.email.test(email.trim())) {
      return showErrorMessage('Please enter a valid email');
    } else if (!password) {
      return showErrorMessage('Please enter a passsword');
    } else if (!regex.password.test(password)) {
      return showErrorMessage('Password can only contain alphabets, numbers and any of the special characters from _@./#&+-');
    }

    this.props.login({ email, password });
  };

  passwordRef = React.createRef();

  updateState = (key) => (value) => {
    const state = cloneDeep(this.state);
    state[key] = value;

    this.setState(state);
  };

  render() {
    const { email, password } = this.state;

    return (
      <Wrapper wrapperBackgroundColor={colors.blue2}>
        <View
          style={{
            flex: 0.35,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              color: colors.white1,
              fontFamily: fonts.regular,
              fontSize: moderateScale(28)
            }}
          >
            Boilerplate
          </Text>

          <Text
            style={{
              color: colors.white1,
              fontFamily: fonts.regular,
              fontSize: moderateScale(16)
            }}
          >
            App environment: {Config.ENV_TYPE}
          </Text>
        </View>

        <View
          style={{
            flex: 0.65,
            paddingHorizontal: moderateScale(20)
          }}
        >
          <TextInputWithLabel
            value={email}
            label={'Email'}
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
            containerMarginTop={20}
            blurOnSubmit
            onChangeText={this.updateState('password')}
          />

          <Text
            style={{
              alignSelf: 'flex-end',
              fontSize: moderateScale(14),
              color: colors.white1,
              fontFamily: fonts.regular,
              marginTop: moderateScale(5),
              paddingVertical: moderateScale(10)
            }}
            onPress={this.onForgotPasswordPress}
          >
            Forgot Password?
          </Text>

          <Button
            label={'Login'}
            marginTop={20}
            onPress={this.onLoginPress}
            bgColor={colors.white1}
            labelColor={colors.blue1}
          />

          <View
            style={{
              paddingVertical: moderateScale(15),
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                fontSize: moderateScale(14),
                fontFamily: fonts.regular,
                color: colors.white1,
              }}
            >
              Don't have an account?
            </Text>
            <Text
              style={{
                fontSize: moderateScale(14),
                fontFamily: fonts.regular,
                color: colors.white1,
                textDecorationLine: 'underline',
                marginLeft: moderateScale(5)
              }}
              onPress={this.onSignupPress}
            >
              Signup
            </Text>
          </View>
        </View>
      </Wrapper>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, { login })(Login);
