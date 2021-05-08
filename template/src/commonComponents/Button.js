import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

import {fonts} from '../assets';
import {colors} from '../utilities/constants';

const Button = ({
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
        borderWidth: transparent && scale(2),
        borderColor: transparent ? colors.white1 : colors.transparent,
        borderRadius,
      },
      containerStyle,
    ]}>
    <Text
      style={{
        ...styles.label,
        color: transparent ? colors.blue1 : labelColor,
      }}>
      {label}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: scale(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.blue2,
    fontSize: scale(18),
    fontFamily: fonts.semiBold,
    textAlign: 'center',
  },
});

export {Button};
