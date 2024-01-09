import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, RegisterScreen} from '@/screens';

import AppNav from '../AppNav';

export type AuthNavParamList = {
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<AuthNavParamList>();

export default function AuthNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
      <Stack.Screen name="Main" component={AppNav} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
