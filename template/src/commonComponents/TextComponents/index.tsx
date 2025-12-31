import React from 'react';
import {
  ColorValue,
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
} from 'react-native';

import {COLORS, FONT_SIZES} from '../../utilities/constants';

type TextProps = {
  style?: StyleProp<TextStyle> | undefined;
  fontSize?: number;
  children: React.ReactNode;
  fontFamily?: string;
  onPress?: (event: GestureResponderEvent) => void;
  props?: TextProps;
  color?: ColorValue;
  numberOfLines?: number;
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
  numberOfLines,
}) => {
  return (
    <Text
      onPress={onPress}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={{
        color,
        fontSize,
        fontFamily,
        ...(style as object),
      }}
      {...props}
    >
      {children}
    </Text>
  );
};
export const Heading1: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.black1}
      {...props}
      fontSize={FONT_SIZES.xxxl}
      fontFamily={fontsFamily.arialBold}
    />
  );
};
export const Heading2: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.black1}
      {...props}
      fontSize={FONT_SIZES.xxl}
      fontFamily={fontsFamily.arialSemiBold}
    />
  );
};

export const Heading3: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.black1}
      {...props}
      fontSize={FONT_SIZES.lg}
      fontFamily={fontsFamily.arialSemiBold}
    />
  );
};

export const SubHeading: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.black1}
      {...props}
      fontSize={FONT_SIZES.xl}
      fontFamily={fontsFamily.arialMedium}
    />
  );
};

export const Body1: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.black1}
      {...props}
      fontSize={FONT_SIZES.md}
      fontFamily={fontsFamily.arialRegular}
    />
  );
};

export const Body2: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.black1}
      {...props}
      fontSize={FONT_SIZES.sm}
      fontFamily={fontsFamily.arialRegular}
    />
  );
};

export const Body3: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.black1}
      {...props}
      fontSize={FONT_SIZES.sm}
      fontFamily={fontsFamily.arialRegular}
    />
  );
};

export const ErrorText: React.FC<TextProps> = props => {
  return (
    <TextComponents
      color={COLORS.red1}
      {...props}
      fontSize={FONT_SIZES.xs}
      fontFamily={fontsFamily.arialRegular}
    />
  );
};
