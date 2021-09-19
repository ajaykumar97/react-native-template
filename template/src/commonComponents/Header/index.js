import React from 'react';
import {View, TouchableOpacity, Image, Text, I18nManager} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../../utilities/constants';
import styles from './styles';

export const Header = ({
  wrapperBackgroundColor,
  containerStyle,
  showBottomBorder,
  wrapperStyle,

  leftIconSource,
  onLeftPress,
  disableLeft,
  leftButtonStyle,
  leftIconStyle,

  rightIconSource,
  onRightPress,
  disableRight,
  rightButtonStyle,
  renderRightButton,
  rightIconStyle,

  title,
  titleColor = colors.white1,
  titleStyle,
  renderCenterTitle,
  titlePosition = 'center',
}) => {
  const renderLeft = () => {
    if (disableLeft || !leftIconSource) {
      return <View style={styles.leftStyle} />;
    }

    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.leftStyle, leftButtonStyle]}
        onPress={onLeftPress}>
        <Image
          source={leftIconSource}
          style={[
            I18nManager.isRTL && styles.rotatedIconHorizontally,
            leftIconStyle,
          ]}
        />
      </TouchableOpacity>
    );
  };

  const renderRight = () => {
    if (renderRightButton) {
      return renderRightButton();
    }
    if (!disableRight && rightIconSource) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.rightStyle, rightButtonStyle]}
          onPress={onRightPress}>
          <Image source={rightIconSource} style={rightIconStyle} />
        </TouchableOpacity>
      );
    }
    return <View style={styles.leftStyle} />;
  };

  const renderTitle = () => {
    if (renderCenterTitle) {
      return renderCenterTitle();
    }
    if (title) {
      return (
        <View
          style={[
            styles.titleContainer,
            titlePosition === 'center' && scale(10),
          ]}>
          <Text
            style={[
              {
                ...styles.titleStyle,
                color: titleColor,
                textAlign: titlePosition,
              },
              titleStyle,
            ]}
            numberOfLines={1}>
            {title}
          </Text>
        </View>
      );
    }
    return <View />;
  };

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
