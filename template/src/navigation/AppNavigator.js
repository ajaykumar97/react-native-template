import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import BootStrapApp from '../screens/AuthScreens/BootStrapApp';
import {screenNames} from '../utilities/constants';

const AppStack = createStackNavigator();

const AppNavigator = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <AppStack.Screen name={screenNames.BootStrapApp} component={BootStrapApp} />
    <AppStack.Screen
      name={screenNames.AuthNavigator}
      component={AuthNavigator}
    />
    <AppStack.Screen
      name={screenNames.MainNavigator}
      component={MainNavigator}
    />
  </AppStack.Navigator>
);

export default AppNavigator;
