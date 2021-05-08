import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  I18nManager,
} from 'react-native';
import {scale} from 'react-native-size-matters';

import {colors} from '../utilities/constants';
import {fonts} from '../assets';

const Header = ({
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
    if (!disableLeft && leftIconSource) {
      return (
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.leftStyle, leftButtonStyle]}
          onPress={onLeftPress}>
          <Image
            source={leftIconSource}
            style={[
              leftIconStyle,
              {transform: [{rotateY: I18nManager.isRTL ? '180deg' : '0deg'}]},
            ]}
          />
        </TouchableOpacity>
      );
    }
    return <View style={styles.leftStyle} />;
  };

  const renderRight = () => {
    if (renderRightButton) {
      return renderRightButton();
    } else if (!disableRight && rightIconSource) {
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
    } else if (title) {
      return (
        <View
          style={{
            flex: 1,
            marginHorizontal:
              titlePosition === 'center' ? scale(10) : 0,
          }}>
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
          containerStyle,
          {
            borderBottomWidth: showBottomBorder ? scale(0.5) : 0,
            borderBottomColor: colors.grey1,
          },
        ]}>
        {renderLeft()}
        {renderTitle()}
        {renderRight()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: scale(56),
    overflow: 'hidden',
    backgroundColor: colors.white1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftStyle: {
    height: scale(56),
    width: scale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightStyle: {
    height: scale(56),
    width: scale(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: scale(20),
    fontFamily: fonts.semiBold,
  },
});

export {Header};
