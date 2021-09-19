import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import Login from '../screens/AuthScreens/Login';
import {screenNames} from '../utilities/constants';
import Signup from '../screens/AuthScreens/Signup';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}>
    <AuthStack.Screen name={screenNames.Login} component={Login} />
    <AuthStack.Screen name={screenNames.Signup} component={Signup} />
    <AuthStack.Screen
      name={screenNames.ForgotPassword}
      component={ForgotPassword}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
