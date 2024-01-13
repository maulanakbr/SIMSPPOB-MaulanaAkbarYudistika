import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen, RegisterScreen} from '@/screens';

export type AppAuthNavParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AppAuthNavParamList>();

export default function AppAuthNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
