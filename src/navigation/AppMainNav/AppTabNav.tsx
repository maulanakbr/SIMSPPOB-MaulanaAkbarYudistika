import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {colors, sizes} from '@/lib/constants';
import {HomeScreen, ProfileScreen, TopUpScreen, TransactionScreen} from '@/screens';

export type AppTabNavParamList = {
  Home: undefined;
  TopUp: undefined;
  Transaction: undefined;
  Akun: undefined;
};

type AppTabNavProps = {
  navigation?: BottomTabNavigationProp<
    AppTabNavParamList,
    'Home' | 'TopUp' | 'Transaction' | 'Akun'
  >;
};

const Tab = createBottomTabNavigator<AppTabNavParamList>();

export default function AppTabNav({navigation}: AppTabNavProps) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.secondary,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="TopUp"
        component={TopUpScreen}
        options={{
          tabBarLabel: 'Top Up',
          tabBarIcon: () => <Icon name="shopping-bag" size={20} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation?.goBack()}
              style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <IconButton icon="arrow-left" />
              <Text
                style={{
                  fontSize: sizes.fontSize.s,
                  color: colors.textPrimary,
                  fontWeight: 'bold',
                  letterSpacing: 0.4,
                }}>
                Kembali
              </Text>
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
          tabBarIcon: () => <Icon name="credit-card" size={20} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation?.goBack()}
              style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <IconButton icon="arrow-left" />
              <Text
                style={{
                  fontSize: sizes.fontSize.s,
                  color: colors.textPrimary,
                  fontWeight: 'bold',
                  letterSpacing: 0.4,
                }}>
                Kembali
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Transaksi',
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
        name="Akun"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: () => <Icon name="user" size={20} />,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation?.goBack()}
              style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <IconButton icon="arrow-left" />
              <Text
                style={{
                  fontSize: sizes.fontSize.s,
                  color: colors.textPrimary,
                  fontWeight: 'bold',
                  letterSpacing: 0.4,
                }}>
                Kembali
              </Text>
            </TouchableOpacity>
          ),
          headerTitle: 'Akun',
          headerShadowVisible: false,
          headerTitleStyle: {
            fontSize: sizes.fontSize.s,
            fontWeight: sizes.fontWeight.xl,
            color: colors.textPrimary,
          },
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}
