import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../utilities/constants';

const Wrapper = ({
  children,
  wrapperStyle,
  wrapperBackgroundColor
}) => (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: wrapperBackgroundColor || colors.white1
        },
        wrapperStyle,
      ]}
    >
      {children}
    </SafeAreaView>
  );

export { Wrapper };
