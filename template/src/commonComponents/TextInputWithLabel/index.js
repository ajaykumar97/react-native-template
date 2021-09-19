import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';
import {scale} from 'react-native-size-matters';

import {TextInputAccessoryView} from '../TextInputAccessoryView';
import styles from './styles';

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

export {TextInputWithLabel};
