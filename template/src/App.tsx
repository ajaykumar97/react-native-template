import {useNetInfo} from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {I18nextProvider} from 'react-i18next';
import {StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';

import NoInternetBanner from './commonComponents/NoInternetBanner';
import i18next from './localization';
import AppNavigator from './navigation/AppNavigator';
import store from './store';
import {COLORS} from './utilities/constants';
import {navigationRef} from './utilities/navigationService';

function App(): React.JSX.Element {
  const {isConnected} = useNetInfo();

  if (isConnected === false) {
    return <NoInternetBanner />;
  }

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
