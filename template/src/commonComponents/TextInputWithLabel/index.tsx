import React, {forwardRef, useState} from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  GestureResponderEvent,
  Pressable,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import EyeSlashIcon from '../../assets/icons/icEyeSlash.svg';
import OpenEyeIcon from '../../assets/icons/icOpenEye.svg';
import {COLORS} from '../../utilities/constants';
import {Body3, ErrorText} from '../TextComponents';
import TextInputAccessoryView from '../TextInputAccessoryView';

import styles from './styles';

interface TextInputWithLabelProps extends TextInputProps {
  containerStyle?: any;
  containerMarginTop?: number;
  containerMarginHorizontal?: number;
  labelStyle?: any;
  label: string;
  errorMessage: string | undefined;
  inputAccessoryViewID?: string;
  inputAccessoryViewLabel?: string;
  onInputAccessoryViewPress?: (event: GestureResponderEvent) => void;
}

const TextInputWithLabel = forwardRef<TextInput, TextInputWithLabelProps>(
  (props, ref) => {
    const [isSecureTextEntryEnabled, setIsSecureTextEntryEnabled] =
      useState<boolean>(!!props.secureTextEntry);

    return (
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
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={COLORS.grey2}
            ref={ref}
            secureTextEntry={isSecureTextEntryEnabled}
            underlineColorAndroid={COLORS.transparent}
            style={[
              styles.textInput,
              {height: props.multiline ? undefined : scale(40)},
              props.style,
            ]}
            {...props}
          />

          {props.secureTextEntry && (
            <Pressable
              onPress={() =>
                setIsSecureTextEntryEnabled(!isSecureTextEntryEnabled)
              }>
              {isSecureTextEntryEnabled ? <EyeSlashIcon /> : <OpenEyeIcon />}
            </Pressable>
          )}
        </View>
        {props?.errorMessage && (
          <ErrorText style={styles.errorText}>{props.errorMessage}</ErrorText>
        )}

        {props.inputAccessoryViewID ? (
          <TextInputAccessoryView
            inputAccessoryViewID={props.inputAccessoryViewID}
            label={props.inputAccessoryViewLabel}
            onPress={props.onInputAccessoryViewPress}
          />
        ) : null}
      </View>
    );
  },
);

export default TextInputWithLabel;
