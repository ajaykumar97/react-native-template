import React, {forwardRef} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  GestureResponderEvent,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import TextInputAccessoryView from '../TextInputAccessoryView';
import {COLORS} from '../../utilities/constants';
import {Body3} from '../TextComponents';

import styles from './styles';

interface TextInputWithLabelProps extends TextInputProps {
  containerStyle?: any;
  containerMarginTop?: number;
  containerMarginHorizontal?: number;
  labelStyle?: any;
  label: string;
  multiline?: boolean;
  inputAccessoryViewID?: string;
  inputAccessoryViewLabel?: string;
  onInputAccessoryViewPress?: (event: GestureResponderEvent) => void;
}

const TextInputWithLabel = forwardRef<TextInput, TextInputWithLabelProps>(
  (props, ref) => (
    <View
      style={[
        props.containerStyle,
        {
          marginTop: props.containerMarginTop || 0,
          marginHorizontal: props.containerMarginHorizontal || 0,
        },
      ]}>
      <Body3 style={{...styles.label, ...props.labelStyle}}>
        {props.label}
      </Body3>

      <TextInput
        ref={ref}
        blurOnSubmit={false}
        underlineColorAndroid={COLORS.transparent}
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
  ),
);

export default TextInputWithLabel;
