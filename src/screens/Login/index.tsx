import * as React from 'react';
import {Image} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import AuthForm from '@/components/Shared/AuthForm';
import {Box, Text} from '@/components/UI';
import type {AuthNavParamList} from '@/navigation/AuthNav';

import style from './style';

export type LoginScreenProps = NativeStackNavigationProp<AuthNavParamList, 'Login'>;

export default function LoginScreen() {
  return (
    <Box variants="container">
      <Box variants="flexRow">
        <Image source={require('@/assets/Logo.png')} style={style.imgLogo} />
        <Text variants="subheader">SIMS PPOB</Text>
      </Box>
      <Text variants="header">Masuk atau buat akun untuk memulai</Text>
      <AuthForm useFor="Login" />
    </Box>
  );
}
