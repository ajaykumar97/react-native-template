import {useNetInfo} from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {I18nextProvider, useTranslation} from 'react-i18next';
import {Alert, StatusBar} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';

import i18next from './localization';
import AppNavigator from './navigation/AppNavigator';
import store from './store';
import {COLORS} from './utilities/constants';
import {navigationRef} from './utilities/navigationService';

function App(): React.JSX.Element {
  const {isConnected} = useNetInfo();
  const {t} = useTranslation();

  useEffect(() => {
    if (isConnected === false) {
      Alert.alert(t('noInternetConnected'), t('checkInternetConnection'));
    }
  }, [isConnected, t]);
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
