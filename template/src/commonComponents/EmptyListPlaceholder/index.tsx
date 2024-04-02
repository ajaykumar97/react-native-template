import React from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';

import {Body1} from '../TextComponents';

import styles from './styles';

interface EmptyListPlaceholderProps {
  containerStyle?: ViewStyle;
  placeholderStyle?: TextStyle;
  placeholder: string;
  insideList?: boolean;
}

const EmptyListPlaceholder: React.FC<EmptyListPlaceholderProps> = ({
  containerStyle,
  placeholderStyle,
  placeholder,
  insideList,
}) => (
  <View
    style={[
      styles.container,
      insideList && styles.emptyListContainer,
      containerStyle,
    ]}>
    <Body1 style={{...styles.placeholder, ...placeholderStyle}}>
      {placeholder}
    </Body1>
  </View>
);

export default EmptyListPlaceholder;
