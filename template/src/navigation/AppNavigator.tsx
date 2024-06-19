import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';

import BootstrapApp from '../screens/AuthScreens/BootstrapApp';
import {SCREEN_NAMES} from '../utilities/constants';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const AppStack = createStackNavigator();

interface AppNavigatorProps {}

const AppNavigator: React.FC<AppNavigatorProps> = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <AppStack.Screen
      name={SCREEN_NAMES.BootstrapApp}
      component={BootstrapApp}
    />
    <AppStack.Screen
      name={SCREEN_NAMES.AuthNavigator}
      component={AuthNavigator}
    />
    <AppStack.Screen
      name={SCREEN_NAMES.MainNavigator}
      component={MainNavigator}
    />
  </AppStack.Navigator>
);

export default AppNavigator;
