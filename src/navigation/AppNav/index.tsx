import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {colors, sizes} from '@/lib/constants';
import {HomeScreen, ProfileScreen, TopUpScreen, TransactionScreen} from '@/screens';

export type AppNavParamList = {
  Home: undefined;
  TopUp: undefined;
  Transaction: undefined;
  Akun: undefined;
};

type AppNavProps = {
  navigation: BottomTabNavigationProp<AppNavParamList>;
};

const Tab = createBottomTabNavigator<AppNavParamList>();

export default function AppNav({navigation}: AppNavProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        headerShown: false,
        tabBarStyle: {
          height: sizes.height.m,
          paddingTop: sizes.padding.xs,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontWeight: sizes.fontWeight.l,
          fontSize: sizes.fontSize.xs,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({color, focused}) => (
          //   <Icon name={focused ? 'home' : 'home-outline'} color={color} size={sizes.fontSize.m} />
          // ),
        }}
      />
      <Tab.Screen
        name="TopUp"
        component={TopUpScreen}
        options={{
          tabBarLabel: 'Top Up',
          // tabBarIcon: ({color, focused}) => (
          //   <MaterialIcons name={focused ? 'money' : 'money'} color={color} size={sizes.fontSize.m} />
          // ),
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon={'arrow-left'} />
              <Text style={{fontSize: sizes.fontSize.s, color: colors.textPrimary}}>kembali</Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Top Up',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: sizes.fontSize.s,
            fontWeight: sizes.fontWeight.xl,
            color: colors.textPrimary,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Transaction',
          // tabBarIcon: ({color, focused}) => <FontAwesome name={focused ? 'inbox' : 'inbox'} color={color} size={24} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <IconButton icon={'arrow-left'} />
              <Text style={{fontSize: sizes.fontSize.s, color: colors.textPrimary}}>kembali</Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Transaksi',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: sizes.fontSize.l,
            fontWeight: sizes.fontWeight.xl,
            color: colors.textPrimary,
          },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen name="Akun" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
