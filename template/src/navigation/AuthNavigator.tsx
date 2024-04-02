import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/AuthScreens/Login';
import {SCREEN_NAMES} from '../utilities/constants';
import Signup from '../screens/AuthScreens/Signup';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword';

const AuthStack = createStackNavigator();

interface AuthNavigatorProps {}

const AuthNavigator: React.FC<AuthNavigatorProps> = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AuthStack.Screen name={SCREEN_NAMES.Login} component={Login} />
    <AuthStack.Screen name={SCREEN_NAMES.Signup} component={Signup} />
    <AuthStack.Screen
      name={SCREEN_NAMES.ForgotPassword}
      component={ForgotPassword}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
