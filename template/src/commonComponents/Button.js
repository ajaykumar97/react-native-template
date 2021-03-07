import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { fonts } from '../assets';
import { colors } from '../utilities/constants';

const Button = ({
  onPress,
  label,
  bgColor,
  labelColor,
  containerStyle,
  marginTop = 0,
  marginBottom = 0,
  marginHorizontal = 0,
  transparent,
  borderRadius = moderateScale(2)
}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: bgColor || (transparent ? colors.transparent : colors.blue1),
          marginTop,
          marginBottom,
          marginHorizontal,
          borderWidth: transparent ? moderateScale(2) : 0,
          borderColor: transparent ? colors.white1 : 'transparent',
          borderRadius
        },
        containerStyle
      ]}
    >
      <Text
        style={{
          ...styles.label,
          color: labelColor || (transparent ? colors.blue1 : colors.white1)
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

const styles = StyleSheet.create({
  button: {
    borderRadius: moderateScale(2),
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(45),
  },
  label: {
    color: colors.blue2,
    fontSize: moderateScale(18),
    fontFamily: fonts.semiBold,
    textAlign: 'center'
  },
});

export { Button };
