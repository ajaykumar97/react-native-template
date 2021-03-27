import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import {screenNames} from '../utilities/constants';
import Users from '../screens/MainAppScreens/Users';

const MainStack = createStackNavigator();

const MainNavigator = () => (
  <MainStack.Navigator
    headerMode={'none'}
    screenOptions={{
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <MainStack.Screen name={screenNames.UsersScreen} component={Users} />
  </MainStack.Navigator>
);

export default MainNavigator;
