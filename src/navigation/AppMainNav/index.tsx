import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PaymentScreen} from '@/screens';
import {ServiceData} from '@/types';

import AppTabNav from './AppTabNav';

export type AppMainNavParamList = {
  Main: undefined;
  Payment: {
    data: ServiceData;
  };
};
const Stack = createNativeStackNavigator<AppMainNavParamList>();

export default function AppMainNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={AppTabNav} options={{headerShown: false}} />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{headerShown: true, headerTitle: 'Pembayaran', headerShadowVisible: false}}
      />
    </Stack.Navigator>
  );
}
