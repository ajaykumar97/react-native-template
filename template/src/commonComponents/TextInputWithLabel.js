import React from 'react';
import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {colors} from '../utilities/constants';
import {fonts} from '../assets';
import {TextInputAccessoryView} from './TextInputAccessoryView';

const TextInputWithLabel = React.forwardRef((props: TextInputProps, ref) => (
  <View
    style={[
      styles.container,
      props.containerStyle,
      {
        marginTop: props.containerMarginTop || 0,
        marginHorizontal: props.containerMarginHorizontal || 0,
      },
    ]}>
    <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>

    <TextInput
      ref={ref}
      blurOnSubmit={false}
      underlineColorAndroid={'transparent'}
      {...props}
      style={[styles.textInput, props.style]}
    />

    {props.inputAccessoryViewID ? (
      <TextInputAccessoryView
        inputAccessoryViewID={props.inputAccessoryViewID}
        label={props.inputAccessoryViewLabel}
        onPress={props.onInputAccessoryViewPress}
      />
    ) : null}
  </View>
));

const styles = StyleSheet.create({
  container: {},
  label: {
    color: colors.white2,
    fontSize: moderateScale(12),
    fontFamily: fonts.regular,
  },
  textInput: {
    paddingHorizontal: moderateScale(5),
    borderBottomWidth: moderateScale(0.5),
    borderColor: colors.grey2,
    fontFamily: fonts.semiBold,
    fontSize: moderateScale(14),
    color: colors.white1,
    height: moderateScale(40),
  },
});

export {TextInputWithLabel};
