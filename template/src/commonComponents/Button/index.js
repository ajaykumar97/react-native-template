import React from 'react';
import {Text, Pressable} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../utilities/constants';
import styles from './styles';

export const Button = ({
  height = scale(45),
  onPress,
  label,
  bgColor = colors.white1,
  labelColor = colors.blue1,
  containerStyle,
  marginTop = 0,
  marginBottom = 0,
  marginHorizontal = 0,
  transparent,
  borderRadius = scale(2),
}) => (
  <Pressable
    onPress={onPress}
    style={[
      styles.button,
      {
        height,
        backgroundColor: transparent ? colors.transparent : bgColor,
        marginTop,
        marginBottom,
        marginHorizontal,
        borderWidth: transparent && scale(1),
        borderColor: colors.white1,
        borderRadius,
      },
      containerStyle,
    ]}>
    <Text
      style={[styles.label, {color: transparent ? colors.white1 : labelColor}]}>
      {label}
    </Text>
  </Pressable>
);
