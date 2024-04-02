import React, {useCallback} from 'react';
import {
  View,
  Pressable,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
  ImageRequireSource,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {Heading3} from '../TextComponents';

import styles from './styles';

interface HeaderProps {
  wrapperBackgroundColor?: string;
  containerStyle?: ViewStyle;
  showBottomBorder?: boolean;
  wrapperStyle?: ViewStyle;

  LeftIconSource?: React.FC<SvgProps>;
  onLeftPress?: () => void;
  disableLeft?: boolean;
  leftButtonStyle?: ViewStyle;
  leftIconStyle?: ImageStyle;

  rightIconSource?: ImageRequireSource;
  onRightPress?: () => void;
  disableRight?: boolean;
  rightButtonStyle?: ViewStyle;
  renderRightButton?: () => React.ReactNode;
  rightIconStyle?: ImageStyle;

  title?: string;
  titleColor?: string;
  titleStyle?: TextStyle;
  renderCenterTitle?: () => React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  wrapperBackgroundColor,
  containerStyle,
  showBottomBorder,
  wrapperStyle,

  LeftIconSource,
  onLeftPress,
  disableLeft,
  leftButtonStyle,

  rightIconSource,
  onRightPress,
  disableRight,
  rightButtonStyle,
  renderRightButton,
  rightIconStyle,

  title,
  titleStyle,
  renderCenterTitle,
}) => {
  const renderLeft = useCallback(() => {
    if (disableLeft || !LeftIconSource) {
      return <View style={styles.leftStyle} />;
    }

    return (
      <Pressable
        style={[styles.leftStyle, leftButtonStyle]}
        onPress={onLeftPress}>
        <LeftIconSource />
      </Pressable>
    );
  }, [disableLeft, leftButtonStyle, LeftIconSource, onLeftPress]);

  const renderRight = useCallback(() => {
    if (renderRightButton) {
      return renderRightButton();
    }
    if (!disableRight && rightIconSource) {
      return (
        <Pressable
          style={[styles.rightStyle, rightButtonStyle]}
          onPress={onRightPress}>
          <Image source={rightIconSource} style={rightIconStyle} />
        </Pressable>
      );
    }
    return <View style={styles.leftStyle} />;
  }, [
    disableRight,
    onRightPress,
    renderRightButton,
    rightButtonStyle,
    rightIconSource,
    rightIconStyle,
  ]);

  const renderTitle = useCallback(() => {
    if (renderCenterTitle) {
      return renderCenterTitle();
    }
    if (title) {
      return (
        <View style={[styles.titleContainer]}>
          <Heading3
            style={{...styles.titleStyle, ...titleStyle}}
            numberOfLines={1}>
            {title}
          </Heading3>
        </View>
      );
    }
    return <View />;
  }, [renderCenterTitle, title, titleStyle]);

  return (
    <View
      style={[
        {...styles.wrapper, backgroundColor: wrapperBackgroundColor},
        wrapperStyle,
      ]}>
      <View
        style={[
          styles.container,
          showBottomBorder && styles.borderBottom1px,
          containerStyle,
        ]}>
        {renderLeft()}
        {renderTitle()}
        {renderRight()}
      </View>
    </View>
  );
};

export default Header;
