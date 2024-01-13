import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PaymentScreen} from '@/screens';

import AppTabNav from './AppTabNav';

export type AppMainNavParamList = {
  Main: undefined;
  Payment: undefined;
};

const Stack = createNativeStackNavigator<AppMainNavParamList>();

export default function AppMainNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={AppTabNav} options={{headerShown: false}} />
      <Stack.Screen name="Payment" component={PaymentScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
