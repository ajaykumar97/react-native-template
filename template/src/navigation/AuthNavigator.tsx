import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import ForgotPassword from '../screens/AuthScreens/ForgotPassword';
import Login from '../screens/AuthScreens/Login';
import Signup from '../screens/AuthScreens/Signup';
import {SCREEN_NAMES} from '../utilities/constants';

const AuthStack = createStackNavigator();

interface AuthNavigatorProps {}

const AuthNavigator: React.FC<AuthNavigatorProps> = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
    <AuthStack.Screen name={SCREEN_NAMES.Login} component={Login} />
    <AuthStack.Screen name={SCREEN_NAMES.Signup} component={Signup} />
    <AuthStack.Screen
      name={SCREEN_NAMES.ForgotPassword}
      component={ForgotPassword}
    />
  </AuthStack.Navigator>
);

export default AuthNavigator;
