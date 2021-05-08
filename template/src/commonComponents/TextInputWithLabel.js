import React from 'react';
import {View, Text, TextInput, TextInputProps, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../utilities/constants';
import {fonts} from '../assets';
import {TextInputAccessoryView} from './TextInputAccessoryView';

const TextInputWithLabel = React.forwardRef((props: TextInputProps, ref) => (
  <View
    style={[
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
      style={[
        styles.textInput,
        {height: props.multiline ? undefined : scale(40)},
        props.style,
      ]}
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
  label: {
    color: colors.white2,
    fontSize: scale(12),
    fontFamily: fonts.regular,
  },
  textInput: {
    paddingHorizontal: scale(5),
    borderBottomWidth: scale(0.5),
    borderColor: colors.grey2,
    fontFamily: fonts.semiBold,
    fontSize: scale(14),
    color: colors.white1,
  },
});

export {TextInputWithLabel};
