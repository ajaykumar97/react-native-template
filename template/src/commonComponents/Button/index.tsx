import React from 'react';
import {Pressable, PressableProps, ViewStyle} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../utilities/constants';
import {Body1} from '../TextComponents';

import styles from './styles';

interface ButtonProps {
  height?: number;
  onPress: PressableProps['onPress'];
  label: string;
  bgColor?: string;
  labelColor?: string;
  containerStyle?: ViewStyle;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  transparent?: boolean;
  borderRadius?: number;
}

const Button: React.FC<ButtonProps> = ({
  height = scale(45),
  onPress,
  label,
  bgColor = COLORS.white1,
  labelColor = COLORS.blue1,
  containerStyle,
  marginTop = 0,
  marginBottom = 0,
  marginHorizontal = 0,
  transparent,
  borderRadius = scale(2),
}) => (
  <Pressable
    onPress={onPress}
    style={({pressed}) => [
      styles.button,
      {
        height,
        backgroundColor: transparent
          ? pressed
            ? COLORS.white1
            : bgColor
          : bgColor,
        marginTop,
        marginBottom,
        marginHorizontal,
        borderWidth: transparent ? scale(1) : 0,
        borderColor: COLORS.white1,
        borderRadius,
      },
      containerStyle,
    ]}>
    {({pressed}) => (
      <Body1
        style={
          (styles.label,
          {
            color: transparent
              ? pressed
                ? bgColor
                : COLORS.white1
              : labelColor,
          })
        }>
        {label}
      </Body1>
    )}
  </Pressable>
);

export default Button;
