import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {I18nextProvider} from 'react-i18next';

import store from './store';
import {COLORS} from './utilities/constants';
import {navigationRef} from './utilities/navigationService';
import AppNavigator from './navigation/AppNavigator';
import i18next from './localization';

function App(): React.JSX.Element {
  return (
    <I18nextProvider i18n={i18next}>
      <NavigationContainer ref={navigationRef}>
        <Provider store={store}>
          <StatusBar
            translucent
            backgroundColor={COLORS.transparent}
            barStyle={'dark-content'}
          />

          <AppNavigator />

          <FlashMessage position={'top'} />
        </Provider>
      </NavigationContainer>
    </I18nextProvider>
  );
}

export default App;
