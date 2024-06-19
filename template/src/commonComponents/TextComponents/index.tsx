import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {COLORS} from '../../utilities/constants';

type TextProps = {
  style?: StyleProp<TextStyle> | undefined;
  fontSize?: number;
  children: React.ReactNode;
  fontFamily?: string;
  onPress?: (event: GestureResponderEvent) => void;
  props?: TextProps;
  color?: ColorValue;
};

export const fontsFamily = {
  arialRegular: 'arial',
  arialMedium: 'arial',
  arialSemiBold: 'arial',
  arialBold: 'arial',
};

export const TextComponents: React.FC<TextProps> = ({
  style,
  fontSize,
  children,
  fontFamily,
  onPress,
  props,
  color,
}) => {
  return (
    <Text
      onPress={onPress}
      {...props}
      style={{
        color,
        fontSize,
        fontFamily,
        ...(style as object),
      }}>
      {children}
    </Text>
  );
};
export const Heading1: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.blue1}
      {...props}
      fontSize={scale(28)}
      fontFamily={fontsFamily.arialBold}
    />
  );
};
export const Heading2: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.blue1}
      {...props}
      fontSize={scale(24)}
      fontFamily={fontsFamily.arialSemiBold}
    />
  );
};

export const Heading3: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.blue1}
      {...props}
      fontSize={scale(20)}
      fontFamily={fontsFamily.arialSemiBold}
    />
  );
};

export const SubHeading: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.blue1}
      {...props}
      fontSize={scale(20)}
      fontFamily={fontsFamily.arialMedium}
    />
  );
};

export const Body1: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.blue1}
      {...props}
      fontSize={scale(16)}
      fontFamily={fontsFamily.arialRegular}
    />
  );
};

export const Body2: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.blue1}
      {...props}
      fontSize={scale(14)}
      fontFamily={fontsFamily.arialRegular}
    />
  );
};

export const Body3: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.blue1}
      {...props}
      fontSize={scale(14)}
      fontFamily={fontsFamily.arialRegular}
    />
  );
};

export const ErrorText: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.red1}
      {...props}
      fontSize={scale(14)}
      fontFamily={fontsFamily.arialRegular}
    />
  );
};
