import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';

import store from './store';
import {colors} from './utilities/constants';
import {navigationRef} from './utilities/navigationService';
import {layout} from './utilities/layout';
import AppNavigator from './navigation/AppNavigator';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => (
  <NavigationContainer ref={navigationRef}>
    <Provider store={store}>
      <StatusBar
        translucent={!layout.isOldDevice}
        backgroundColor={
          !layout.isOldDevice ? colors.transparent : colors.black1
        }
        barStyle={'dark-content'}
      />

      <AppNavigator />

      <FlashMessage position={'top'} />
    </Provider>
  </NavigationContainer>
);

export default App;
